var rule = {
    title: '420电影院',
    host: 'https://www.dapian1234.com',
    url: '/sort/fyclass/fypage.html',
    searchUrl: '/search-wd-**-p-fypage.html',
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
    class_parse: 'ul.nav&&li;a&&Text;a&&href;/sort/(\\d+)/',
    cate_exclude: '最近更新',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, js: ''};
    }),
    double: true,
    推荐: '.content&&.m-movies;article;*;*;*;*',
    一级: '.m-movies&&article;h2&&Text;img&&src;.zhuangtai&&Text;a&&href',
    二级: {
        title: '.info-main-title&&a&&Text',
        img: '.video-info-img&&style',
        desc: '.video_info&&li:eq(1)&&Text',
        content: '.abstract-content&&Text',
        tabs: '#video_list_li h3',
        lists: '.playlist:eq(#id)&&li',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: '*',
}