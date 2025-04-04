/*!
 * @name 测试源
 * @description 请勿批量下载！
 * @version v1.0.0
 * @author 酷安 @LiuStephen
 */
const DEV_ENABLE = false
const BASE_URL = 'http://47.121.30.121'
const MUSIC_QUALITY = {
    kw: ['128k'],
    wy: ['128k']
}
const MUSIC_SOURCE = Object.keys(MUSIC_QUALITY)
const {
    EVENT_NAMES,
    request,
    on,
    send,
    utils,
    env,
    version
} = globalThis.lx
const httpFetch = (url, options = {
    method: 'GET'
}) => {
    return new Promise((resolve, reject) => {
        request(url, options, (err, resp) => {
            if (err) return reject(err)
            resolve(resp)
        })
    })
}
const handleGetMusicUrl = async (source, musicInfo, quality) => {
    const songId = musicInfo.songmid

    const request = await httpFetch(`${BASE_URL}/music-api/play/${source}?id=${songId}`, {
        method: 'GET',
    })
    const {
        body
    } = request
    if (!body || isNaN(Number(body.code))) throw new Error('unknow error')
    switch (body.code) {
        case 0:
            throw new Error('unknow error')
        case 1:
            return body.data
    }
}
const musicSources = {}
MUSIC_SOURCE.forEach(item => {
    musicSources[item] = {
        name: item,
        type: 'music',
        actions: ['musicUrl'],
        qualitys: MUSIC_QUALITY[item],
    }
})
on(EVENT_NAMES.request, ({
                             action,
                             source,
                             info
                         }) => {
    switch (action) {
        case 'musicUrl':
            if (env != 'mobile') {
                console.group(`Handle Action(musicUrl)`)
                console.log('source', source)
                console.log('quality', info.type)
                console.log('musicInfo', info.musicInfo)
                console.groupEnd()
            } else {
                console.log(`Handle Action(musicUrl)`)
                console.log('source', source)
                console.log('quality', info.type)
                console.log('musicInfo', info.musicInfo)
            }
            return handleGetMusicUrl(source, info.musicInfo, info.type)
                .then(data => Promise.resolve(data))
                .catch(err => Promise.reject(err))
        default:
            console.error(`action(${action}) not support`)
            return Promise.reject('action not support')
    }
})
send(EVENT_NAMES.inited, {
    status: true,
    openDevTools: DEV_ENABLE,
    sources: musicSources
})
