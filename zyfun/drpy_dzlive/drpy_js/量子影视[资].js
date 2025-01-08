muban.mxone5.二级.desc = ';;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
muban.mxone5.二级.tab_text = 'body--small&&Text';
var rule= {
	title:'量子影视[资]',
	模板:'mxone5',
	host:'http://www.lzizy9.com',
	// url:'/index.php/vod/show/id/fyclass/page/fypage.html',
	url:'/index.php/vod/show/id/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: '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',
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		39:{cateId:'39'},
		40:{cateId:'40'}
	},
	cate_exclude:'网址|演员',
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else if (/\\/share/.test(url)) {
			url = getHome(url) + request(url).match(/main.*?"(.*?)"/)[1];
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else {
			input
		}
	`,
	// searchUrl:'/index.php/vod/search.html?wd=**',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	detailUrl:'/index.php/vod/detail/id/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}