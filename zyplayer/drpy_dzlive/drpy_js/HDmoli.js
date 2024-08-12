/**
 * 待补充lazy免嗅探，不然嗅探过程中遇到的这种地址不对 https://www.hdmoli.pro/js/player/videojs/videojs.html?v=1.61&videourl=/play/2203-0-0.html,https://v.damoli.pro/v/movie/Rebel.Moon.Part.Two.mp4,,2203,0,0
 */
var rule = {
    模板: '首图',
    title: 'HDmoli',
    host: 'https://www.hdmoli.pro',
    url: '/mlist/indexfyclass-fypage.html',
    searchUrl: '/search.php?page=fypage&searchword=**&searchtype=',
    class_parse: '.myui-header__menu li;a&&Text;a&&href;index(\\d+)\.html',
    lazy: ``,
}