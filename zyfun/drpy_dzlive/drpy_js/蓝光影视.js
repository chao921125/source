var rule = {
    模板: 'mxpro',
    title: '蓝光影视',
    host: 'https://lgysw.cn',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---/',
    class_parse: '.navbar-items li;a&&Text;a&&href;.*/(.*?)/',
    cate_exclude: '今日更新|热榜',
}