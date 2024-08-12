var rule = {
    title: '美剧星球',
    host: 'https://www.kmeiju.cc',
    url: '/fyclass/page/fypage',
    searchUrl: '/page/fypage?s=**',
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
    class_parse: '.navlist&&li;a&&Text;a&&href;.*\/(.*)',
    cate_exclude: '排行|网站',
    play_parse: true,
    lazy: $js.toString(() => {
        function getrandom(str) {
            let string = str.substring(8, str.length);
            let substr = atob(string);
            return decodeURIComponent(substr.substring(8, substr.length - 8))
        }

        var src = jsp.pdfh(request(input), 'iframe&&src')
        log(src)
        var pconfig = jsp.pdfh(request(HOST + src), 'body&&script,0&&Html').match(/config = {[\s\S]*?}/)[0];
        log(pconfig)
        var config = {};
        eval(pconfig);
        var purl = config.url
        log(purl)
        input = {parse: 0, url: purl, js: 0};
    }),
    double: true,
    推荐: '.bt_img;ul&&li;*;*;.qb&&Text;*',
    一级: '.bt_img&&li;.dytit&&Text;img&&data-original;.jidi&&Text;a&&href',
    二级: {
        title: '.moviedteail_tt&&Text;.moviedteail_list&&li&&Text',
        img: '.dyimg&&img&&src',
        desc: '.moviedteail_list&&li:eq(4)&&Text;.moviedteail_list&&li:eq(2)&&Text;.moviedteail_list&&li:eq(1)&&Text',
        content: '.yp_context&&Text',
        tabs: '.mi_paly_box&&.ypxingq_t',
        lists: '.paly_list_btn:eq(#id)&&a',
        tab_text: 'span&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: '.search_list&&li;*;*;div.jidi&&Text;*',
}