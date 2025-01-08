# 部署搭建
http://www.sourcepower.top/index

https://gitcode.net/-/snippets/1706/raw/master/ZY-Player.json
https://v.xzbzq.com/y/zy.json
https://pz.nianxin.top/config.json
https://cdn.jsdmirror.com/gh/ls125781003/dmtg@master/zy.json

```json
{
  "analyze": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // id唯一值不可重复[uuidv4]
      "name": "Parse", // 名称[string]
      "type": 0, // 类型[number | 0:web-1:json]
      "url": "https://xxx.top/?jx=", // 解析源地址[string]
      "isActive": true // 是否启用[boolean | true启用-false禁用]
    }
  ],
  "iptv": [
    {
      "id": "993841fe-5e91-5e5d-35d6-5be81822960b", // id唯一值不可重复[uuidv4]
      "name": "IPTV", // 名称[string]
      "url": "https://xxx.com/m3u/iptv.m3u", // 直播源地址[string]
      "type": "remote", // url格式[string | remote:远程m3u-local本地m3u文件路径-json本地手动文件]
      "isActive": true, // 是否启用[boolean | true启用-false禁用]
      "epg": "https://epg.112114.eu.org/?ch={name}&date={date}", // 电子节目单地址[string]
      "logo": "https://epg.112114.eu.org/logo/{name}.png" // 台标地址[string] - 3.3.8启用该参数
    }
  ],
  "channel": [
    {
      "id": "0ede1ecd-de69-1042-15d9-4e5e9e3bb897", // id唯一值不可重复[uuidv4]
      "name": "xx卫视", // 名称[string]
      "url": "http://xxx.com/index.m3u8", // 播放地址[string]
      "group": "默认" // 分组[string]
    }
  ],
  "sites": [
    {
      "id": "51793af6-c923-5504-85db-0ef686624dec", // id唯一值不可重复[uuidv4]
      "key": "51793af6-c923-5504-85db-0ef686624dec", // key值不建议重复[string]
      "name": "xx9影视", // 名称[string]
      "api": "https://www.xxx.com/api.php/provide/vod/", // 站点源地址[string]
      "playUrl": "", // 配合解析去url地址[string]
      "search": 0, // 是否支持搜索[number | 0关闭-1聚合搜索-2仅搜索]
      "group": "切片", // 分组[string]
      "type": 1, // 数据源类型[number | 0:T0(xml)-1:T1(json)-2:drpy(js0)-6:T4(hipy)-7:T3(js)-8:catvod(nodejs)-9:csp(XBPQ)-10:csp(XYQ)-11:csp(AppYsV2)]
      "ext": "", // 扩展参数[string]
      "categories": "电视,影视", // 按顺序展示所配置的分类 不配置则默认展示所有分类[string]
      "isActive": true // 是否启用[boolean | true启用-false禁用]
    }
  ],
  "drive": [
    {
      "id": "3293dc45-cf14-9c66-3028-5b7765b240b7",// id唯一值不可重复[uuidv4]
      "name": "alist", // 名称[string]
      "server": "http://alist.xxx.pro/", // 网盘地址[string]
      "showAll": false, // 是否启用[boolean | true显示全部-false显示video]
      "startPage": "", // 开始页路径[string]
      "search": false, // 是否支持搜索[boolean | true启用-false禁用] 未启用预留
      "headers": "{}", // 请求头[string] 未启用预留
      "params": "{}", // 参数[string]
      "isActive": true // 是否启用[boolean | true启用-false禁用]
    }
  ],
  "setting": [
    {
      "version": "3.3.2", // [3.3.2版本启用]当前版本 (一定要根据实际填写,不然数据库执行会报错)
      "theme": "auto", // 主题 auto:跟随系统 light:亮色 dark:暗色
      "lang": "zh_CN", // [3.3.4版本启用]语言 zh_CN:中文 en_US:英文
      "defaultHot": "kylive", // 热搜 kylive:酷云数据 enlightent:云合数据
      "defaultSearchRecommend": "site", // 搜索推荐 site:站点 quark:夸克 baidu:百度 douban:豆瓣  弃用
      "defaultSearchType": "site", // 全局搜索模式 site:本站 group:组内 all:全部
      "defaultCheckModel": true, // [弃用] 忘了干嘛的
      "defaultChangeModel": false, // [弃用] 忘了干嘛的
      "pauseWhenMinimize": false, // [弃用] 最小化时暂停
      "defaultIptvEpg": "https://epg.112114.eu.org/?ch={name}&date={date}", // iptv epg
      "defaultIptvLogo": "https://epg.112114.eu.org/logo/{name}.png", // iptv logo
      "iptvSkipIpv6": true, // [3.3.8版本弃用] iptv是否跳过ipv6节目
      "iptvMarkIp": true, // [3.3.8版本启用] iptv标识IP类型
      "iptvThumbnail": true, // iptv是否显示缩略图
      "iptvStatus": true, // [3.3.8版本弃用] iptv是否检测延迟
      "iptvDelay": true, // [3.3.8版本启用]  iptv是否检测延迟
      "defaultSite": "51793af6-c923-5504-85db-0ef686624dec", // site 默认源标识
      "defaultIptv": "993841fe-5e91-5e5d-35d6-5be81822960b", // iptv 默认源标识
      "defaultAnalyze": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // analyze 默认源标识
      "defaultDrive": "3293dc45-cf14-9c66-3028-5b7765b240b7", // drive 默认源标识
      "defaultViewCasual": "", // [3.3.4版本启用] 随心看地址
      "barrage": {
        "url": "", // 弹幕地址
        "key": "danmuku", // 弹幕接口返回数据对应的key
        "support": ["qq", "qiyi", "youku", "mgtv"], // 弹幕支持的线路
        "start": "0", // 弹幕接口返回数据对应的开始时间的位置
        "mode": "1", // 弹幕接口返回数据对应的位置的位置
        "color": "2", // 弹幕接口返回数据对应的颜色的位置
        "content": "4" // 弹幕接口返回数据对应的内容的位置
      }, // [3.3.4版本启用]弹幕参数
      "analyzeFlag": ["youku", "qq", "iqiyi", "qiyi", "letv", "leshi", "sohu", "tudou", "pptv", "mgtv", "imgo"], // 解析标识
      "broadcasterType": "xgplayer", // [3.3.4版本弃用,使用playerMode参数]播放器 xgplayer:西瓜 dplayer:呆呆 custom:自定义结合externalPlayer
      "externalPlayer": "", // [3.3.4版本弃用,使用playerMode参数]播放器为custom,调用此处系统命令
      "playerMode": {
        "type": "xgplayer", // 播放器 xgplayer:西瓜 dplayer:呆呆 custom:自定义结合external
        "external": "" // 播放器为custom,调用此处系统命令
      }, // [3.3.4版本启用]
      "softSolution": false, // 是否使用软解 预留
      "communitySubscribe": "", // 社区地址 预留
      "skipStartEnd": false, // [3.3.5版本弃用, pinia存储]是否跳过首尾空白
      "agreementMask": true, // 是否同意协议
      "recordShortcut": "Shift+Command+Z", // 录制快捷键
      "snifferType": "pie", // [3.3.4版本弃用,使用snifferMode参数]嗅探模式 pie iframe
      "snifferMode": {
        "type": "pie", // 嗅探模式 pie iframe custom
        "url": "" // 当 type 为 custom 时填写自定义地址
      }, // [3.3.4版本启用]
      "selfBoot": false, // 是否开机自启动
      "hardwareAcceleration": true, // 是否启用硬件加速
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", // UA
      "webdevUrl": "https://dav.jianguoyun.com/dav/", // [3.3.4版本弃用,使用webdev参数]webdev同步盘地址 用于备份
      "webdevUsername": "", // [3.3.4版本弃用,使用webdev参数]webdev用户名 用于备份
      "webdevPassword": "", // [3.3.4版本弃用,使用webdev参数]webdev密码 用于备份
      "webdev": {
        "sync": false, // 自动同步
        "data": {
          "url": "https://dav.jianguoyun.com/dav/", // webdev同步盘地址
          "user": "", // webdev用户名
          "password": "" // webdev密码
        } // webdev 用于备份
      }, // [3.3.4版本启用]
      "restoreWindowPositionAndSize": false, // 弃用
      "windowPosition": {
        "status": false, // 是否记录窗口位置
        "position": {
          "width": 1000,
          "height": 640
        }, // 窗口位置 [3.3.7版本弃用, 使用position_main｜position_play参数]
        "position_main": {
          "width": 1000,
          "height": 640
        }, // 窗口位置 [3.3.7版本启用] 记录主窗口位置
        "position_play": {
          "width": 875,
          "height": 550
        } // 窗口位置 [3.3.7版本启用] 记录播放窗口位置
      },
      "debug": false, // [3.3.7版本启用] 用于在线调试和嗅探页面弹出
      "defaultFilterType": "off", // [3.3.7版本启用] 用于影视搜索过滤关键词
      "timeout": 5000, // [3.3.5版本启用] 用于调整全局请求超时事件, 单位毫秒
      "dns": "" // [3.3.7版本启用] DNS-over-HTTP
    }
  ]
}
```