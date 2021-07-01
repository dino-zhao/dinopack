// object instanceof constructor 判断构造函数的原型是否存在于object的原型链上
function myInstanceof(object, constructor) {
  let prototype = constructor.prototype
  object = object.__proto__
  while (object) {
    if (object === prototype) {
      return true
    }
    object = object.__proto__
  }
  return false
}

console.log(myInstanceof(Array, Function))
