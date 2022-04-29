let Singleton = (function(){
    let instance  = null
    function SingleObject(name){
        this.name = name
    }
    return function(name){
        this.class = 'a' // 没有用，因为下面返回了一个对象，把这个覆盖了
        if(!instance){
            instance = new SingleObject(name)
        }
        return instance
    }
})()

let a = new Singleton('张三')
let b = new Singleton('李四')
console.log(a);
console.log(b);
