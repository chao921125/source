// 发布页 https://www.nmdvd.com/
// https://www.jsjiami.com/
var rule={
	title:'农民影视2',
	tab_rename:{'默认':'线路①','播放':'线路①','滴滴':'线路①'},
	//host:'https://www.nmddd.com',
	host:'https://www.nmdvd.com/',
	hostJs:`print(HOST);let html=request(HOST,{headers:{"User-Agent":MOBILE_UA}});
	let src = jsp.pdfh(html,"body&&a:eq(1)&&href")||jsp.pdfh(html,"body&&a:eq(1)&&Text");
	if(!src.startsWith('http')){src='https://'+src};print("抓到主页:"+src);HOST=src`,
	url:'/vod-list-id-fyfilter.html',
	// /vod-list-id-2-pg-1-order--by-time-class-0-year-2023-letter--area--lang-.html
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}-pg-fypage-order--by-{{fl.by or "time"}}-class-0-year-{{fl.year}}-letter-{{fl.letter}}-area-{{fl.area}}-lang-',
	filter: 'H4sIAAAAAAAAA+2Z304TQRyF32WvuZjZtjNT3sBnMFxUbCJRMQE0IYRELQgtCmqkFSz+iZaWiFICIbIIfZnulr6FW7o756CJMeFKMnf9ndOdnW9osl+WOU96ozfnvLvFWW/UGy/MFG/c9ka8ycL9Yjz39k/C9yvx/Khw72Hx4ouTcRwutvql1iCOB+nNjyRxpdU9rffKS0mTQ1Oth+UmGmWb3vJ+VFpEo9E0X4XHJ2iMbaInL6PHVTR53KfcvLSaFLho+W03KFOFfUelSvR0kypsL2wsXdqEjPc3NiiH51WYKhZwWmG9HT4P/n5aWPlLs7/xLEmTIe362xvRj72kSwZ73Vo7Oj5LrxsO9sjOVsN3p0mXDHbNDzvoksEeQK0R1XeTLhlsd9DGdclgu2o7rHwMtz6ltZ3tXXd2o63GeaPTDTbTe3NkqV60w2A7pRoOaXe+so8dJAN2t867W+cu3kq00omPNl3WznblRqe39q1X3kgXt3P6jW5noXdai6rpHwOzvcviUfi9lN5iOPBPZLZYmKKfyPFh9+TzP/5EfOFnkuziI+U+cp9ziVxyLpALymXe5jLPuUFuONfINecKueI8hzzHeRZ5lnPwSuaV4JXMK8ErmVeCVzKvAK9gXgFewbwCvIJ5BXgF8wrwCuYV4BXMK8ArmFeAVzCvAK9gXgFeAV6Zz6e8Fx8pN8gN5xq55lwhV5znkOc4zyLPcp5BnuHcR+5zLpFLzgVy5jXgNcxrwGuY14DXMK8Br2FeA17DvAa8hnkNeA3zGvAa5jXgNcxrwGuYV4NXM68Gr2ZeDV7NvBq8mnk1eDXzavBq5tXg1cyrwauZV4NXM68Gr2ZeBV7FvAq8inkVeBXzKvAq5lXgVcyrwKuYV4FXMa8Cr2JeBV7FvAq88Ud+fNyaxcMjWn0dBmt/PDyi2lG/dpgsMDMRf9U+vYIgar9JmjsTM9N48u0thMupfUyPP5gqDu46NuL5V7RB0MaP4m7QjI0sRUMV+8zAXA7aaYWzi+1jICe4Cscd7TYHToMq51zMuZhzMedizsWcizkXcy52zVwsQy7m7MbZjbMbZzfObpzdOLtxdvP/2032im+acDphpRX9/EovhsxvFf3/Lu/eGTmrclblrMpZlbMqZ1XOqq6ZVfnKvTRyeuP0xumN0xunN05vnN5cI72Z/wVNTNQhri4AAA==',
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		26:{cateId:'26'}
	},
	searchUrl:'/index.php?m=vod-search&wd=**',
	searchable:2,//是否启用全局搜索,
	headers:{//网站的请求头,完整支持所有的,常带ua和cookies
		'User-Agent': 'MOBILE_UA',
	},
	// class_parse: '#topnav li:lt(4);a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&连续剧&综艺&动漫&短剧',//静态分类名称拼接
    class_url:'1&2&3&4&26',//静态分类标识拼接
	play_parse: true,
	lazy:`
	var _0xodY='jsjiami.com.v7';const _0x3a7939=_0x1b9e;(function(_0x50d14f,_0x363bc3,_0xd60da8,_0x34010f,_0x5d155a,_0x2263d2,_0x40e9ef){return _0x50d14f=_0x50d14f>>0x4,_0x2263d2='hs',_0x40e9ef='hs',function(_0xfe8ab2,_0x4926ff,_0xacbc26,_0x81c935,_0x39ef92){const _0x241219=_0x1b9e;_0x81c935='tfi',_0x2263d2=_0x81c935+_0x2263d2,_0x39ef92='up',_0x40e9ef+=_0x39ef92,_0x2263d2=_0xacbc26(_0x2263d2),_0x40e9ef=_0xacbc26(_0x40e9ef),_0xacbc26=0x0;const _0x4cddeb=_0xfe8ab2();while(!![]&&--_0x34010f+_0x4926ff){try{_0x81c935=-parseInt(_0x241219(0x1fc,'hMdy'))/0x1*(-parseInt(_0x241219(0x1e8,'zfP6'))/0x2)+parseInt(_0x241219(0x1f4,'M9a1'))/0x3+parseInt(_0x241219(0x1e5,'5Qm)'))/0x4*(parseInt(_0x241219(0x1e7,'Fxfe'))/0x5)+-parseInt(_0x241219(0x205,'s4]9'))/0x6*(parseInt(_0x241219(0x1f2,'M9a1'))/0x7)+-parseInt(_0x241219(0x1ef,'5Qm)'))/0x8+-parseInt(_0x241219(0x207,'ECOd'))/0x9*(-parseInt(_0x241219(0x1fa,'UU)s'))/0xa)+parseInt(_0x241219(0x1f7,'bTs%'))/0xb;}catch(_0x588a5e){_0x81c935=_0xacbc26;}finally{_0x39ef92=_0x4cddeb[_0x2263d2]();if(_0x50d14f<=_0x34010f)_0xacbc26?_0x5d155a?_0x81c935=_0x39ef92:_0x5d155a=_0x39ef92:_0xacbc26=_0x39ef92;else{if(_0xacbc26==_0x5d155a['replace'](/[xtRMbOeynNrgJFQXwK=]/g,'')){if(_0x81c935===_0x4926ff){_0x4cddeb['un'+_0x2263d2](_0x39ef92);break;}_0x4cddeb[_0x40e9ef](_0x39ef92);}}}}}(_0xd60da8,_0x363bc3,function(_0x87df3f,_0x31fc78,_0x2fb012,_0x11d407,_0x52aa2e,_0x1bcd9e,_0x1c6455){return _0x31fc78='\x73\x70\x6c\x69\x74',_0x87df3f=arguments[0x0],_0x87df3f=_0x87df3f[_0x31fc78](''),_0x2fb012='\x72\x65\x76\x65\x72\x73\x65',_0x87df3f=_0x87df3f[_0x2fb012]('\x76'),_0x11d407='\x6a\x6f\x69\x6e',(0x163ac6,_0x87df3f[_0x11d407](''));});}(0xc90,0xb2591,_0x30a0,0xcb),_0x30a0)&&(_0xodY=\`\x7ef\`);pdfh=jsp[_0x3a7939(0x209,'M9a1')],pdfa=jsp[_0x3a7939(0x1eb,'1Z5k')];let html=request(input),mac_url=html[_0x3a7939(0x1ee,'hMdy')](/mac_url='(.*?)';/)[0x1],mac_from=html[_0x3a7939(0x1e9,'M9a1')](/mac_from='(.*?)'/)[0x1];log(_0x3a7939(0x1e4,'zfP6')+flag+_0x3a7939(0x1f3,'cACk')+mac_from);let is_sniffer=/^线路/['test'](flag)||/one|zhou/['test'](mac_from),index=parseInt(input[_0x3a7939(0x1e9,'M9a1')](/num-(\\d+)/)[0x1])-0x1,playUrls=mac_url['split']('#'),playUrl=playUrls[index][_0x3a7939(0x203,'ttts')]('$')[0x1];function _0x30a0(){const _0x13b14a=(function(){return[_0xodY,'QjMXstrjKgiryabxymMywiNO.cnoFRmbg.bbvJ7e==','W6m2ECkwomobcmkvcCk4ymkkWQS','W7ZdTSoRkSokWPbVC8okguSaWOq','eSk6scVdVwKjWP3dN8o1WOy4','eCkYjM7cQYGRWQO','qHtcNCkXv8o5WQJcKCo7jmoZAW','cCo8W7m7dXZcTSodrSoS','amoiW6b9W7m','W5rmWRawW6VcVCoWW4K2sq','W5BdKSkGWPhcUrBdVbZdNXC','556b5A6555MR6zggWPi','E8kvlbnzW4upW5C','W4vRW4ZcMX48WOS','h8oqW47dVwC'].concat((function(){return['WO0emCoJgmo6WRm/','c3pcTCoBdmkBW7xdICkyefhdKq','bLNcNSkOWQO','WQvgfXhdVCohW4bnWQRcI8ktW6KK','WPTnWRHbW7uc','imo3WONdMq','W71iW7hdJmonFMO','eLddNCoX','ctaNW4L/WQVdICki','W4pdOd3dTXK','W73cUSoigSksCSoFe0fRAfq','fMOc','W6WYW6ZdNvOEW6hcMW','WPZcUg7dVK4bc8kmW5m','pCoYWPVdKSk+'].concat((function(){return['sSo6W7RdOx5r','WQ/cS0vW','6ksU5P2s5PgY5PsJ5z+n5z+LBq','A2ZdR8o0sa','vSkLWRnUfa','W77cSSocgSkwDmkHuwfWENuhW4W','W67cPNBdT8olW4bSW7v5zf7cQmk4yq','WR/dImorWQBcUmk4W7KhcmkPW7JdJG','z8oHWRJdTmkZWPddRq','qdRcRCkOW4f5W69mhCof','zCkHW5/cGSoGW7pdR8kMCCkuWRL8','WRHGk8onFmkvxCkj','smo2bg3cUwvOW4ddS8oQWRSaDKj7wSolWORdMCkRreuk'];}()));}()));}());_0x30a0=function(){return _0x13b14a;};return _0x30a0();};function _0x1b9e(_0x486a8a,_0x36edfa){const _0x30a0cc=_0x30a0();return _0x1b9e=function(_0x1b9eab,_0x286407){_0x1b9eab=_0x1b9eab-0x1e1;let _0x2bfbe5=_0x30a0cc[_0x1b9eab];if(_0x1b9e['NiBjgG']===undefined){var _0x5810c9=function(_0x11e993){const _0x1e2fda='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2d4d60='',_0x2e6752='';for(let _0x4facf7=0x0,_0x24a279,_0x3d63f6,_0x499bf3=0x0;_0x3d63f6=_0x11e993['charAt'](_0x499bf3++);~_0x3d63f6&&(_0x24a279=_0x4facf7%0x4?_0x24a279*0x40+_0x3d63f6:_0x3d63f6,_0x4facf7++%0x4)?_0x2d4d60+=String['fromCharCode'](0xff&_0x24a279>>(-0x2*_0x4facf7&0x6)):0x0){_0x3d63f6=_0x1e2fda['indexOf'](_0x3d63f6);}for(let _0x1ad841=0x0,_0x1bae51=_0x2d4d60['length'];_0x1ad841<_0x1bae51;_0x1ad841++){_0x2e6752+='%'+('00'+_0x2d4d60['charCodeAt'](_0x1ad841)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2e6752);};const _0x367256=function(_0x5f02d6,_0x25d27b){let _0x419fcf=[],_0x232c6b=0x0,_0x147076,_0x2fb679='';_0x5f02d6=_0x5810c9(_0x5f02d6);let _0x29504c;for(_0x29504c=0x0;_0x29504c<0x100;_0x29504c++){_0x419fcf[_0x29504c]=_0x29504c;}for(_0x29504c=0x0;_0x29504c<0x100;_0x29504c++){_0x232c6b=(_0x232c6b+_0x419fcf[_0x29504c]+_0x25d27b['charCodeAt'](_0x29504c%_0x25d27b['length']))%0x100,_0x147076=_0x419fcf[_0x29504c],_0x419fcf[_0x29504c]=_0x419fcf[_0x232c6b],_0x419fcf[_0x232c6b]=_0x147076;}_0x29504c=0x0,_0x232c6b=0x0;for(let _0x4f7f02=0x0;_0x4f7f02<_0x5f02d6['length'];_0x4f7f02++){_0x29504c=(_0x29504c+0x1)%0x100,_0x232c6b=(_0x232c6b+_0x419fcf[_0x29504c])%0x100,_0x147076=_0x419fcf[_0x29504c],_0x419fcf[_0x29504c]=_0x419fcf[_0x232c6b],_0x419fcf[_0x232c6b]=_0x147076,_0x2fb679+=String['fromCharCode'](_0x5f02d6['charCodeAt'](_0x4f7f02)^_0x419fcf[(_0x419fcf[_0x29504c]+_0x419fcf[_0x232c6b])%0x100]);}return _0x2fb679;};_0x1b9e['DkIagt']=_0x367256,_0x486a8a=arguments,_0x1b9e['NiBjgG']=!![];}const _0x16fdc4=_0x30a0cc[0x0],_0x174b48=_0x1b9eab+_0x16fdc4,_0x52b185=_0x486a8a[_0x174b48];return!_0x52b185?(_0x1b9e['ZVqdvL']===undefined&&(_0x1b9e['ZVqdvL']=!![]),_0x2bfbe5=_0x1b9e['DkIagt'](_0x2bfbe5,_0x286407),_0x486a8a[_0x174b48]=_0x2bfbe5):_0x2bfbe5=_0x52b185,_0x2bfbe5;},_0x1b9e(_0x486a8a,_0x36edfa);}log(playUrl);let scripts=html['match'](/script src="(.*?)"/g),js_url='';for(let i=0x0;i<scripts[_0x3a7939(0x208,'@aBP')];i++){let script=scripts[i][_0x3a7939(0x206,'[9Cm')](/src="(.*?)"/)[0x1];if(!script[_0x3a7939(0x1fe,'FpQi')](_0x3a7939(0x1e2,'EhwT'))&&!script[_0x3a7939(0x204,'M7)G')]('config')){js_url=urljoin(input,script);break;}else{if(script[_0x3a7939(0x1f5,'bTs%')](_0x3a7939(0x1ea,'DMnO'))&&!script[_0x3a7939(0x201,'fjyl')]('config')){js_url=urljoin(input,script);break;}}}log('js_url:'+js_url),html=request(js_url);let jx_path=html[_0x3a7939(0x1fd,'F*r!')](/this.Path=.*?"(.*?)"/)[0x1];jx_path=urljoin(HOST,jx_path),log('jx_path:'+jx_path);let jx_js_url=jx_path+mac_from+_0x3a7939(0x1e6,'GEs!');log(_0x3a7939(0x202,')5M#')+js_url),html=request(jx_js_url);let jx_php_url=html[_0x3a7939(0x1ed,'e3P0')](/src="(.*?)'/)[0x1];if(is_sniffer){html=request(_0x3a7939(0x1f6,'UU)s'));let urls=JSON['parse'](html)['data'];log(urls),playUrl=urls[0x0]+playUrl;}else playUrl=jx_php_url+playUrl;log(_0x3a7939(0x1ec,'dpEP')+playUrl),html=req(playUrl,{'headers':{'User-Agent':MOBILE_UA}})[_0x3a7939(0x1e1,'FA9(')];let realUrl;is_sniffer?realUrl=html[_0x3a7939(0x1e9,'M9a1')](/video src="(.*?)"/)[0x1]:realUrl=html['match'](/url='(.*?)'/)[0x1];log(_0x3a7939(0x200,'FA9(')+realUrl);realUrl&&(input={'parse':0x0,'url':realUrl});var version_ = 'jsjiami.com.v7';
	`,
	limit:6,
	推荐:'.globalPicList .resize_list;*;img&&data-src;*;*',
	一级:'.globalPicList li;.sTit&&Text;img&&src;.sBottom--em&&Text;a&&href',
	二级:{
		"title":".title&&Text;.type-title&&Text",
		"img":".page-hd&&img&&src",
		"desc":".desc_item:eq(3)&&Text;.desc_item:eq(4)--span&&Text;;.desc_item:eq(1)--span&&Text;.desc_item:eq(2)--span&&Text",
		"content":".detail-con p&&Text",
		"tabs":".hd",
		"lists":".numList:eq(#id) li"
	},
	搜索:'.ulPicTxt.clearfix li;*;img&&data-src;.sDes:eq(1)&&Text;*',

	// //是否启用辅助嗅探: 1,0
	// sniffer:1,
	// // 辅助嗅探规则js写法
	// isVideo:`js:
	// 	log(input);
	// 	if(/video\\/tos/.test(input)){
	// 		input = true
	// 	}else if(/\\.m3u8/.test(input)){
	// 		input = true
	// 	}else{
	// 		input = false
	// 	}
	// `,
}