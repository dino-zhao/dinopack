function sort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let max = 0
    for (let j = 1; j <= i; j++) {
      if (arr[max] < arr[j]) {
        max = j
      }
    }
    ;[arr[max], arr[i]] = [arr[i], arr[max]]
  }
  return arr
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
