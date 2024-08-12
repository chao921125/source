var rule = {
    title: '海外剧汇',
    host: 'https://www.hwjh.cc',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: '',
    filter_url: '',
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_parse: '.hl-menus li;a&&span&&Text;a&&href;.*/(.*?)\.html',
    cate_exclude: '最新|排行',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, js: ''};
    }),
    double: true,
    推荐: 'body&&.container;*;*;*;*;*',
    一级: '.hl-vod-list&&li;.hl-item-title&&Text;.hl-lazy&&data-original;.remarks&&Text;a&&href',
    二级: {
        title: 'h2&&Text',
        img: '.hl-lazy&&data-original',
        desc: '.hl-dc-sub&&Text;.hl-data-menu&&span&&Text',
        content: '.hl-content-text&&Text',
        tabs: '.hl-plays-from&&a',
        lists: '.hl-plays-list:eq(#id)&&li',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: '.hl-one-list&&li;.hl-item-title&&Text;*;*;*',
}