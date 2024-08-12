var rule = {
    title: '思古影视[V2]', // csp_AppYsV2
    host: 'https://siguyy.cc/api.php/app/',
    url: 'video?tid=fyclassfyfilter&limit=20&pg=fypage',
    filter_url: '&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&letter={{fl.letter}}&year={{fl.year}}&by={{fl.by}}',
    filter: 'H4sIAAAAAAAAA+2X3U4aQRTH32WvvXDxs75K48Wm4arWC02bGGOCohRoq2D8otCiUQRbUT6sKWuBl9mZZd+iy54558xNN9uGSNJwt7//2TMzZ5jzn2XTMI2ll5vG6/iGsWS8WrHW140pY9V6E/dRZKoyuefzO2vlbTx4b3Uo79W8ZG0o+2BsTSn1pOS/r1QFGHPTTTUQA8bkdk4mTlRMAY2ZrTndEo4JQGNW86LzhGMCUB4tnIHmS585dgbnA6Axs/du9xuOCaCtxT164rUMgWKV97wWBTRf/drpneN8AJSXOvQKN5gHEGVf5M6te5LHGADFklm58xljADRf7849+iG6TZySmN44uBpc0s4BUGw/JQ5aGAOg2G7f/V7BGMDW8jAKJ8tai1vawSo1xEc76sG6qnqFFA4NgDHvuiB/3quYAi6lITs9KiUA+qF7+6LYxR8agDawfcwxBRgbfGhyTAHlnVZk6RbzAGid5RvOU0Dr/NQQ9jWuE0Dfuo24taZtXefBeepG3LrYdGxWacGjps+wPqPrMdZjum6ybur6NOvTmm6+IN1/1PRF1hd1fYH1BV2fZ31e1+dYn9N1rtfU6zW5XlOv1+R6/Ud/25enjNioHDGkl7wvh/IM+0UB5W0/iuQB5gFEcVlx9yjsOsYAIjrbH102zEnD/MB/TxawMRVQ3nHK913MA6B1dvNcn4Ln8JGQ/vxXjwnzg3D/aej+E8DED8boBzMj8gMvkXGrCTxIAHq/7Ja1fvGBLp27/qCRxksHgA9u2+nk6OAGoB0y77LMh2wINF+xNcjYOB8A5R2V5QN9WQGM+S4P68+wPvvrb4BJn42vz2ZH1Gdh/wzcZH1wgT2ogA7Sfs3N4eFUQLHcV/eWvrgBIn3Fn1+IIt7JCqLcu7Jk8x2pgPygn/PfRj8AoDEbeVFp45gAVPtVz/mF/wwU8F1eFuki3eUBYMyxW6KOHqOAxixmZQF9RAHX1xT9U6ovgGfwkYkf/Bd+sPUbU7HRkZsQAAA=',
    detailUrl: '/detail?vod_id=fyid',
    searchUrl: '/search?text=**&pg=fypage',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,//是否启用分类筛选,
    headers: {'User-Agent': 'okhttp/4.1.0'},
    timeout: 5000,
    // 分类筛选 /api.php/app/nav || /xgapp.php/v1/nav || /api.php/v1.vod/types
    class_name: '短剧&电影&电视剧&综艺&动漫',
    class_url: '24&1&2&3&4',
    play_parse: true,
    lazy: `js:
		let play_Url = '';
		if (/\\.m3u8|\\.mp4/.test(input)) {
			input = {
				jx: 0,
				url: input,
				parse: 0
			}
		// } else if (/,/.test(input) && /url=/.test(input)) {
		// 	input = input.split('url=');
		// 	play_Url = input[0].split(',')[0];
		// 	input = {
		// 		jx: 0,
		// 		url: input[1],
		// 		playUrl: play_Url,
		// 		parse: 1
		// 	}
		// } else if (/url=|id=/.test(input)) {
		// 	input = {
		// 		jx: 0,
		// 		url: JSON.parse(request(input)).url,
		// 		parse: 0
		// 	}
        } else if (/youku|iqiyi|v\\.qq\\.com|pptv|sohu|le\\.com|1905\\.com|mgtv|bilibili|ixigua/.test(input)) {
			play_Url = /bilibili/.test(input) ? 'https://jx.xmflv.com/?url=' : 'https://jx.777jiexi.com/player/?url='; // type0的parse
			// play_Url = /bilibili/.test(input) ? 'https://jx.xmflv.com/?url=' : 'json:http://pandown.pro/app/kkdy.php?url='; // type1的parse可加'json:'直接解析url (除了蜂蜜的'影视TV'，其它的壳皆可用)
			input = {
				jx: 0,
				url: input,
				playUrl: play_Url,
				parse: 1,
				header: JSON.stringify({
					'user-agent': 'Mozilla/5.0',
				}),
			}
		} else {
			input
		}
    `,
    limit: 6,
    // 图片来源:'@Referer=https://api.douban.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
    推荐: `js:
        let d = [];
        let jsondata = [];
        let videoList = [];
        if (/v1\\.vod/.test(HOST)) {
            if(HOST.endsWith('/')){
                jsondata = JSON.parse(request(HOST + 'vodPhbAll'));
            } else {
                jsondata = JSON.parse(request(HOST + '/vodPhbAll'));
            }
            videoList = jsondata.data.list;
        } else {
            if(HOST.endsWith('/')){
                jsondata = JSON.parse(request(HOST + 'index_video'));
            } else {
                jsondata = JSON.parse(request(HOST + '/index_video'));
            }
            videoList = /xgapp/.test(HOST) ? jsondata.data : jsondata.list;
        }
        // log('videoList =========> '+stringify(videoList));
        videoList.forEach((it,idex) => {
            let vlist = /v1\\.vod/.test(HOST) ? videoList[idex].vod_list : videoList[idex].vlist ;
            vlist.forEach(it => {
                d.push({
                    url:it.vod_id,
                    title:it.vod_name,
                    img:it.vod_pic.startsWith('http') ? it.vod_pic : it.vod_pic.startsWith('//') ? 'https:' + it.vod_pic : it.vod_pic.startsWith('/') ? getHome(HOST) + it.vod_pic : getHome(HOST) + '/' + it.vod_pic,
                    desc:it.vod_remarks,
                });
            });
        });
        setResult(d);
    `,
    一级: `js:
        let d = [];
        let jsondata = [];
        let videoList = [];
        if (/v1\\.vod/.test(HOST)) {
            input = input.replace('video','v1.vod').replace('tid','type').replace('pg=','page=');
            jsondata = JSON.parse(request(input));
            videoList = jsondata.data.list;
        } else {
            input = HOST + '/'+ input.split('/')[4];
            jsondata = JSON.parse(request(input));
            videoList = jsondata.list || jsondata.data;
        }
        // log('videoList =========> '+stringify(videoList));
        videoList.forEach(it => {
            d.push({
                url:it.vod_id,
                title:it.vod_name,
                img:it.vod_pic.startsWith('http') ? it.vod_pic : it.vod_pic.startsWith('//') ? 'https:' + it.vod_pic : it.vod_pic.startsWith('/') ? getHome(HOST) + it.vod_pic : getHome(HOST) + '/' + it.vod_pic,
                desc:it.vod_remarks,
            });
        });
        setResult(d);
    `,
    二级: `js: 
		if (/v1\\.vod/.test(HOST)) {
			input = HOST + '/'+ input.split('/')[3];
		} else {
			input = HOST + '/'+ input.split('/')[3].replace('detail','video_detail').replace('vod_id','id');
		}
		try {
			let html = request(input);
			html = JSON.parse(html);
			let node = /xgapp/.test(HOST) ? html.data.vod_info : html.data;
			VOD = {
				vod_id: node.vod_id,
				vod_name: node.vod_name,
				vod_pic: node.vod_pic,
				type_name: node.vod_class,
				vod_year: node.vod_year,
				vod_area: node.vod_area,
				vod_remarks: node.vod_remarks,
				vod_actor: node.vod_actor,
				vod_director: node.vod_director,
				vod_content: node.vod_content.strip()
			};
			if (typeof play_url === 'undefined') {
				var play_url = ''
			}
			var name = {
				'bfzym3u8': '暴风',
				'1080zyk': '优质',
				'kuaikan': '快看',
				'lzm3u8': '量子',
				'ffm3u8': '非凡',
				'haiwaikan': '海外看',
				'gsm3u8': '光速',
				'zuidam3u8': '最大',
				'bjm3u8': '八戒',
				'snm3u8': '索尼',
				'wolong': '卧龙',
				'xlm3u8': '新浪',
				'yhm3u8': '樱花',
				'tkm3u8': '天空',
				'jsm3u8': '极速',
				'wjm3u8': '无尽',
				'sdm3u8': '闪电',
				'kcm3u8': '快车',
				'jinyingm3u8': '金鹰',
				'fsm3u8': '飞速',
				'tpm3u8': '淘片',
				'lem3u8': '鱼乐',
				'dbm3u8': '百度',
				'tomm3u8': '番茄',
				'ukm3u8': 'U酷',
				'ikm3u8': '爱坤',
				'hnzym3u8': '红牛资源',
				'hnm3u8': '红牛',
				'68zy_m3u8': '68',
				'kdm3u8': '酷点',
				'bdxm3u8': '北斗星',
				'qhm3u8': '奇虎',
				'hhm3u8': '豪华',
				'kbm3u8': '快播'
			};
			let episodes = /v1\\.vod/.test(HOST)?node.vod_play_list:node.vod_url_with_player;
			if (episodes != '') {
				let playMap = {};
				let arr = [];
				episodes.forEach(ep => {
					let from = [];
					if (/v1\\.vod/.test(HOST)) {
						from = ep.player_info.from||ep.player_info.show||ep.from||ep.show;
					} else {
						from = ep.code||ep.name;
					}
					if (!playMap.hasOwnProperty(from)) {
						playMap[from] = []
					}
					// let parse_api = '';
					// if (/v1\\.vod/.test(HOST)) {
					// 	parse_api = ep.player_info.parse != null ? ep.player_info.parse : ep.player_info.parse2;
					// 	// parse_api = /,/.test(parse_api) ? parse_api.split(',')[1] : parse_api;
					// } else {
					// 	parse_api = ep.parse_api;
					// }
					// log('parse_api =========> '+parse_api);
					// if (parse_api != null && !/\\.m3u8|\\.mp4/.test(ep.url)) {
					// 	parse_api = parse_api.replaceAll('..','.') ;
					// 	ep.url = ep.url.replaceAll('$','$'+parse_api);
					// }
					if (from != null) playMap[from].push(ep.url)
				});
				for (var key in playMap) {
					if ('bfzym3u8' == key) {
						arr.push({
							flag: name[key],
							url: playMap[key],
							sort: 1
						})
					} else if ('1080zyk' == key) {
						arr.push({
							flag: name[key],
							url: playMap[key],
							sort: 2
						})
					} else if ('kuaikan' == key) {
						arr.push({
							flag: name[key],
							url: playMap[key],
							sort: 3
						})
					} else if ('lzm3u8' == key) {
						arr.push({
							flag: name[key],
							url: playMap[key],
							sort: 4
						})
					} else if ('ffm3u8' == key) {
						arr.push({
							flag: name[key],
							url: playMap[key],
							sort: 5
						})
					} else if ('snm3u8' == key) {
						arr.push({
							flag: name[key],
							url: playMap[key],
							sort: 6
						})
					} else if ('qhm3u8' == key) {
						arr.push({
							flag: name[key],
							url: playMap[key],
							sort: 7
						})
					} else {
						arr.push({
							flag: name[key] ? name[key] : key,
							url: playMap[key],
							sort: 8
						})
					}
				}
				arr.sort((a, b) => a.sort - b.sort);
				let playFrom = [];
				let playList = [];
				arr.map(val => {
					if (!/undefined/.test(val.flag)) {
						playFrom.push(val.flag);
						playList.push(val.url);
					}
				})
				VOD.vod_play_from = playFrom.join('$$$');
				VOD.vod_play_url = playList.join('$$$');
			} else {
				VOD.vod_play_from = node.vod_play_from;
				VOD.vod_play_url = node.vod_play_url;
			}
		} catch (e) {
			log("获取二级详情页发生错误:" + e.message);
		}
	`,
    搜索: `js:
		let d = [];
		let jsondata = [];
		let videoList = [];
		if (/v1\\.vod/.test(HOST)) {
			input = (HOST + '/'+ input.split('/')[3]).replace('/search','').replace('text=','wd=').replace('pg=','page=');
			jsondata = JSON.parse(request(input));
			videoList = jsondata.data.list;
		} else {
			input = HOST + '/'+ input.split('/')[3]
			jsondata = JSON.parse(request(input));
			videoList = jsondata.list || jsondata.data;
		}
		// log('videoList =========> '+stringify(videoList));
		videoList.forEach(it => {
			d.push({
				url:it.vod_id,
				title:it.vod_name,
				img:it.vod_pic.startsWith('http') ? it.vod_pic : it.vod_pic.startsWith('//') ? 'https:' + it.vod_pic : it.vod_pic.startsWith('/') ? getHome(HOST) + it.vod_pic : getHome(HOST) + '/' + it.vod_pic,
				desc:it.vod_remarks,
			});
		});
		setResult(d);
	`,
}