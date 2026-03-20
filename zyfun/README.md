| 不要升级 3.4.3 使用 3.4.0 此源不适用 3.4.3                                         |
|-------------------------------------------------------------------------|
| [右键复制链接](https://gitcode.net/-/snippets/1706/raw/master/ZY-Player.json) |
| [右键复制链接](https://v.xzbzq.com/y/zy.json)                                 |
| [右键复制链接](https://pz.nianxin.top/config.json)                            |
| [右键复制链接](https://cdn.jsdmirror.com/gh/ls125781003/dmtg@master/zy.json)  |
| []()                                                                    |

```json
{
  "analyze": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuid标识(不可重复)
      "key": "51793af6-c923-5504-85db-0ef686624dec", // <3.4.0 启用> 业务唯一标识(不可重复)
      "name": "Parse", // 名称(展示用)
      "api": "https://xxx.top/?jx=", // <3.4.1 启用> 解析源地址(推荐使用)
      "type": 0, // 解析类型(<=3.4.0: 0=web,1=json | >=3.4.1: 1=web,2=json)
      "flag": [], // <3.4.1 启用> 解析线路/标签标识
      "headers": {}, // <3.4.0 启用> 请求头配置(预留字段)
      "script": "", // <3.4.1 启用> 执行脚本，仅 type=web 时生效
      "isActive": true, // 是否启用(true=启用,false=禁用)
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "iptv": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuidv标识(不可重复)
      "key": "51793af6-c923-5504-85db-0ef686624dec", // <3.4.0 启用> 业务唯一标识(不可重复)
      "name": "Iptv", // 名称(展示用)
      "api": "https://xxx.com/m3u/iptv.m3u", // <3.4.1 启用> 直播源地址(推荐使用)
      "type": 1, // 解析类型(<=3.4.0: remote=远程,local=本地, manual=文本 | >=3.4.1: 1=远程,2=本地,3=文本)
      "epg": "https://epg.112114.eu.org/?ch={name}&date={date}", // 电子节目单地址[string]
      "logo": "https://epg.112114.eu.org/logo/{name}.png", // 台标地址[string] - 3.3.8启用该参数
      "headers": {}, // <3.4.0 启用> 请求头配置(预留字段)
      "isActive": true, // 是否启用(true=启用,false=禁用)
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "channel": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuidv4标识(不可重复)
      "name": "Channel", // 名称(展示用)
      "api": "https://xxx.com/m3u/iptv.m3u8", // <3.4.1 启用> 播放地址(推荐使用)
      "logo": "https://xxx.com/logo/xxx.png", // <3.4.1 启用> 台标地址
      "playback": "", // <3.4.1 启用> 预留回播参数
      "group": "默认", // 分组
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "sites": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuidv4标识(不可重复)
      "key": "51793af6-c923-5504-85db-0ef686624dec", // <3.4.0 启用> 业务唯一标识(不可重复)
      "name": "Film", // 名称(展示用)
      "api": "https://www.xxx.com/api.php/provide/vod/", // 接口地址
      "playUrl": "", // 配合解析去url地址
      "search": 0, // 是否支持搜索(<=3.4.0: 0= 关闭,1=聚合搜索,2=仅搜索 | >=3.4.1: true= 开启,false=关闭)
      "group": "切片", // 分组
      "type": 1, // 适配器类型(0=T0_XML,1=T1_JSON,6=T4_DRPYS,7=T3_DRPY,8=T4_CATVOD,9=T3_XBPQ,10=T3_XYQ,11=T3_APPYSV2,12=T3_PY,13=T3_ALIST)
      "ext": "", // 扩展参数
      "categories": "电视,影视", // 按顺序展示所配置的分类 不配置则默认展示所有分类[string]
      "isActive": true // 是否启用(true=启用,false=禁用)
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "setting": [
    {
      "version": "3.4.3", // <3.2.2 启用> 当前版本(一定要根据实际填写,不然数据库执行会报错)
      "theme": "system", // 主题 (<=3.4.0: auto=跟随系统,light=亮色,dark=暗色 | system=跟随系统,light=亮色,dark=暗色)
      "lang": "zh_CN", // <3.3.4 启用> 语言(<=3.4.0: zh_CN=简体中文,en_US=英文 | system=更随系统,zh_CN=简体中文,zh_TW=繁体中文,en_US=英文)
      "zoom": 1, // <3.4.1 启用> 界面缩放比例(预留)
      "proxy": {
        "type": "none", // 代理类型(system=系统代理,custom=自定义代理,direct=直连)
        "url": "", // 代理地址(支持socks5/http/https协议)
        "bypass": "" // 忽略主机名
      }, <3.4.1 启用> 代理设置
      "hot": "kylive", // <3.4.1 启用> 热搜(baidu=百度,douban=豆瓣,enlightent=云合,komect=移动爱家,kylive=酷云,quark=夸克)
      "site": {
        "searchMode": "site", // 全局搜索模式 site:本站 group:组内 all:全部
        "filterMode": false, // 影视搜索过滤关键词
      }, // <3.4.1 启用> 影视设置
      "live": {
        "ipMark": true, // IP类型
        "thumbnail": false, // 缩略图
        "delay": false, // 延迟测速
        "epg": "https://epg.112114.eu.org/?ch={name}&date={date}", // 电子节目单(name=频道名称 date=日期)
        "logo": "https://epg.112114.eu.org/logo/{name}.png", // 台标(name=频道名称)
      }, // <3.4.1 启用> 直播设置
      "defaultSite": "51793af6-c923-5504-85db-0ef686624dec", // site 默认源标识
      "defaultIptv": "993841fe-5e91-5e5d-35d6-5be81822960b", // iptv 默认源标识
      "defaultAnalyze": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // analyze 默认源标识
      "barrage": {
        "url": "", // 弹幕地址
        "id": "name", // 弹幕接口返回数据对应的id
        "key": "danmuku", // 弹幕接口返回数据对应的key
        "support": ["qq", "qiyi", "youku", "mgtv"], // 弹幕支持的线路
        "time": 0, // <3.4.1 启用> 返回数据对应的开始时间下标
        "type": 1, // <3.4.1 启用> 返回数据对应的位置下标
        "color": 2, // 返回数据对应的颜色下标(<=3.4.0: string | >=3.4.1: number)
        "text": 4 // <3.4.1 启用> 返回数据对应的内容下标
      }, // <3.3.4 启用> 弹幕参数
      "player": {
        "type": "xgplayer", // 播放器(xgplayer=西瓜播放器,artplayer=艺术播放器,custom=调外部播放器)
        "external": "" // 调外部播放器(类型为custom启用)
      }, // <3.4.1 启用>
      "softSolution": false, // 软解(预留字段 true=启用,false=禁用)
      "disclaimer": true, // <3.4.1 启用> 是否同意协议
      "bossKey": "Shift+Command+Z", // <3.4.1 启用> 老板键
      "sniffer": {
        "type": "cdp", // 嗅探模式(cdp=内置嗅探,custom=三方嗅探)
        "url": "" // 三方嗅探接口(类型为custom时启用)
      }, // <3.4.1 启用>
      "autoStart": false, // <3.4.1 启用> 是否开机自启动
      "hardwareAcceleration": true, // 是否启用硬件加速
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", // User-Agent
      "dns": "" // <3.3.7 启用> DNS-over-HTTP
      "cloud": {
        "sync": false, // 自动同步
        "type": "webdav", // 备份类型(webdav=webdav同步盘, icloud=icloud云盘仅mac)
        "data": {
          "url": "https://dav.jianguoyun.com/dav/", // webdav同步盘地址
          "user": "", // webdav用户名
          "password": "" // webdav密码
        } // 仅类型为webdav启用
      }, // <3.4.1 启用>
      "aigc": {
        "type": "openai", // AI类型(仅支持openai)
        "server": "",  // AI服务器地址
        "key": "", // API密钥
        "model": "gpt-3.5-turbo" // 模型名称
      }, // <3.4.1 启用> AI设置
      "timeout": 5000, // <3.3.5 启用> 全局请求超时(ms)
      "debug": false, // <3.3.7 启用> 用于部分调试
    }
  ]
}
```