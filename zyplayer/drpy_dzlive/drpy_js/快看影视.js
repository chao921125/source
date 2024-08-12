/**
 * 有筛选验证
 */
var rule = {
    模板: 'mxpro',
    title: '快看影视',
    host: 'https://www.kkvod.org',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fyclass---.html',
    class_parse: '.navbar-items li;a&&Text;a&&href;/(\\d+).html',
}