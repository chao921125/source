/**
 * 影视TV 超連結跳轉支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */
var rule = {
	title: '荐片[优]',
	// host: 'http://api2.rinhome.com',
	//host: 'https://oiuzy.haitu33.com',
	host: 'https://dns.alidns.com/resolve?name=jpmobile.jianpiandns.com&type=TXT',
	hostJs:`
	print(HOST);
	let html=request(HOST,{headers:{"User-Agent":MOBILE_UA}});
	let json = dealJson(html);
	let data = json.Answer[0].data.replace(/'|"/g,'').split(',');
	HOST = data[0];
	if(!HOST.startsWith('http')){
		HOST = 'https://'+HOST;
	}
	// log(HOST);
	`,
	homeUrl: '/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//网站的首页链接,用于分类获取和推荐获取
	// url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
	url: '/api/crumb/list?page=fypage&type=0&limit=24&fyfilter',
	class_name: '全部&电影&电视剧&动漫&综艺',     // 筛选 /api/term/ad_fenlei?limit=10&page=1
	class_url: '0&1&2&3&4',
	detailUrl: '/api/node/detail?channel=wandoujia&token=&id=fyid',//二级详情拼接链接(json格式用)
	searchUrl: '/api/video/search?key=**&page=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable: 1,
	filter: 'H4sIAAAAAAAAA+2V3UrDMBiG7yXHO2jTrtu8A69BPCiuqKhT6hTGGEzmxiY4f5CqWPBA3So4tsHE/aBX06T2Lsxc2mR2FWHzrId5vpA03/e8NA8EsLSSB1taDiwBVddUEAMZdUcjK2R20GmRrA/V7QPte1tmjMuWW7LGmCwEUIhRfPduD5sUiz62+y1ScRu3uN+mRelHEZ118OCDFhW/6HzUSZHiuI/d+2eGxaTP8fUTNl8oh6CwOi5MnpXTVJ171qBnjx7++iwoQNm7TEzxWPJwXOIx9LAg8lj0D0nyWPCwwlFyz4QmeJhkb2MwEegpgYq3c7oN+7t6lrUB1y/R8CzQBqfUcq+9NmzsZv1zP9vHqFqhBV3NbmbWWe/vetjo0NrBXlrNauObV2NEBGbXGsHLaW4Q1YrTHf0+CNZDt2HguhXQAZ1Y9rsZkAcZJqo1A23E1Rt7WKOYc+foHBcNitmQyQm4VPbnycysdjnOPtFpXqDByOOQ/0bnyufS1FCiyEWRW2zk4JyRg7MjJ8oh3jFPiG9ErGB7iSdEIY9zaXx9Q48G51WUiygX/5YLac5cSCG5SM32GQohPoizPf3Rocj/yP/F+i/P6b88238ohfgsh+Qi5H8Blcj/yP9/87/wBY9Rx63qDgAA',
	filter_url: 'area={{fl.area or "0"}}&sort={{fl.sort or "update"}}&year={{fl.year or "0"}}&category_id={{fl.cateId}}',
	filter_def: {
		0:{cateId:'0'},
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
	headers: {
		'User-Agent': 'jianpian-android/350',
		'JPAUTH': 'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
	},
	timeout: 5000,
	limit: 8,
	play_parse: true,
	play_json: [{
		re: '*',
		json: {
			parse: 0,
			jx: 0
		}
	}],
	lazy: '',
	图片来源: '@Referer=www.jianpianapp.com@User-Agent=jianpian-version361',
	// 推荐:'json:.video;*;*;*;*',
	推荐: `js:
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data[0].video;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.path,
                desc: it.playlist.title + ' ⭐' + it.score,
                url: it.id
            })
        });
        setResult(d);
    `,
	// 一级:'json:data;title;path;playlist.title;id',
	一级: `js:
		cateObj.tid = cateObj.tid+'';
        if (cateObj.tid.endsWith('_clicklink')) {
            cateObj.tid = cateObj.tid.split('_')[0];
            input = HOST + '/api/video/search?key=' + cateObj.tid + '&page=' + + MY_PAGE;
        }
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.thumbnail||it.path,
                desc: (it.mask || it.playlist.title) + ' ⭐' + it.score,
                url: it.id
            })
        });
        setResult(d);
    `,
	二级: `js:
        function getLink(data) {
            let link = data.map(it => {
                return '[a=cr:' + JSON.stringify({'id':it.name+'_clicklink','name':it.name}) + '/]' + it.name + '[/a]'
            }).join(', ');
            return link
        }
		try {
            let html = request(input);
            html = JSON.parse(html);
            let node = html.data;
            VOD = {
                vod_id: node.id,
                vod_name: node.title,
                vod_pic: node.thumbnail,
                type_name: node.types[0].name,
                vod_year: node.year.title,
                vod_area: node.area.title,
                vod_remarks: node.score,
                vod_actor: getLink(node.actors),
                vod_director: getLink(node.directors),
                vod_content: node.description.strip()
            };
            if (typeof play_url === 'undefined') {
                var play_url = ''
            }
            let playMap = {};
			if (node.have_ftp_ur == 1) {
				playMap["边下边播超清版"] = node.new_ftp_list.map(it => {
					return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
				}).join('#');
			}
			if (node.have_m3u8_ur == 1) {
				playMap["在线点播普清版"] = node.new_m3u8_list.map(it => {
					return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
				}).join('#');
			}
            let playFrom = [];
            let playList = [];
            Object.keys(playMap).forEach(key => {
                playFrom.append(key);
                playList.append(playMap[key])
            });
            VOD.vod_play_from = playFrom.join('$$$');
            VOD.vod_play_url = playList.join('$$$');
        } catch (e) {
            log("获取二级详情页发生错误:" + e.message);
        }
	`,
	// 搜索:'json:data;*;thumbnail;mask;*',
	搜索: `js:
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.thumbnail,
                desc: it.mask + ' ⭐' + it.score,
                url: it.id
            })
        });
        setResult(d);
    `,
}