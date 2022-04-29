Function.prototype.myBind = function () {
  // 记录this
  const self = this;
  // 将违数组转化为真数组,记录默认参数
  let arg = Array.prototype.slice.call(arguments);
  let obj = arg.shift();

  let bound = function () {
    // 拼接新的参数
    arg = arg.concat(Array.prototype.slice.call(arguments));
    // 判断是不是以new的方式执行函数,控制obj指向
    // 如果是以new的方式调用，那么构造函数bound的原型对象会出现在实例对象this的原型链上
    obj = this instanceof bound?this:obj
    return self.apply(obj, arg);
  };
  // 生成的函数的原型应该和原来函数的原型保持一致
  // 用寄生组合继承
  let fn = function(){}
  fn.prototype = obj.prototype
  bound.prototype = new fn()
  return bound;
};

let obj = {
  name: "obj",
};
function fn(a, b, c) {
  this.sex = "girl";
}

let newFn = fn.myBind(obj, 10);
let text =  new newFn(20, 30);
console.log(text);
