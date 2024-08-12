muban.mxpro.二级.tabs = '.module-tab-items-box&&.module-tab-item';
muban.mxpro.二级.tab_text = 'span&&Text';
var rule = {
    title: '侠客影视',
    模板: 'mxpro',
    host: 'http://ys.xkys.link',
    url: '/index.php/vod/show/id/fyclassfyfilter.html',
    filter_url: '{{fl.地区}}{{fl.排序}}{{fl.剧情}}{{fl.类型}}{{fl.语言}}{{fl.字母}}/page/fypage{{fl.年份}}',
    filter: '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',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    filterable: 1,
    class_parse: '.navbar-items li;a&&Text;a&&href;/(\\d+).html',
    cate_exclude: '直播',
    lazy: $js.toString(() => {
        let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1])
        let url = html.url
        let from = html.from
        if (html.encrypt == '1') {
            url = unescape(url);
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url));
        }
        log('切片地址:' + url);
        if (/qiyi|youku|mgtv|haiwaikan|bilibili/.test(from)) {
            var jx = request(HOST + "/static/player/" + from + ".js").match(/ src="(.*?)'/)[1];
            log(jx)
            let con = request(jx + url, {headers: {'Referer': HOST}}).match(/let ConFig.*}/)[0];
            log(con)
            eval(con + '\nrule.ConFig=ConFig')

            function ec(str, uid) {
                eval(getCryptoJS());
                return CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(str, CryptoJS.enc.Utf8.parse('2890' + uid + 'tB959C'), {
                    iv: CryptoJS.enc.Utf8.parse('2F131BE91247866E'),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }));
            };
            //log(rule.ConFig.url)
            //log(rule.ConFig.config.uid)
            let purl = ec(rule.ConFig.url, rule.ConFig.config.uid);
            //log(purl)
            input = {
                jx: 0,
                url: purl,
                parse: 0,
                //headers:{'Origin':'http://jx.xyks.link'}
            }
        } else if (/m3u8|mp4/.test(url)) {
            input = url;
        } else {
            input
        }
    }),

}