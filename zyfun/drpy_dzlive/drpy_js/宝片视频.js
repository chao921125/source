var rule = {
    模板: '海螺3',
    title: '宝片视频',
    host: 'https://ibaopian.pro',
    searchUrl: '/vod/search/page/fypage/wd/**.html',
    url: '/vod/show/id/fyclass/page/fypage.html',
    二级: {
        title: '.hl-dc-title&&Text;.hl-dc-content&&li:eq(6)&&Text',
        img: '.hl-lazy&&data-original',
        desc: '.hl-dc-content&&li:eq(10)&&Text;.hl-dc-content&&li:eq(4)&&Text;.hl-dc-content&&li:eq(5)&&Text;.hl-dc-content&&li:eq(2)&&Text;.hl-dc-content&&li:eq(3)&&Text',
        content: '.hl-content-text&&Text',
        tabs: '.hl-tabs&&a',
        lists: '.hl-plays-list:eq(#id)&&li',
    },
}