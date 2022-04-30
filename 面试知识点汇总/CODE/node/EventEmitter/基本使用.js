const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter()

function callback(){
    console.log('触发了event事件')
}

myEmitter.on('event',callback)
myEmitter.prependListener('event',()=>{
    console.log('第二个事件')
})
myEmitter.emit('event')
myEmitter.removeListener('event',callback)
myEmitter.emit('event')