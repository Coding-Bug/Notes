class EventEmitter{
    constructor(){
        this.events = {} //每个键的值时一个数组 
    }

    
    emit(type,...args){
        this.events[type].forEach(item => {
            // 这个apply和那个apply不大一样
            Reflect.apply(item,this,args)
        });
    }

    on(type,handler){
        if(!this.events[type]){
            this.events[type] = []
        }
        this.events[type].push(handler)
    }

    addListener(type,handler){
        this.on(type,handler)
    }

    prependListener(type,handler){
        if(!this.events[type]){
            this.events[type] = []
        }
        this.events[type].unshift(handler)
    }

    removeListener(type,handler){
        if(!this.events[type]){
            return 
        }
        this.events[type] = this.events[type].filter(item => item!==handler)
    }

    off(type,handler){
        this.removeListener(type,handler)
    }
    
    // 对handler进行包装
    once(type,handler){
        this.on(type,this._onceWrap(type,handler,this))
    }

    _onceWrap(type,handler,target){
        const state = {fired:false,handler,type,target} // handler是标志有没有执行过,封装这个是为了传入下面
        // 真正对函数进行包装,返回包装后的函数
        const wrapFn = this._onceWrapper.bind(state)
        state.wrapFn = wrapFn
        return wrapFn  // 返回包装的fn
    }

    _onceWrapper(...args){
        if(!this.fired){ // 没执行过的才执行
            this.fired = true
            Reflect.apply(this.handler,this.target,args)
            this.target.off(this.type,this.wrapFn)
        }
    }





}