var rule = {
    title: '橙汁影视',
    host: 'https://www.orangek.cn',
    url: '/show/fyclass--------fypage---.html',
    searchUrl: '',
    searchable: 0,
    quickSearch: 0,
    filterable: 1,
    filter: '',
    filter_url: '',
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_parse: '.hl-nav&&li;a&&Text;a&&href;.*\/(.*?)\.html',
    cate_exclude: '',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            // js: "try{location.href = document.querySelectorAll('iframe')[0].src;}catch(err) {}document.querySelector('.ec-no').click()",
        };
    }),
    double: false,
    推荐: 'li.hl-list-item;*;*;;*',
    一级: '.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;;a&&href',
    二级: {
        title: '.hl-mob-name&&Text',
        img: '.hl-lazy&&data-original',
        desc: '.hl-text-conch&&Text',
        content: '.hl-text-muted&&Text',
        tabs: 'body&&.hl-notice-box&&.hl-text-site',
        lists: '.hl-plays-list:eq(#id)&&li',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: '列表;标题;图片;描述;链接;详情',
}