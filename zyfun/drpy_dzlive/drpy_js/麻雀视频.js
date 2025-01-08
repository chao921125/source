var rule = {
    title: '麻雀视频',
    host: 'https://mqtv.cc',
    parse_url: 'https://player.mqtv.cc/fun/?url=',
    url: '/libs/VodList.api.php?type=fyclass&rank=rankhot&cat=&year=&area=&page=fypage',
    searchUrl: '/libs/VodList.api.php?search=**',
    //detailUrl:'/libs/VodInfo.api.php?ctid=fyid',
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
    class_name: '电影&电视剧&综艺&动漫',
    class_url: 'movie&tv&va&ct',
    cate_exclude: '',
    play_parse: true,
    is_video: 'obj/tos',
    lazy: $js.toString(() => {
        input = {
            parse: 1, url: rule.parse_url + input,
            js: "$('.player-btn').click()",
            parse_extra: '&is_pc=1&custom_regex=' + rule.is_video
        };
    }),
    double: true,
    推荐: '',
    一级: 'json:data;title;img;remark;url;desc',
    二级: $js.toString(() => {
        VOD = {};
        log(input);
        let ctid = input.match(/.*\/(\d+)/)[1];
        // log(ctid);
        let detailUrl = 'https://mqtv.cc/libs/VodInfo.api.php?ctid=' + ctid;
        log('detailUrl:' + detailUrl);
        let html = request(detailUrl);
        let json = JSON.parse(html);
        // log(json);
        VOD.vod_name = json.data.title;
        VOD.vod_id = input;
        VOD.vod_pic = json.data.img;
        VOD.vod_year = json.data.year;
        VOD.vod_area = json.data.area;
        VOD.vod_remarks = json.data.remark;
        VOD.vod_play_from = json.data.playinfo.map(it => it.cnsite).join('$$$');
        let playUrls = [];
        json.data.playinfo.forEach((it) => {
            let plist = it.player.map(it => it.no + '$' + it.url).join('#');
            playUrls.push(plist);
        });
        VOD.vod_play_url = playUrls.join('$$$');
    }),
    搜索: 'json:data.vod_all[0].show;title;img;remark;url;desc',
}