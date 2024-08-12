var rule = {
    title: '掌心世界',
    host: 'https://www.zhangxindy.com',
    url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
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
    class_parse: '.menu&&li;a&&Text;a&&href;/id/(\\d+)',
    cate_exclude: '热播榜',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, js: ''};
    }),
    double: true,
    推荐: 'ul.shoutu-vodlist;ul&&li;*;*;*;*',
    一级: '.shoutu-vodlist&&li;a:eq(-1)&&Text;img&&data-original;.text&&Text;a&&href',
    // 二级访问前: $js.toString(() => {
    //     log(MY_URL);
    //     let html = request(MY_URL);
    //     MY_URL = pd(html, '.playbtn&&a&&href', MY_URL);
    //     log(MY_URL);
    // }),
    二级: {
        //title: 'h1&&Text;.hidden-sm&&p&&a&&Text',
        title: 'h1&&Text;.shoutu-content&&a&&Text',
        img: '.shoutu-content&&img&&data-original',
        //desc: ';.hidden-sm&&p&&a:eq(1)&&Text;.hidden-sm&&p&&a:eq(2)&&Text',
        desc: '.shoutu-content&&p.data:eq(2)&&Text;.shoutu-content&&a:eq(2)&&Text;.shoutu-content&&a:eq(3)&&Text',
        content: '',
        //tabs: 'ul.shoutu-playlist.col-flex&&li',
        重定向: $js.toString(() => {
            log('执行重定向:' + MY_URL);
            // let html = request(MY_URL);
            MY_URL = pd(html, '.playbtn&&a&&href', MY_URL);
            log('二级重定向到:' + MY_URL);
            html = request(MY_URL);
        }),
        tabs: $js.toString(() => {
            log('tabs:MY_URL:' + MY_URL);
            TABS = [];
            let tabs = pdfa(html, 'ul.shoutu-playlist.col-flex&&li');
            log(tabs);
            tabs.forEach(it => {
                let _tt = pdfh(it, 'body&&Text');
                TABS.push(_tt);
            });
        }),
        lists: $js.toString(() => {
            LISTS = [];
            //log(input);
            let lists1 = pdfa(html, '.shoutu-playlist&&li').map(it => {
                let _tt = pdfh(it, 'a&&Text');
                let _uu = pd(it, 'a&&href', MY_URL);
                return _tt + '$' + _uu
            });

            LISTS.push(lists1);
            let _urls = pdfa(html, '.shoutu-playlist:eq(-1)&&li').map(it => {
                return pd(it, 'a&&href', MY_URL);
            });
            _urls = _urls.filter(it => it != MY_URL);
            _urls.forEach((_url) => {
                let html = request(_url);
                let lists1 = pdfa(html, '.shoutu-playlist&&li').map(it => {
                    let _tt = pdfh(it, 'a&&Text');
                    let _uu = pd(it, 'a&&href', MY_URL);
                    return _tt + '$' + _uu
                });
                LISTS.push(lists1);
            });
        }),
        //lists:'.shoutu-playlist:eq(#id)&&a',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: '*',
}