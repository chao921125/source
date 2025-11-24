/*!
 * @name KuwoDES
 * @version 1.0.0
 * @author 不知名纯鹿人
 * @description 酷我音乐音源接口
 */

const MUSIC_QUALITY = {
  'kw': ['128k', '320k', 'flac', 'flac24bit', 'hires']
};

const MUSIC_SOURCE = Object.keys(MUSIC_QUALITY);
const QUALITY_MAP = {
  '128k': '128kmp3',
  '320k': '320kmp3',
  'flac': '2000kflac',
  'flac24bit': '4000kflac',
  'hires': '4000kflac'
};

const { EVENT_NAMES, request, on, send, env, version } = globalThis.lx;

/**
 * 发起网络请求
 * @param {string} url 请求地址
 * @param {object} options 请求选项
 * @returns {Promise} 返回Promise对象
 */
const httpFetch = (url, options = { method: 'GET' }) => {
  return new Promise((resolve, reject) => {
    console.log('--- start --- ' + url);
    request(url, options, (err, resp) => {
      if (err) return reject(err);
      console.log('API Response: ', resp);
      resolve(resp);
    });
  });
};

/**
 * 获取音乐播放链接
 * @param {string} source 音源名称
 * @param {object} musicInfo 音乐信息
 * @param {string} quality 音质
 * @returns {Promise<string>} 返回音乐播放链接
 */
const handleGetMusicUrl = async (source, musicInfo, quality) => {
  const songId = musicInfo.hash ?? musicInfo.songmid;
  const response = await httpFetch(
    `https://mobi.kuwo.cn/mobi.s?f=web&rid=${songId}&source=jiakong&type=convert_url_with_sign&surl=1&br=${QUALITY_MAP[quality]}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': env ? `lx-music-${env}/${version}` : `lx-music-request/${version}`
      },
      follow_max: 5
    }
  );

  const { body } = response;

  if (!body || isNaN(Number(body.code))) throw new Error('未知错误');
  
  if (env != 'mobile') console.groupEnd();

  switch (body.code) {
    case 200:
      console.log(`handleGetMusicUrl(${source}_${musicInfo.songmid}, ${quality}) success, URL: ${body.data.surl}`);
      return body.data.surl;
    default:
      console.error(`handleGetMusicUrl(${source}_${musicInfo.songmid}, ${quality}) failed`);
      throw new Error('获取音乐链接失败');
  }
};

// 初始化音源配置
const musicSources = {};
MUSIC_SOURCE.forEach(source => {
  musicSources[source] = {
    name: source,
    type: 'music',
    actions: ['musicUrl'],
    qualitys: MUSIC_QUALITY[source]
  };
});

// 监听LX Music请求事件
on(EVENT_NAMES.request, ({ action, source, info }) => {
  switch (action) {
    case 'musicUrl':
      if (env != 'mobile') {
        console.group(`Handle Action(musicUrl)`);
        console.log('source', source);
        console.log('quality', info.type);
        console.log('musicInfo', info.musicInfo);
      } else {
        console.log(`Handle Action(musicUrl)`);
        console.log('source', source);
        console.log('quality', info.type);
        console.log('musicInfo', info.musicInfo);
      }
      return handleGetMusicUrl(source, info.musicInfo, info.type)
        .then(data => Promise.resolve(data))
        .catch(err => Promise.reject(err));
    default:
      console.error(`action(${action}) not support`);
      return Promise.reject('action not support');
  }
});

// 发送初始化成功事件
send(EVENT_NAMES.inited, {
  status: true,
  openDevTools: false,
  sources: musicSources
});