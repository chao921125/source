Object.assign(muban.短视2.二级, {
    img: '.detail-pic&&img&&data-src',
    tab_text: 'a--span&&Text',
});
var rule = {
    模板: '短视2',
    title: '看57',
    host: 'https://www.kan57.net',
    class_name: '电影&电视剧&综艺&动漫&短视频',
    class_url: '1&2&3&4&56',
    detailUrl: '/voddetail/fyid.html',
    一级: $js.toString(() => {
        let body = input.split("#")[1];
        let t = Math.round(new Date / 1e3).toString();
        let key = md5("DS" + t + "DCC147D11943AF75");
        let url = input.split("#")[0];
        body = body + "&time=" + t + "&key=" + key;
        fetch_params.body = body;
        let html = post(url, fetch_params);
        let data = JSON.parse(html);
        VODS = data.list;
        VODS.forEach(it => {
            it.vod_pic = urljoin(input, it.vod_pic).replace('mac:', 'https:')
        })
    }),
}