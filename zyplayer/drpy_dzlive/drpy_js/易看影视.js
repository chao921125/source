var rule = {
    模板: 'mxpro',
    title: '易看影视',
    host: 'http://tv.ykzj6.cn',
    url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    tab_exclude: '排序',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    class_parse: '.navbar-items li:gt(0):lt(9);a&&Text;a&&href;/(\\d+).html',
}