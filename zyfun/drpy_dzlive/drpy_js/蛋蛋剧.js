// 地址发布页 https://www.dandanju.vip
// 搜索安全验证 > 通过drpy_ocr验证码接口过验证OK
var rule = {
    title: '蛋蛋剧',
    // host:'https://www.dandanju.cc',
    host: 'https://www.dandanju.vip',
    hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"a:eq(0)&&href");print(src);HOST=src',
    // url:'/show/fyclass--------fypage---.html',
    url: '/show/fyclassfyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter: 'H4sIAAAAAAAAA+2Y3W4aRxTHXyXaa1/s4nw1rxLlgkZIiZqmkp1GsiJLtjEEiAsYOTgE/NUY4zjGXmzHgaXAy+zMwlt02Dkfg1qvUGOlSuQ7fufMzJ5zhvmf2X1lOdaDh6+sXxIL1gPr8bP4/Lw1Yz2P/5pQKLINmUwpfhl/9nsiHPd8bE4djpKHY7MCa3EGrOWaGg9WAPQFmRYsxIC+W3K5KJfK4ASgRXOHfq+Gi2qgRRvrotPFRTXQPIqcAX0y8873svg8DegbNg/E2hH4AOh5udOghz4AI85go8txjoF89dccJwDF0jzw+7sYiwaaly6NKh9xngaat32kIsd5GsgXUU+5chyU19GngXzJnFx5jz4NlHu3IFJtzF0D+kZbJfmuDj4AWrP8epj1cE0NlF//JNj4LHotTJGYRhT2hx9oFzWQL58WhTP0aaBdHBTVHuAuauCq1uTWOlU1BPKtDoJPmAkAVaC3HnRrEwFPmBYfjUfqYxSfS8SNU1RzxZo37Snab4wqaQxBAxX6oCLbp1hoDVwqV3b6VKoQKPR+XlR7GLQG2qDzt+wDoDK+abEPgOZt1mXtGOdpoDh3PvI8AN70L+wD4FhcMxZ3Yt4frvAOcJ4GmrdaUJUSGTwrzJRJfRAUmkG2gskQ8wHelW8GahqdYWQakbr0u3isAMxNX0jE54xN71z43d6Umx6zY7fBFv407LNsnzXtMbbHTLvDdse022y3DbvzE9nVT8N+n+33Tfs9tt8z7XfZfte032H7HdPO+Tpmvg7n65j5OpyvY+brcL6Oma/D+aqf5jb9vMCbJPMl4RX+sUly83K0eQELvHiqhuLCvudJdwM8T56+mOd/2OmqyOC5nX/821xi/NRHM1bsutprhBZGdTQtyGL5UiQLExoNpmnatzi5FF4TfRqm7IpXdu+orhjVvaN0P6pL+Z091n0A7nwpWUFhBaDnvU1zpwUwegLXDGBaufiaHpFOqfHUwkKYRnv/a/+I0vro3nK1nkf2lrKr5Fds7dG9AflGi79/LSa7zfnaZr4252ub+dqcl23mZXNetpmXzXmpn/9nD5i9ph4wWsoGjSU8wBpMDVvdMTRMAQV2Mhi6GTxsGmheqSlzeOcF4IOfkm3UUwAWmnO/UyShCcEQhdEHjAWAfN6RONlGnwZ6XvXMeFvQQPM2duQFve1poHnttswUfK/Et/4JE9Xh4k/VFbAOGmiN1spweQ1na/gGeq00WKktBR2CobtKwVl3x0C+44YqLPo03Cjgj66AnK9t5vv9KuPta1LGKPWL+k4UJJvDPVRUAFozfxgUMWgA8hW3g2P6jqKBj/vV322Gxa1hHm/qALTm7p6o4i0bYJqbtKx5xrcgDfS8iC8hUW8NwlVlwk0GMH31c8OngOq53/f/wm9IAHxz3xGZKt3cQ+C/zploYjcBoDWrOVnBrgDAdWmJwSbVJYRvcQOv9nyPXpY0THNb/lfVvrnT3ij6j6Loi38DX/yg2lAYAAA=',
    searchUrl: '/search/**----------fypage---.html',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,//网站的全局请求超时,默认是3000毫秒
    class_parse: 'ul.swiper-wrapper&&li;a&&Text;a&&href;.*/(.*?).html',
    play_parse: true,
    lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            var MacPlayerConfig={};
            eval(fetch(HOST + "/static/js/playerconfig.js").replace('var Mac','Mac'));
            var jx = MacPlayerConfig.player_list[from].parse;
            if (jx == '') {
                jx = MacPlayerConfig.parse
            };
            if (jx.startsWith("/")) {
                jx = HOST + jx;
            }
            input={jx:0,url:jx+url,parse:1,
                header: JSON.stringify({
                    'referer': input
                })}
        }
    `,
    limit: 6,
    推荐: '.tab-content&&li;*;*;*;*',
    一级: '.ewave-vodlist&&li;.lazyload&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    二级: {
        "title": ".picture&&title;.data--span:eq(0)&&Text",
        "img": ".picture&&img&&data-original",
        "desc": ".pic-text:eq(0)&&Text;;;.data--span:eq(1)&&Text;.data--span:eq(2)&&Text",
        "content": ".desc--a&&Text",
        "tabs": ".nav-tabs&&li",
        "lists": ".tab-pane:eq(#id)&&li"
    },
    搜索: '.ewave-vodlist__media&&li;a&&title;a&&data-original;.hidden-xs--span&&Text;a&&href',
}