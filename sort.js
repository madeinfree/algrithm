let ans;

/*
 * 最基本 Bubble sort
 * 首先計算有多少數量需要檢查
 * 第二層迴圈執行每一個數字的比較
 */
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

ans = bubbleSort([3, 1, 8, 2]);
console.log(ans);
