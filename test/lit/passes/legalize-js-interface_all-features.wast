;; NOTE: Assertions have been generated by update_lit_checks.py --all-items and should not be edited.
;; NOTE: This test was ported using port_passes_tests_to_lit.py and could be cleaned up.

;; RUN: foreach %s %t wasm-opt --legalize-js-interface --all-features -S -o - | filecheck %s

(module
  ;; CHECK:      (type $0 (func (result i32)))

  ;; CHECK:      (type $1 (func (result i64)))

  ;; CHECK:      (type $2 (func (param i32 i32 i32 i32 i32)))

  ;; CHECK:      (type $3 (func))

  ;; CHECK:      (type $4 (func (param i32)))

  ;; CHECK:      (type $5 (func (param i32 i64 i64)))

  ;; CHECK:      (import "env" "setTempRet0" (func $setTempRet0 (type $4) (param i32)))
  (import "env" "imported" (func $imported (result i64)))
  ;; CHECK:      (import "env" "getTempRet0" (func $getTempRet0 (type $0) (result i32)))
  (import "env" "other" (func $other (param i32) (param i64) (param i64)))
  ;; CHECK:      (import "env" "imported" (func $legalimport$imported (type $0) (result i32)))
  (import "env" "ref-func-arg" (func $ref-func-arg (result i64)))
  ;; CHECK:      (import "env" "other" (func $legalimport$other (type $2) (param i32 i32 i32 i32 i32)))

  ;; CHECK:      (import "env" "ref-func-arg" (func $legalimport$ref-func-arg (type $0) (result i32)))

  ;; CHECK:      (elem declare func $legalfunc$ref-func-arg)

  ;; CHECK:      (export "func" (func $legalstub$func))
  (export "func" (func $func))
  ;; CHECK:      (export "ref-func-test" (func $ref-func-test))
  (export "ref-func-test" (func $ref-func-test))
  ;; CHECK:      (export "imported" (func $legalstub$imported))
  (export "imported" (func $imported))
  ;; CHECK:      (export "imported_again" (func $legalstub$imported))
  (export "imported_again" (func $imported))
  ;; CHECK:      (export "other" (func $legalstub$other))
  (export "other" (func $other))
  ;; CHECK:      (func $func (type $1) (result i64)
  ;; CHECK-NEXT:  (drop
  ;; CHECK-NEXT:   (call $legalfunc$imported)
  ;; CHECK-NEXT:  )
  ;; CHECK-NEXT:  (call $legalfunc$other
  ;; CHECK-NEXT:   (i32.const 0)
  ;; CHECK-NEXT:   (i64.const 0)
  ;; CHECK-NEXT:   (i64.const 0)
  ;; CHECK-NEXT:  )
  ;; CHECK-NEXT:  (unreachable)
  ;; CHECK-NEXT: )
  (func $func (result i64)
    (drop (call $imported))
    (call $other
      (i32.const 0)
      (i64.const 0)
      (i64.const 0)
    )
    (unreachable)
  )

  ;; ref.func must also be updated.
  ;; CHECK:      (func $ref-func-test (type $3)
  ;; CHECK-NEXT:  (drop
  ;; CHECK-NEXT:   (call $legalfunc$ref-func-arg)
  ;; CHECK-NEXT:  )
  ;; CHECK-NEXT:  (drop
  ;; CHECK-NEXT:   (ref.func $legalfunc$ref-func-arg)
  ;; CHECK-NEXT:  )
  ;; CHECK-NEXT: )
  (func $ref-func-test
    (drop
      (call $ref-func-arg)
    )
    (drop
      (ref.func $ref-func-arg)
    )
  )
)
;; CHECK:      (func $legalstub$func (type $0) (result i32)
;; CHECK-NEXT:  (local $0 i64)
;; CHECK-NEXT:  (local.set $0
;; CHECK-NEXT:   (call $func)
;; CHECK-NEXT:  )
;; CHECK-NEXT:  (call $setTempRet0
;; CHECK-NEXT:   (i32.wrap_i64
;; CHECK-NEXT:    (i64.shr_u
;; CHECK-NEXT:     (local.get $0)
;; CHECK-NEXT:     (i64.const 32)
;; CHECK-NEXT:    )
;; CHECK-NEXT:   )
;; CHECK-NEXT:  )
;; CHECK-NEXT:  (i32.wrap_i64
;; CHECK-NEXT:   (local.get $0)
;; CHECK-NEXT:  )
;; CHECK-NEXT: )

