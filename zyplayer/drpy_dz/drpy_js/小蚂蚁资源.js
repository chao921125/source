// http://159.75.155.189:1133/api.php/provide/vod/?ac=list

var rule = {
    title:'小蚂蚁资源',
    host:'http://159.75.155.189:1133',
    homeUrl:'/api.php/provide/vod/?ac=list&t=13',
    detailUrl:'/api.php/provide/vod/?ac=detail&ids=fyid',
    searchUrl:'/api.php/provide/vod/?wd=**&pg=fypage',
    url:'/api.php/provide/vod/?ac=list&pg=fypage&t=fyclass',
    headers:{'User-Agent':'MOBILE_UA'},
    timeout:5000,
    class_name:'电影&国产剧&综艺&动漫&短剧&少儿&纪录片&港台剧&日韩剧&欧美剧&印泰剧&其他',
    class_url:'1&13&3&4&26&24&22&14&15&16&21&23',
    limit:20,
    multi:1,
    searchable:2,
    play_parse:true,
    parse_url:'http://103.233.255.142:1133/?url=',
    lazy:`js:
    if(/m3u8|mp4/.test(input)){
        input = {parse:0,url:input}
    }else{
        input= rule.parse_url+input; 
    }
    `,
     推荐:'*',
    一级:'json:list;vod_name;vod_pic;vod_remarks;vod_id;vod_play_from',
    二级:'',
    二级:`js:
    let html=request(input);
    html=JSON.parse(html);
    let data=html.list;
    VOD=data[0];`,
    搜索:'*',
}