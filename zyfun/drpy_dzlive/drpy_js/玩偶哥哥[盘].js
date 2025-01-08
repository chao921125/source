Object.assign(muban.mxone5.二级,{
    //tabs: '.module-tab-item',
    lists: '.module-row-one:eq(#id)&&a.module-row-text',
    list_text:'h4&&Text',
    list_url:'a&&data-clipboard-text',
});
var rule = {
    title: '玩偶哥哥[盘]',
    模板: 'mxone5',
    host: 'https://www.wogg.net',
    //url: '/index.php/vod/show/fyclass--------fypage---.html',
    url: '/index.php/vodshow/fyclass-fyfilter.html',
    filter_url: '{{fl.area}}-{{fl.by or "time"}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    filter: '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',
    class_parse: '.grid-box&&ul&&li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude: '全部影片',
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    lazy: `
  if (/(pan.quark.cn|www.aliyundrive.com|www.alipan.com)/.test(input)){
let type="ali";
if (input.includes("pan.quark.cn")){
type="quark";
} else if (input.includes("www.aliyundrive.com") || input.includes("www.alipan.com")){
type="ali";
}
let confirm="";
//let confirm="&confirm=0";
input = getProxyUrl().replace('js',type)+'&type=push'+confirm+'&url='+encodeURIComponent(input);
//input={parse:0,url:input}
}
  
  `,
}