;; NOTE: Assertions have been generated by update_lit_checks.py --all-items and should not be edited.
;; RUN: foreach %s %t wasm-opt --hybrid --signature-refining -all -S -o - | filecheck %s

(module
 ;; The signature should be refined to a single self-referential type.

 ;; CHECK:      (type $refined (func_subtype (param (ref $refined)) (result (ref $refined)) func))
 (type $refined (func (param (ref $refined)) (result (ref $refined))))

 ;; CHECK:      (elem declare func $foo)

 ;; CHECK:      (func $foo (type $refined) (param $0 (ref $refined)) (result (ref $refined))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (call $foo
 ;; CHECK-NEXT:    (ref.func $foo)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (ref.func $foo)
 ;; CHECK-NEXT: )
 (func $foo (param funcref) (result funcref)
  (drop
   (call $foo
    (ref.func $foo)
   )
  )
  (ref.func $foo)
 )
)

(module
 ;; The signatures should be refined to a pair of mutually self-referential types.

 (rec
  ;; CHECK:      (rec 
  ;; CHECK-NEXT:  (type $refined.1 (func_subtype (param f32 (ref $refined.1)) (result (ref $refined.0)) func))
  (type $refined.1 (func (param f32 (ref $refined.1)) (result (ref $refined.0))))
  ;; CHECK:       (type $refined.0 (func_subtype (param i32 (ref $refined.0)) (result (ref $refined.1)) func))
  (type $refined.0 (func (param i32 (ref $refined.0)) (result (ref $refined.1))))
 )

 ;; CHECK:      (elem declare func $bar $foo)

 ;; CHECK:      (func $foo (type $refined.0) (param $0 i32) (param $1 (ref $refined.0)) (result (ref $refined.1))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (call $foo
 ;; CHECK-NEXT:    (i32.const 0)
 ;; CHECK-NEXT:    (ref.func $foo)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (ref.func $bar)
 ;; CHECK-NEXT: )
 (func $foo (param i32 funcref) (result funcref)
  (drop
   (call $foo
    (i32.const 0)
    (ref.func $foo)
   )
  )
  (ref.func $bar)
 )

 ;; CHECK:      (func $bar (type $refined.1) (param $0 f32) (param $1 (ref $refined.1)) (result (ref $refined.0))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (call $bar
 ;; CHECK-NEXT:    (f32.const 0)
 ;; CHECK-NEXT:    (ref.func $bar)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (ref.func $foo)
 ;; CHECK-NEXT: )
 (func $bar (param f32 funcref) (result funcref)
  (drop
   (call $bar
    (f32.const 0)
    (ref.func $bar)
   )
  )
  (ref.func $foo)
 )
)

(module
 ;; The signatures should be refined to a pair of mutually recursive types and
 ;; another type that refers to them.

 (rec
  ;; CHECK:      (rec 
  ;; CHECK-NEXT:  (type $refined.0.0 (func_subtype (param i32 (ref $refined.0.0)) (result (ref $refined.0.1)) func))
  (type $refined.0.0 (func (param i32 (ref $refined.0.0)) (result (ref $refined.0.1))))
  ;; CHECK:       (type $refined.0.1 (func_subtype (param f32 (ref $refined.0.1)) (result (ref $refined.0.0)) func))
  (type $refined.0.1 (func (param f32 (ref $refined.0.1)) (result (ref $refined.0.0))))
 )

 ;; CHECK:      (type $refined.1 (func_subtype (param (ref $refined.0.0)) (result (ref $refined.0.1)) func))
 (type $refined.1 (func (param (ref $refined.0.0)) (result (ref $refined.0.1))))


 ;; CHECK:      (elem declare func $bar $foo)

 ;; CHECK:      (func $foo (type $refined.0.0) (param $0 i32) (param $1 (ref $refined.0.0)) (result (ref $refined.0.1))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (call $foo
 ;; CHECK-NEXT:    (i32.const 0)
 ;; CHECK-NEXT:    (ref.func $foo)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (ref.func $bar)
 ;; CHECK-NEXT: )
 (func $foo (param i32 funcref) (result funcref)
  (drop
   (call $foo
    (i32.const 0)
    (ref.func $foo)
   )
  )
  (ref.func $bar)
 )

 ;; CHECK:      (func $baz (type $refined.1) (param $0 (ref $refined.0.0)) (result (ref $refined.0.1))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (call $quux
 ;; CHECK-NEXT:    (ref.func $foo)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (ref.func $bar)
 ;; CHECK-NEXT: )
 (func $baz (param funcref) (result funcref)
  (drop
   (call $quux
    (ref.func $foo)
   )
  )
  (ref.func $bar)
 )

 ;; CHECK:      (func $bar (type $refined.0.1) (param $0 f32) (param $1 (ref $refined.0.1)) (result (ref $refined.0.0))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (call $bar
 ;; CHECK-NEXT:    (f32.const 0)
 ;; CHECK-NEXT:    (ref.func $bar)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (ref.func $foo)
 ;; CHECK-NEXT: )
 (func $bar (param f32 funcref) (result funcref)
  (drop
   (call $bar
    (f32.const 0)
    (ref.func $bar)
   )
  )
  (ref.func $foo)
 )

 ;; CHECK:      (func $quux (type $refined.1) (param $0 (ref $refined.0.0)) (result (ref $refined.0.1))
 ;; CHECK-NEXT:  (drop
 ;; CHECK-NEXT:   (call $baz
 ;; CHECK-NEXT:    (ref.func $foo)
 ;; CHECK-NEXT:   )
 ;; CHECK-NEXT:  )
 ;; CHECK-NEXT:  (ref.func $bar)
 ;; CHECK-NEXT: )
 (func $quux (param funcref) (result funcref)
  (drop
   (call $baz
    (ref.func $foo)
   )
  )
  (ref.func $bar)
 )
)
