var rule = {
    模板: 'mxone5',
    title: '神马电影[搜]',
    host: 'https://www.375km.com',
    url: '/vodshow/fyclass--------fypage---.html',
    class_parse: 'ul.grid-items&&li;a&&Text;a&&href;(\\d+).html',
    detailUrl: '/voddetail/fyid.html',
    // searchUrl: '/vodsearch/-------------.html?wd=**',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    搜索: 'json:list;name;pic;en;id',
}