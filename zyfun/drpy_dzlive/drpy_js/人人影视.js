Object.assign(muban.mxone5.二级, {
    tabs: $js.toString(() => {
        TABS = ['道长在线']
    }),
    lists: '.module-blocklist:eq(#id)&&a',
});
muban.mxone5.二级.title = '.title-link&&Text;.tag-link&&Text';
var rule = {
    模板: 'mxone5',
    title: '人人影视',
    host: 'https://www.renren.pro',
    url: '/list/fyclass?page=fypage',
    searchUrl: '/search?wd=**',
    class_parse: '.nav-menu-items&&li;a&&Text;a&&href;/list/(.*)',
}