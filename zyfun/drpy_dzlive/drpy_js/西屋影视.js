Object.assign(muban.mxone5.二级, {
    tab_text: 'span&&Text',
    lists: '.module-player-list.tab-list:eq(#id)&&.scroll-content&&a',
});
var rule = {
    模板: 'mxone5',
    title: '西屋影视',
    host: 'https://www.xiwutv.com',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    搜索: '.module-items .module-search-item;.video-info-header&&a&&title;img&&data-src;.video-serial&&Text;.video-info-header&&a&&href',
}