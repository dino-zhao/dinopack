function sort(arr) {
  arr.unshift(0)
  buildHeap(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    ;[arr[i], arr[1]] = [arr[1], arr[i]]
    ajustHeap(arr, 1, i - 1)
  }
  arr.shift()
  return arr
}
function buildHeap(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i--) {
    ajustHeap(arr, i, arr.length - 1)
  }
}
function ajustHeap(arr, k, end) {
  arr[0] = arr[k]
  for (let i = 2 * k; i <= end; i *= 2) {
    if (i < end && arr[i] < arr[i + 1]) {
      i++
    }
    if (arr[0] >= arr[i]) {
      break
    } else {
      arr[k] = arr[i]
      k = i
    }
  }
  arr[k] = arr[0]
}

console.log(
  sort([
    1,
    4,
    52,
    32,
    434,
    4566,
    0,
    7,
    8,
    54,
    2,
    7,
    1,
    2,
    1,
    1,
    1,
    8,
    23,
    5,
    6,
    5343,
  ])
)
