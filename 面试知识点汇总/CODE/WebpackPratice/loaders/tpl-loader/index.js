const { tplReplace } = require('../utils/tplReplace')
const {getOptions} = require('loader-utils')
// 这是一个loader
function tplLoader(source) {
    source = source.replace(/\s+/g, '')  //取出源码中的空格，防止后面用babel错 
    
    // 把上下文传到getOptions可以得到laoder的配置
    const {log} = getOptions(this) 

    const _log = log ? `console.log('compiled the fie which is from ${this.resourcePath}')`:''
    // return后面不要换行
    return `export default (options) => {
        ${tplReplace.toString()}
        ${_log.toString()}
        return tplReplace('${source}',options)
    }`
}

module.exports = tplLoader