;; CHECK:      (func $legalstub$imported (type $0) (result i32)
;; CHECK-NEXT:  (local $0 i64)
;; CHECK-NEXT:  (local.set $0
;; CHECK-NEXT:   (call $legalfunc$imported)
;; CHECK-NEXT:  )
;; CHECK-NEXT:  (call $setTempRet0
;; CHECK-NEXT:   (i32.wrap_i64
;; CHECK-NEXT:    (i64.shr_u
;; CHECK-NEXT:     (local.get $0)
;; CHECK-NEXT:     (i64.const 32)
;; CHECK-NEXT:    )
;; CHECK-NEXT:   )
;; CHECK-NEXT:  )
;; CHECK-NEXT:  (i32.wrap_i64
;; CHECK-NEXT:   (local.get $0)
;; CHECK-NEXT:  )
;; CHECK-NEXT: )

;; CHECK:      (func $legalstub$other (type $2) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
;; CHECK-NEXT:  (call $legalfunc$other
;; CHECK-NEXT:   (local.get $0)
;; CHECK-NEXT:   (i64.or
;; CHECK-NEXT:    (i64.extend_i32_u
;; CHECK-NEXT:     (local.get $1)
;; CHECK-NEXT:    )
;; CHECK-NEXT:    (i64.shl
;; CHECK-NEXT:     (i64.extend_i32_u
;; CHECK-NEXT:      (local.get $2)
;; CHECK-NEXT:     )
;; CHECK-NEXT:     (i64.const 32)
;; CHECK-NEXT:    )
;; CHECK-NEXT:   )
;; CHECK-NEXT:   (i64.or
;; CHECK-NEXT:    (i64.extend_i32_u
;; CHECK-NEXT:     (local.get $3)
;; CHECK-NEXT:    )
;; CHECK-NEXT:    (i64.shl
;; CHECK-NEXT:     (i64.extend_i32_u
;; CHECK-NEXT:      (local.get $4)
;; CHECK-NEXT:     )
;; CHECK-NEXT:     (i64.const 32)
;; CHECK-NEXT:    )
;; CHECK-NEXT:   )
;; CHECK-NEXT:  )
;; CHECK-NEXT: )

;; CHECK:      (func $legalfunc$imported (type $1) (result i64)
;; CHECK-NEXT:  (i64.or
;; CHECK-NEXT:   (i64.extend_i32_u
;; CHECK-NEXT:    (call $legalimport$imported)
;; CHECK-NEXT:   )
;; CHECK-NEXT:   (i64.shl
;; CHECK-NEXT:    (i64.extend_i32_u
;; CHECK-NEXT:     (call $getTempRet0)
;; CHECK-NEXT:    )
;; CHECK-NEXT:    (i64.const 32)
;; CHECK-NEXT:   )
;; CHECK-NEXT:  )
;; CHECK-NEXT: )

;; CHECK:      (func $legalfunc$other (type $5) (param $0 i32) (param $1 i64) (param $2 i64)
;; CHECK-NEXT:  (call $legalimport$other
;; CHECK-NEXT:   (local.get $0)
;; CHECK-NEXT:   (i32.wrap_i64
;; CHECK-NEXT:    (local.get $1)
;; CHECK-NEXT:   )
;; CHECK-NEXT:   (i32.wrap_i64
;; CHECK-NEXT:    (i64.shr_u
;; CHECK-NEXT:     (local.get $1)
;; CHECK-NEXT:     (i64.const 32)
;; CHECK-NEXT:    )
;; CHECK-NEXT:   )
;; CHECK-NEXT:   (i32.wrap_i64
;; CHECK-NEXT:    (local.get $2)
;; CHECK-NEXT:   )
;; CHECK-NEXT:   (i32.wrap_i64
;; CHECK-NEXT:    (i64.shr_u
;; CHECK-NEXT:     (local.get $2)
;; CHECK-NEXT:     (i64.const 32)
;; CHECK-NEXT:    )
;; CHECK-NEXT:   )
;; CHECK-NEXT:  )
;; CHECK-NEXT: )

;; CHECK:      (func $legalfunc$ref-func-arg (type $1) (result i64)
;; CHECK-NEXT:  (i64.or
;; CHECK-NEXT:   (i64.extend_i32_u
;; CHECK-NEXT:    (call $legalimport$ref-func-arg)
;; CHECK-NEXT:   )
;; CHECK-NEXT:   (i64.shl
;; CHECK-NEXT:    (i64.extend_i32_u
;; CHECK-NEXT:     (call $getTempRet0)
;; CHECK-NEXT:    )
;; CHECK-NEXT:    (i64.const 32)
;; CHECK-NEXT:   )
;; CHECK-NEXT:  )
;; CHECK-NEXT: )
(module)
