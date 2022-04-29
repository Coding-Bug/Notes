import tpl from './info.tpl'

// tpl是函数
const info = {
    name:'cjf',
    age:34,
    hobby:'笛子'
}
console.log(tpl(info))

document.querySelector('#app').innerHTML = tpl(info)