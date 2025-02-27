import * as env from 'env';

function asmFunc(imports) {
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var env = imports.env;
 var setTempRet0 = env.setTempRet0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $0($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $12 = 0, $12$hi = 0, $8 = 0, $8$hi = 0;
  i64toi32_i32$2 = $0_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 0;
  if ((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & ($0$hi | 0) == (i64toi32_i32$1 | 0) | 0) {
   i64toi32_i32$2 = 0;
   $12 = 1;
   $12$hi = i64toi32_i32$2;
  } else {
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$3 = $0_1;
   i64toi32_i32$1 = 1;
   i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + 0 | 0;
   i64toi32_i32$5 = $0$hi - i64toi32_i32$5 | 0;
   i64toi32_i32$5 = $0(i64toi32_i32$3 - i64toi32_i32$1 | 0 | 0, i64toi32_i32$5 | 0) | 0;
   i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
   $8 = i64toi32_i32$5;
   $8$hi = i64toi32_i32$3;
   i64toi32_i32$3 = $0$hi;
   i64toi32_i32$5 = $8$hi;
   i64toi32_i32$5 = __wasm_i64_mul($0_1 | 0, i64toi32_i32$3 | 0, $8 | 0, i64toi32_i32$5 | 0) | 0;
   i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
   $12 = i64toi32_i32$5;
   $12$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = $12$hi;
  i64toi32_i32$5 = $12;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function fac_rec_named(n, n$hi) {
  n = n | 0;
  n$hi = n$hi | 0;
  var i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $12 = 0, $12$hi = 0, $8 = 0, $8$hi = 0;
  i64toi32_i32$2 = n;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 0;
  if ((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (n$hi | 0) == (i64toi32_i32$1 | 0) | 0) {
   i64toi32_i32$2 = 0;
   $12 = 1;
   $12$hi = i64toi32_i32$2;
  } else {
   i64toi32_i32$2 = n$hi;
   i64toi32_i32$3 = n;
   i64toi32_i32$1 = 1;
   i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + 0 | 0;
   i64toi32_i32$5 = n$hi - i64toi32_i32$5 | 0;
   i64toi32_i32$5 = fac_rec_named(i64toi32_i32$3 - i64toi32_i32$1 | 0 | 0, i64toi32_i32$5 | 0) | 0;
   i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
   $8 = i64toi32_i32$5;
   $8$hi = i64toi32_i32$3;
   i64toi32_i32$3 = n$hi;
   i64toi32_i32$5 = $8$hi;
   i64toi32_i32$5 = __wasm_i64_mul(n | 0, i64toi32_i32$3 | 0, $8 | 0, i64toi32_i32$5 | 0) | 0;
   i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
   $12 = i64toi32_i32$5;
   $12$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = $12$hi;
  i64toi32_i32$5 = $12;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function $2($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, $1$hi = 0, i64toi32_i32$5 = 0, $1 = 0, $2$hi = 0, i64toi32_i32$1 = 0, $2_1 = 0;
  i64toi32_i32$0 = $0$hi;
  $1 = $0_1;
  $1$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $2_1 = 1;
  $2$hi = i64toi32_i32$0;
  block : {
   loop_in : while (1) {
    i64toi32_i32$0 = $1$hi;
    i64toi32_i32$2 = $1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 0;
    if ((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) | 0) {
     break block
    } else {
     i64toi32_i32$2 = $1$hi;
     i64toi32_i32$2 = $2$hi;
     i64toi32_i32$2 = $1$hi;
     i64toi32_i32$0 = $2$hi;
     i64toi32_i32$0 = __wasm_i64_mul($1 | 0, i64toi32_i32$2 | 0, $2_1 | 0, i64toi32_i32$0 | 0) | 0;
     i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
     $2_1 = i64toi32_i32$0;
     $2$hi = i64toi32_i32$2;
     i64toi32_i32$2 = $1$hi;
     i64toi32_i32$3 = $1;
     i64toi32_i32$0 = 0;
     i64toi32_i32$1 = 1;
     i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
     i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
     $1 = i64toi32_i32$3 - i64toi32_i32$1 | 0;
     $1$hi = i64toi32_i32$5;
    }
    continue loop_in;
   };
  }
  i64toi32_i32$5 = $2$hi;
  i64toi32_i32$3 = $2_1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
  return i64toi32_i32$3 | 0;
 }
 
 function $3(n, n$hi) {
  n = n | 0;
  n$hi = n$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i$hi = 0, i64toi32_i32$5 = 0, i = 0, res$hi = 0, i64toi32_i32$1 = 0, res = 0;
  i64toi32_i32$0 = n$hi;
  i = n;
  i$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  res = 1;
  res$hi = i64toi32_i32$0;
  done : {
   loop : while (1) {
    i64toi32_i32$0 = i$hi;
    i64toi32_i32$2 = i;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 0;
    if ((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) | 0) {
     break done
    } else {
     i64toi32_i32$2 = i$hi;
     i64toi32_i32$2 = res$hi;
     i64toi32_i32$2 = i$hi;
     i64toi32_i32$0 = res$hi;
     i64toi32_i32$0 = __wasm_i64_mul(i | 0, i64toi32_i32$2 | 0, res | 0, i64toi32_i32$0 | 0) | 0;
     i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
     res = i64toi32_i32$0;
     res$hi = i64toi32_i32$2;
     i64toi32_i32$2 = i$hi;
     i64toi32_i32$3 = i;
     i64toi32_i32$0 = 0;
     i64toi32_i32$1 = 1;
     i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
     i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
     i = i64toi32_i32$3 - i64toi32_i32$1 | 0;
     i$hi = i64toi32_i32$5;
    }
    continue loop;
   };
  }
  i64toi32_i32$5 = res$hi;
  i64toi32_i32$3 = res;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
  return i64toi32_i32$3 | 0;
 }
 
 function $4($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, $1$hi = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, i64toi32_i32$4 = 0, $13 = 0, $14 = 0, $15 = 0;
  i64toi32_i32$0 = 0;
  $1 = 1;
  $1$hi = i64toi32_i32$0;
  block : {
   i64toi32_i32$0 = $0$hi;
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 2;
   if ((i64toi32_i32$0 | 0) < (i64toi32_i32$1 | 0)) {
    $10 = 1
   } else {
    if ((i64toi32_i32$0 | 0) <= (i64toi32_i32$1 | 0)) {
     if (i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0) {
      $11 = 0
     } else {
      $11 = 1
     }
     $12 = $11;
    } else {
     $12 = 0
    }
    $10 = $12;
   }
   if ($10) {
    break block
   }
   loop_in : while (1) {
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$2 = $1$hi;
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$0 = __wasm_i64_mul($1 | 0, i64toi32_i32$2 | 0, $0_1 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $1 = i64toi32_i32$0;
    $1$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$0 = -1;
    i64toi32_i32$1 = -1;
    i64toi32_i32$4 = $0_1 + i64toi32_i32$1 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    $0_1 = i64toi32_i32$4;
    $0$hi = i64toi32_i32$5;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$1 = 1;
    if ((i64toi32_i32$5 | 0) > (i64toi32_i32$3 | 0)) {
     $13 = 1
    } else {
     if ((i64toi32_i32$5 | 0) >= (i64toi32_i32$3 | 0)) {
      if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$1 >>> 0) {
       $14 = 0
      } else {
       $14 = 1
      }
      $15 = $14;
     } else {
      $15 = 0
     }
     $13 = $15;
    }
    if ($13) {
     continue loop_in
    }
    break loop_in;
   };
  }
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$5 = $1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$5 | 0;
 }
 
 function legalstub$0($0_1, $1) {
  $0_1 = $0_1 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0_1;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $12 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $12 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $0(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2_1 = i64toi32_i32$2;
  $2$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $13 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $13 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($13 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function legalstub$fac_rec_named($0_1, $1) {
  $0_1 = $0_1 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0_1;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $12 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $12 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = fac_rec_named(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2_1 = i64toi32_i32$2;
  $2$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $13 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $13 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($13 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function legalstub$2($0_1, $1) {
  $0_1 = $0_1 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0_1;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $12 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $12 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $2(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2_1 = i64toi32_i32$2;
  $2$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $13 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $13 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($13 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function legalstub$3($0_1, $1) {
  $0_1 = $0_1 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0_1;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $12 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $12 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $3(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2_1 = i64toi32_i32$2;
  $2$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $13 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $13 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($13 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function legalstub$4($0_1, $1) {
  $0_1 = $0_1 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12 = 0, $13 = 0, $4_1 = 0, $4$hi = 0, $7$hi = 0, $2_1 = 0, $2$hi = 0;
  i64toi32_i32$0 = 0;
  $4_1 = $0_1;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $12 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $12 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $4(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $2_1 = i64toi32_i32$2;
  $2$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $13 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $13 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($13 | 0);
  i64toi32_i32$2 = $2$hi;
  return $2_1 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21 = 0, $22 = 0, var$6 = 0, $24 = 0, $17 = 0, $18 = 0, $23 = 0, $29 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17 = Math_imul(var$4, var$5);
  $18 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23 = $17 + Math_imul($18, $21) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29 = $23 + Math_imul($22, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 return {
  "fac_rec": legalstub$0, 
  "fac_rec_named": legalstub$fac_rec_named, 
  "fac_iter": legalstub$2, 
  "fac_iter_named": legalstub$3, 
  "fac_opt": legalstub$4
 };
}

var retasmFunc = asmFunc({
  "env": env,
});
export var fac_rec = retasmFunc.fac_rec;
export var fac_rec_named = retasmFunc.fac_rec_named;
export var fac_iter = retasmFunc.fac_iter;
export var fac_iter_named = retasmFunc.fac_iter_named;
export var fac_opt = retasmFunc.fac_opt;
