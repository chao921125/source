var rule = {
    模板: 'mxpro',
    title: '皮皮影视',
    host: 'https://www.pptv06.com',
    class_parse: '.navbar-items li:gt(0):lt(8);a&&Text;a&&href;/(\\d+).html',
    tab_exclude: '排序',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
}