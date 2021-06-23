module.exports = (arr) => {
  //归并排序另外开空间
  //最终是要分到每个元素一个数组，然后merge
  function sort(arr1) {
    if (arr1.length < 2) {
      return arr1
    }
    let l = 0,
      r = arr1.length - 1
    let mid = Math.floor((l + r) / 2)
    //这个地方第一个参数右侧要加1，否则两个时一直无法分解
    return merge(sort(arr1.slice(l, mid + 1)), sort(arr1.slice(mid + 1, r + 1)))
  }
  function merge(arr1, arr2) {
    if (!arr1.length || !arr2.length) {
      return [...arr1, ...arr2]
    }
    let temp = []
    while (arr1.length && arr2.length) {
      if (arr1[0] > arr2[0]) {
        temp.push(arr2.shift())
      } else {
        temp.push(arr1.shift())
      }
    }
    temp.push(...(arr1.length ? arr1 : arr2))
    return temp
  }

  return sort(arr)
}
