// 搜索验证
// 网址发布页 https://www.555dy.top
muban.mxpro.二级.desc = '.module-info-item:eq(-1)&&Text;;;.module-info-item-content:eq(2)&&Text;.module-info-item-content:eq(0)&&Text';
var rule = {
    title: '555影视[飞]',
    模板: 'mxpro',
    host: 'https://www.555dyy.top',
    hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,".row:eq(1)&&a&&href");print(src);HOST=src',
    url: '/vodshow/fyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}',
    filter: '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',
    filter_def: {
        1: {cateId: '1', by: 'time'},
        2: {cateId: '2', by: 'time'},
        3: {cateId: '3', by: 'time'},
        4: {cateId: '4', by: 'time'},
        124: {cateId: '124', by: 'time'}
    },
    class_parse: 'li.navbar-item;a&&Text;a&&href;.*/(\\d+)',
    cate_exclude: 'Netflix|追剧周表|今日更新|专题|排行|地址',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    detailUrl: '/voddetail/fyid.html', //非必填,二级详情拼接链接
    搜索: 'json:list;name;pic;;id',
}