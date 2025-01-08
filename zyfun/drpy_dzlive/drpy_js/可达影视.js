var rule = {
    title: '可达影视',
    host: 'https://kedays.org',
    // url:'/shaixuan/fyclass--------fypage---.html',
    url: '/shaixuan/fyclass-fyfilter.html',
    searchUrl: '/so/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: 'H4sIAAAAAAAAA+2a2U7bUBCG38XXXByHspQ7yr7va8VFVCJIC0FiqUoREhWLoBQoCJIGQkslAqEiEFq6EBTyMrET3qIGz5kZ7vwAc5f/G/vYv3MMnxBzxnDQH5oNhkaMipdzxpvArFFhWLGU9SltFBkh/3iA57f+sZnA44GhB7ycuF9MPGAnGPNFQI9P76MrQCHo2f1J1P53CTMIeN5Wyr650+e5Qc/yd5vWQQZmEHDNb2c0g6BndiRux85hBgFnv1J0HgSchVPWxyPr8LseY8arnp3bh/FCPJtL7+trc4StNlJW+kS3coOeFdav6A4g0N3t8bvb4zPnVuz1rPNo9bKYceV4Nr+VzK9F9eKY9RG57FI+E7HD+sugjFdZ/mNdLOpLuGF+6GEKm2Tt1F5cZptEZy+bJL96BQdToHqJXCaG3R4DzsIx5zp65gZ8ZKtfcuk1/cjcgNc73bZubvX13IBr4o1TwDWTJ7m7I72mG/C8lZ376Jk+zw143tcfzh3o89yAsw+f7YWwnrkB17y7yO/+tjJXelnMXr+WwmWykFigrwWzp3f3IOMcrxd3A9utNIOAj/fnMc0g4JsSyVgbERpTZm8wG7uBvcE0g8DeETZzAz3Iv6yJGzzv7Jvr3G2G7WydvTxCn/I9A/b4kfFi4sWc+4j7ODeJm5wr4opx8zly5yPj5cTLOS8jXsZ5KfFSzkuIl3BOfU3e16S+Ju9rUl+T9zWpr8n7mtTX5H0V9VW8r6K+ivdV1Ffxvor6Kt5XUV/F+yrqq3hfRX0V76uor+J9FfVVvK+ivs7HJxszGbEvN9jG1NnLxqwEUInkBZAXSKqAVCGpBlKNpAZIDZJaILVI6oDUIakHUo+kAUgDkkYgjUiagDQhaQbSjKQFSAuSViCtSNqAtCFpB9KOpANIB5JOIJ1IuoB0IekG0o2kB0gPkl4gvUj6gPQh6QfSj2QAyACSQSCDTzaFvbljpbdoU2B+uins2EIhu20fXDsuA+tMB50T8IdpbME63rd3kvaulrDR4PTUk3nc+YWwBMOpVxOTgYcbGSoyxhyFfDfzekYUUhRSFFIUUhRSFFIUUhRSFFIU0qNCvp8IjcwGRSBFIEUgRSBFIEUgRSBFIEUgRSA9CuSwI5Dj/pAYpBikGKQYpBikGKQYpBikGKQYpEeDnBr1TwQmRSBFIEUgRSBFIEUgRSBFIEUgRSC9/glyxh+Sf4IUgRSBFIEUgRSBFIE0RCBFIEUgvQnk/H9dz0+3jD0AAA==',
    filter_url: '{{fl.地区}}-{{fl.排序 or "time"}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}',
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_parse: '.nav-m-box&&li;a&&Text;a&&href;/.*\/(.*?)\.html',
    cate_exclude: '最近|排行',
    play_parse: true,
    lazy: $js.toString(() => {
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        log(html)
        var url = html.url;
        var from = html.from;
        if (html.encrypt == '1') {
            url = unescape(url);
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url));
        }
        log(url)
        var pconfig = jsp.pdfh(request(rule.parse + url), 'body&&script,0&&Html').match(/config = {[\s\S]*?}/)[0];
        var config = {};
        eval(pconfig);
        let purl = JSON.parse(request(rule.parse.replace('?url=', 'api_config.php'), {
            headers: {
                'Origin': HOST
            },
            body: 'url=' + config.url + '&time=' + config.time + '&key=' + config.key,
            method: 'POST'
        })).url;
        if (/NBY|BTJSON|CL4K/.test(from)) {
            let play = JSON.parse(request(purl, {
                headers: {
                    'Origin': 'https://kedays.org',
                    'Host': 'cdn.suxun.site',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
                },
                redirect: false,
                withHeaders: true
            })).location;
            input = {parse: 0, url: play, js: ''};
        } else {
            let play = JSON.parse(request(purl, {
                headers: {
                    'Origin': 'https://kedays.org',
                    'Host': 'cdn.suxun.site',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
                },
                redirect: false,
                withHeaders: true
            })).location;
            let video = JSON.parse(request(play, {
                headers: {
                    'Origin': 'https://kedays.org',
                    'Host': 'cdn.suxun.site',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
                },
                redirect: false,
                withHeaders: true
            })).location + '#.m3u8';
            input = {parse: 0, url: video, js: ''};
        }
    }),
    double: true,
    推荐: '.layout-box;.vlist&&li;*;*;*;*',
    一级: '.vod-list&&ul&&li;a&&title;.lazyload&&data-original;.item-status&&Text;a&&href',
    二级: {
        title: 'h3&&Text;p.row&&span&&a&&Text',
        img: 'img.lazyload&&data-original',
        desc: 'p.row&&span:eq(-1)&&Text;p.row&&span:eq(2)&&Text;p.row&&span:eq(1)&&Text;p.row&&span:eq(4)&&Text;p.row&&span:eq(3)&&Text;',
        content: '.more-box&&Text',
        tabs: '.playlist-tab&&ul&&li',
        lists: '.ewave-playlist-content:eq(#id)&&li',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: '*',
}