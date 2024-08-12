// 地址发布页 https://gfysys.com

var rule = {
    title:'干饭影视',
    host:'https://gfvod.com',
    //host:'https://gfysys.com',
    //hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(0)&&a:eq(0)&&Text");print(src);HOST=src',
    // url:'/vodshow/fyclass--------fypage---.html',
    url:'/vodshow/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.按分类}}---{{fl.按剧情}}-----fypage---{{fl.按年份}}',
    filter: "H4sIAAAAAAAAA+2Wz27aQBDG38VnDmCQkuZVqhxy4NQmt1SqIiRSCrURAgdFSVNoaJpQaFLTkNAIbAgv412bt6jJ/NklB8Qdbvy+zzO7HmZ2fWSkjJ23R8a77Edjx5AVW1ilsO8bCeNgbz/7Svqw9/4w+/L4QeyEp//EpD+XY0gZuQTIwu7MGiWUTZZDfxzZHspp9XS5K8d3KGfU0y03zkNJkkZud+6oTdodWSgubpKkxU2KYndW6GIitepZU6VH4KWtPiZSQJ48dmT+DD0E7U2CSZNyAnDOzokY+ZQTQKuXWg+B17O+Bp5N6wGQF7m/ROUWPQRer/w3nJCH8LqEo0HgTxZLSNIqJTSTZob/HzOj62mlp3XdVLqp6ymlp3Q9qfSkpqfesB7/1PRtpW/r+pbSt+Zl2E3EfbmGTV+7ia650QBWabRlwyJ6T8JzyQNY2oQrDItof1HDgrB0WDaNrRo7vYaNPcvbYSePKgI3dqEoP7eosQH4BO1No3uLTlAAjqu7stymOAD2zotyOCQPgPfSegxGDu0FgMvwXJ1d014Q2PNuRe+SPABer/Ggio3AcactOeCbBYDjhkNp1QKvHv8tFK1LXIfBz9CvUR0AOEf/U3RcoWiAzcBpA5dZw4FbNlTLPnXCghtd0aAicM5qN3TovRHYcy7DPyfkAXAFSvXZxW+6EQC4sZ3vUZVuNQTO+eNKNOjmQljldpJNL74fKQ6A15s6atQQVrph7+MyDWg9AN1rP2peDFzPm+dg/I3qCcBx1ZawGhQHQF7gPQiXDikEztkoywtqNARVl76YnnNdXoC94lPg06cxwuag0D85k2t4UiykR9h0BXdF7j+lxEb8fw8AAA==",
    filter_def:{
        "1": {
          "按分类": "1"
        },
        "2": {
          "按分类": "2"
        },
        "3": {
          "按分类": "3"
        },
        "4": {
          "按分类": "4"
        },
        "20": {
          "按分类": "20"
        }
      },
    searchUrl: '/vodsearch/**-------------.html',
    searchable: 2,//是否启用全局搜索,
    headers: {
        'User-Agent': 'PC_UA',
    },
    class_parse: '.ewave-header__menu&&li;a&&Text;a&&href;/(\\d+).html',
    play_parse: true,
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        if (html.encrypt == '1') {
            url = unescape(url)
        }else if(/lzm3u8/.test(input)){
    play_Url='json:https://jx.m3u8.biz/gg.php?url=';
    input={jx:0,url:input,playUrl:play_Url,parse:1}
} else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            var jx =request(HOST + "/static/player/" + from + ".js").match(/ src="(.*?)'/)[1];
			log(jx)
            let con=request(jx.replace('index','ec')+ url, {headers: {'Referer': HOST}}).match(/let ConFig.*}/)[0];
			log(con)
			eval(con+'\\nrule.ConFig=ConFig')
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
			let purl=ec(rule.ConFig.url, rule.ConFig.config.uid);
			//log(purl)
			input = {
			   jx: 0,
			   url: purl,
			   parse:0,
			}
        }`,
    double: false, // 推荐内容是否双层定位
    推荐: '.tab-content&&li;*;*;;*',
    一级: '.ewave-vodlist&&li;.lazyload&&title;.lazyload&&data-original;;a&&href',
    二级: {
        "title": "h1&&Text;.data--span:eq(0)&&Text",
        "img": ".lazyload&&data-original",
        "desc": ".data:eq(3)&&Text;;;.data--span:eq(1)&&Text;.data--span:eq(2)&&Text",
        "content": ".desc--a&&Text",
        "tabs": ".nav-tabs&&li",
        "lists": ".ewave-content__playlist:eq(#id)&&li"
    },
    搜索: '.ewave-vodlist__media&&li;*;*;;*',
}