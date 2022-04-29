
// 用来转化模板的函数
function tplReplace(template, replacebject) {
    // replace函数第一个参数是匹配到的字符串
    // 往后n个参数是每个分组对应的子字符串
    // 倒数第二个参数是匹配到的字符串在原字符串中的位置
    // 最后一个是原始字符串
    // 利用了/g之后replace会执行多次
    return template.replace(/\{\{(.*?)\}\}/g, (str, key) => {
        return replacebject[key]
    })
}

module.exports = {
    tplReplace
}