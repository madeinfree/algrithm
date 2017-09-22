// return 1 + 2 + ... n
let ans;

/*
 * 此解法一般遞迴即可解決
 * 使用數學解法為 [http://pic.pimg.tw/emn178/1344736677-3722049377.png]
 */
function sum(n) {
  // 遞迴解 - 1
  // if (n < 1) return 0;
  // return n + sum(n - 1);
  // 遞迴解 - 2
  // return n < 1 ? 0 : n + sum(n - 1);
  // 數學解 - 1
  // return n * (n + 1) / 2;
  // 數學解 - 2
  /*
   * Math.pow - 平方
   */
  return (Math.pow(n, 2) + n) / 2;
}

ans = sum(5);
console.log(ans, ans === 15);

// return 1-2+3-4
/*
 * event - 偶數
 * odd - 基數
 */

function sum2(n) {
  if (n < 1) return 0;
  return sum2(n - 1) + (n % 2 > 0 ? n : -n);
}
ans = sum2(3);
console.log(ans, ans === 2);

// return 1*2 + 2*3 + (n-1)*n

/*
 * 此算法必須要大於 2，
 * 小於 2 則無法計算 n - 1
 */
function sum3(n) {
  // 遞迴解
  if (n < 2) return 0;
  return (n - 1) * n + sum3(n - 1);
  // 數學解
}
ans = sum3(3);
console.log(ans, ans === 8);
