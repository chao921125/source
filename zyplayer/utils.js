function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
 
    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;
 
      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
 
      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
 
    return uuid.join('');
}


function uuidRe() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
 
    var uuid = s.join("");
    return uuid;
}

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function init() {
    
            // analyze url
            /**
                {
                    "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // id唯一值不可重复,不能数字,建议 uuid
                    "name": "纯净", // 名称
                    "url": "https://im1907.top/?jx=", // 解析源地址
                    "isActive": true // 是否启用 true启用 false 禁用
                }
            */
            // iptv url
            /**
                {
                    "id": "993841fe-5e91-5e5d-35d6-5be81822960b", // id唯一值不可重复,不能数字,建议 uuid
                    "name": "APTV", // 名称
                    "url": "https://ghproxy.com/https://raw.githubusercontent.com/Kimentanm/aptv/master/m3u/iptv.m3u", // 直播源地址
                    "type": "remote", // remote为远程m3u local本地m3u文件路径
                    "isActive": true, // 是否启用 true启用 false 禁用
                    "epg": "https://epg.112114.xyz/" // 电子节目单地址
                }
            */
            // sites api
            /**
                {
                    "id": "51793af6-c923-5504-85db-0ef686624dec", // id唯一值不可重复,不能数字,建议 uuid
                    "name": "39影视", // 名称
                    "api": "https://www.39kan.com/api.php/provide/vod/", // 站点源地址
                    "playUrl": "", // 配合解析去url地址
                    "search": 1, // 0:关闭 1:聚合搜索 2:本站搜索
                    "group": "切片", // 分组
                    "isActive": true, // 是否启用 true启用 false 禁用
                    "type": 1, // 0:cms(xml) 1:cms(json) 2:drpy 3:app(v3) 4:app(v1)
                    "ext": "", // 扩展参数
                    "categories": "电视,影视" // 按顺序展示所配置的分类 不配置则默认展示所有分类
                    }
            */
            // drive server
            /**
                {
                    "id": "3293dc45-cf14-9c66-3028-5b7765b240b7", // id唯一值不可重复,不能数字,建议 uuid
                    "name": "🙋丫仙女", // 名称
                    "server": "http://alist.xiaoya.pro/", // 网盘地址
                    "startPage": "", // 开始页路径
                    "search": false, // 是否支持搜索 true启用 false 禁用
                    "headers": null, // 请求头
                    "params": null, // 参数
                    "isActive": true // 是否启用 true启用 false 禁用
                }
            */
            // channel url
            /**
                {
                    "id": "0ede1ecd-de69-1042-15d9-4e5e9e3bb897", // id唯一值不可重复,不能数字,建议 uuid
                    "name": "CCTV6", // 名称
                    "url": "http://dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226393/index.m3u8", // 播放地址
                    "group": "央视" // 分组
                }
            */

    const dataArr = [
        {
          "name": "CCTV1综合",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv1gq-h264.m3u8",
          "id": "ikwfLZMvThhzGP2gxG3yK"
        },
        {
          "name": "CCTV2财经",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv2gq-h264.m3u8",
          "id": "CqS_3eA4DTzTzfqtoCqrh"
        },
        {
          "name": "CCTV3综艺",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv3gq-h264.m3u8",
          "id": "1iiurRBMYfxL7N7cSPDWQ"
        },
        {
          "name": "CCTV4中文国际",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv4gq-h264.m3u8",
          "id": "4pm91DKIVEx6RkmVidaya"
        },
        {
          "name": "CCTV5体育",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv5gq-h264.m3u8",
          "id": "OWyFP3SJFQkltj8nqAgL9"
        },
        {
          "name": "CCTV5+体育赛事",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctvzhgq-h264.m3u8",
          "id": "BEpPxw6qkF7_6kgjf0Pra"
        },
        {
          "name": "CCTV6电影",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv6gq-h264.m3u8",
          "id": "D3TuHiUGhpYFGPMt8OxVJ"
        },
        {
          "name": "CCTV7国防军事",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv7gq-h264.m3u8",
          "id": "xuwDM9Odo_IDiopBfU6AM"
        },
        {
          "name": "CCTV8电视剧",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv8gq-h264.m3u8",
          "id": "CxaTSaNGLmj_2Qj4WgtGn"
        },
        {
          "name": "CCTV9纪录",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctvjlgq-h264.m3u8",
          "id": "syLTzemIebo8yZyP7SXHi"
        },
        {
          "name": "CCTV10科教",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv10gq-h264.m3u8",
          "id": "fWM31bxsJMokE6cNYu94s"
        },
        {
          "name": "CCTV11戏曲",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hszx-cctv11-h264.m3u8",
          "id": "j51Uzk6nqUykdAf9DzJw5"
        },
        {
          "name": "CCTV12社会与法",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv12gq-h264.m3u8",
          "id": "d5KUt9CTuiH4vP_mWRUqB"
        },
        {
          "name": "CCTV13新闻",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctvnewsgq-h264.m3u8",
          "id": "qPn-DUsbL8epYcAUaY_VU"
        },
        {
          "name": "CCTV14少儿",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctvsegq-h264.m3u8",
          "id": "UcN8hlsZamgsQ577u2vpD"
        },
        {
          "name": "CCTV15音乐",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctvmusicgq-h264.m3u8",
          "id": "9gtDf0Defy6IrCzpYQd30"
        },
        {
          "name": "CCTV16奥林匹克",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv16gq-h264.m3u8",
          "id": "zcU7-w0qaKv2lIOm6kv32"
        },
        {
          "name": "CCTV17农业农村",
          "logo": "",
          "group": "央视",
          "url": "http://125.210.150.58:9090/live/hzgq-cctv17gq-h264.m3u8",
          "id": "Qayl_eqmEM86rO78pRh02"
        },
        {
          "name": "CGTN",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hszx-cctvgj-h264.m3u8",
          "id": "ar6OH03dWbnw5lCb3HQDH"
        },
        {
          "name": "重温经典",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hzgq-cwjdgq-h264.m3u8",
          "id": "6LzIXxfDYgMiBknjTDORb"
        },
        {
          "name": "CETV4中教4台",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hszx-CETV-4-h264.m3u8",
          "id": "LGyojGs02CJPfyPvAlUsN"
        },
        {
          "name": "北京卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-bjgqws-h264.m3u8",
          "id": "6bgQ_3v2KTa1y-fMYYbun"
        },
        {
          "name": "东方卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-dftvgq-h264.m3u8",
          "id": "J8u8hFTkiragDfLYAyLrv"
        },
        {
          "name": "天津卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-tjwsgq-h264.m3u8",
          "id": "FGk6VIcSBYWtvMdrAQdGc"
        },
        {
          "name": "重庆卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-cqwsgq-h264.m3u8",
          "id": "pctgg-zkKrNnXLK47nobn"
        },
        {
          "name": "黑龙江卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-hljwsgq-h264.m3u8",
          "id": "1HBmB3xy56I8nbb-oBJT-"
        },
        {
          "name": "吉林卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-jlwsgq-h264.m3u8",
          "id": "jaAJ7apmmoRnHSu14azzI"
        },
        {
          "name": "辽宁卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-lnwsgq-h264.m3u8",
          "id": "d3ustfshBf_26WRkSC0VE"
        },
        {
          "name": "内蒙古卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-nmgtv-h264.m3u8",
          "id": "8aliJ22YEgKuQFFQP_mDt"
        },
        {
          "name": "宁夏卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-nxtv-h264.m3u8",
          "id": "r_COF15Y1n8j-uCwx_EUG"
        },
        {
          "name": "甘肃卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-gstv-h264.m3u8",
          "id": "tBPKsUl_Uvhe-xalL7WiR"
        },
        {
          "name": "青海卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-qhtv-h264.m3u8",
          "id": "gu8bZfqvT7jg6t2uO-plr"
        },
        {
          "name": "陕西卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-sxtv-h264.m3u8",
          "id": "OT2CG4T3xy4XyAuPiAg6H"
        },
        {
          "name": "河北卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-hebeitv-h264.m3u8",
          "id": "pPZq0FFWJxo6vGc22n23V"
        },
        {
          "name": "山西卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-shanxitv-h264.m3u8",
          "id": "5DQKyYnL2ZSwCpqPo1vAg"
        },
        {
          "name": "山东卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-sdwsgq-h264.m3u8",
          "id": "lFEOYAiNII3xrP5DA-uzH"
        },
        {
          "name": "安徽卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-ahwsgq-h264.m3u8",
          "id": "-eOrPixNDHHJOZOLxbS2C"
        },
        {
          "name": "河南卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-henantv-h264.m3u8",
          "id": "FMEA55nTBwIF3D-MbqxU1"
        },
        {
          "name": "湖北卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-hbwsgq-h264.m3u8",
          "id": "xtSxbr0xlEb7TSPt_YriZ"
        },
        {
          "name": "湖南卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-hnwsgq-h264.m3u8",
          "id": "lMy57A_lfjZ0ftT95WJ6S"
        },
        {
          "name": "江西卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-jxwsgq-h264.m3u8",
          "id": "lL21yQ2kHkHA-EqNn__qS"
        },
        {
          "name": "江苏卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-jswsgq-h264.m3u8",
          "id": "Hb4Or2m7wV8DU7W2OMUmY"
        },
        {
          "name": "浙江卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-zjwsgq-h264.m3u8",
          "id": "S059JGflNHfjZc39KzlCs"
        },
        {
          "name": "东南卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-fjwsgq-h264.m3u8",
          "id": "-4JVNDH-zsfrIB6ODufmb"
        },
        {
          "name": "广东卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-gdwsgq-h264.m3u8",
          "id": "xUr0WwIc3F8_JUZtNsGyV"
        },
        {
          "name": "深圳卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-szwsgq-h264.m3u8",
          "id": "GgiM9ZUHtLHoBzn4-hUjW"
        },
        {
          "name": "广西卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-gxtv-h264.m3u8",
          "id": "Or9mcd67I5CyyP_JDjRR6"
        },
        {
          "name": "云南卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-yntv-h264.m3u8",
          "id": "gugRyMuOVE0Fs4RY9oNyD"
        },
        {
          "name": "贵州卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-gzwsgq-h264.m3u8",
          "id": "XLDlq9QtZKDyE6fhHiRKS"
        },
        {
          "name": "四川卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-scwsgq-h264.m3u8",
          "id": "59hrBlce20FdQR2JG_S0h"
        },
        {
          "name": "新疆卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-xjtv-h264.m3u8",
          "id": "-YpipRKqxUP4BK5Bof4Os"
        },
        {
          "name": "兵团卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-bttv-h264.m3u8",
          "id": "oeIpP12tL7LRuZuIV8xK_"
        },
        {
          "name": "西藏卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-xztv-h264.m3u8",
          "id": "Vb17krLXB8fKDijMrrwjS"
        },
        {
          "name": "海南卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hszx-lytv-h264.m3u8",
          "id": "Qr3-0dAfnhcGOqvBNriPv"
        },
        {
          "name": "三沙卫视",
          "logo": "",
          "group": "卫视",
          "url": "http://125.210.150.58:9090/live/hzgq-ssws-h264.m3u8",
          "id": "KbEYjEMlCgl1wYszK1wwq"
        },
        {
          "name": "北京纪实科教",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hszx-bjjs-h264.m3u8",
          "id": "fjdi50mmJi5uKUL5IrEh6"
        },
        {
          "name": "四海钓鱼",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hszx-shdy-h264.m3u8",
          "id": "3fUScaivvA2a15ytOD7nP"
        },
        {
          "name": "金鹰纪实",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hszx-jyjs-h264.m3u8",
          "id": "jrjRW8Hz1EdBcxSDAsMtA"
        },
        {
          "name": "浙江钱江",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-qjpdgq-h264.m3u8",
          "id": "tLuu0ouiuLqp9xEHhJpRN"
        },
        {
          "name": "浙江经济生活",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-zjjsgq-h264.m3u8",
          "id": "yclP3bZaHXnjd3I3Am0HT"
        },
        {
          "name": "浙江教育科技",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-zjjygq-h264.m3u8",
          "id": "nlqwCfzvN6hK9kJKL3_NY"
        },
        {
          "name": "浙江民生休闲",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-msxxgq-h264.m3u8",
          "id": "1QBft8hf_SDCdTcTBkWb3"
        },
        {
          "name": "浙江新闻",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-zjxwgq-h264.m3u8",
          "id": "38npyEOWr7WABBMJkI-j7"
        },
        {
          "name": "浙江少儿",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-zjsegq-h264.m3u8",
          "id": "Wu6v7QQIV0i5q0spYl2BG"
        },
        {
          "name": "浙江好易购",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-hyggq-h264.m3u8",
          "id": "hNk4aDPIVMKD5EaXVmLa5"
        },
        {
          "name": "杭州综合",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-hzzhgq-h264.m3u8",
          "id": "hhO4QUp3PwXVFbWW4q46d"
        },
        {
          "name": "杭州明珠",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-xhmzgq-h264.m3u8",
          "id": "YwhU77tzdewfIzkcfnxkg"
        },
        {
          "name": "杭州生活",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-hzshgq-h264.m3u8",
          "id": "fcstPrNsEnlI1xm04IKfH"
        },
        {
          "name": "杭州影视",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-hzysgq-h264.m3u8",
          "id": "pYTP6Kw4SNKV_jUNNorcx"
        },
        {
          "name": "杭州青少",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-hzsegq-h264.m3u8",
          "id": "9rMqRVwxR18HHWGbm7nkC"
        },
        {
          "name": "杭州导视",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hzgq-hzdsgq-h264.m3u8",
          "id": "2VgcbfAoMUsLU80jYt2az"
        },
        {
          "name": "临平新闻",
          "logo": "",
          "group": "地方",
          "url": "http://125.210.150.58:9090/live/hszx-klcd-h264.m3u8",
          "id": "XA01RO9izYeRR4RgTDado"
        },
        {
          "name": "华数频道",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hzgq-hsfwgq-h264.m3u8",
          "id": "83Icau7RMUqvwXnNf9rS0"
        },
        {
          "name": "天元围棋",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hszx-tywq-h264.m3u8",
          "id": "_Jh76R5Smlb-O9VFGCq09"
        },
        {
          "name": "凤凰中文",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hszx-fhzw-h264.m3u8",
          "id": "-SqNXEYVitdBZ8MGBjsQ3"
        },
        {
          "name": "凤凰资讯",
          "logo": "",
          "group": "其他",
          "url": "http://125.210.150.58:9090/live/hszx-fhzx-h264.m3u8",
          "id": "_Z74YdWOJjxsw7fqBGhpq"
        }
      ];
    let relArr = [{
        "id": "0ede1ecd-de69-1042-15d9-4e5e9e3bb897", // id唯一值不可重复,不能数字,建议 uuid
      "name": "CCTV6", // 名称
      "url": "http://dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226393/index.m3u8", // 播放地址
      "group": "央视" // 分组
    }];

    for (let o of dataArr) {
        let isRepeat = false;
        for (let rep of relArr) {
            isRepeat = o.url === rep.url;
            if (isRepeat) break;
        }
        if (!isRepeat) {
            relArr.push({
                "id": uuidRe(),
                "name": o.name,
                "url": o.url,
                "group": o.group || ""
            });
        }
    }
    console.log(JSON.stringify(relArr));
}

init();