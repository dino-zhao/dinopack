function debounce(fn, times) {
  timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(fn, times, ...args)
  }
}
let fn = debounce((size) => {
  console.timeEnd()
  console.log(size)
}, 2000)
const interval = setInterval(() => {
  console.log('调用')
  fn(1)
}, 1000)

setTimeout(() => {
  clearInterval(interval)
}, 3000)
console.time()
