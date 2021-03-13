module.exports = (arr) => {
  //选择一个最小的放在最前面
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    ;[arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}
