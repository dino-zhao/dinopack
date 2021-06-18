Function.prototype.apply = function (ctx, arg) {
  const context = ctx ?? globalThis
  context.fn = this
  if (Array.isArray(arg)) {
    return context.fn(...arg)
  } else {
    throw new TypeError('类型错误')
  }
}
var obj = {
  name: '小红',
}

function sayName(age) {
  return this.name + age
}
console.log(sayName.apply(obj, [12]))
