muban.首图2.二级.title = '.stui-content__detail .title--span&&Text;.stui-content__detail p&&a&&Text';
muban.首图2.二级.content = 'p.col-pd&&Text';
muban.首图2.二级.tabs = '.stui-pannel_hd h3';
muban.首图2.二级.lists = '.stui-content__playlist:eq(#id) li';
muban.首图2.二级.desc = 'p.data:eq(3)&&Text;p.data&&a:eq(-1)&&Text;p.data&&a:eq(-2)&&Text;p.data:eq(1)&&Text;p.data:eq(2)&&Text';
var rule = {
	title: '白嫖影视',
	模板: '首图2',
	host: 'https://www.baipiaoys.com:9092',
	url:'/show/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.地区}}{{fl.排序}}{{fl.剧情}}{{fl.类型}}{{fl.语言}}{{fl.字母}}/page/fypage{{fl.年代}}',
	filter:'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',
	filter_def: {
		1: { 类型: '/id/1' },
		2: { 类型: '/id/2' },
		3: { 类型: '/id/3' },
		4: { 类型: '/id/4' },
		5: { 类型: '/id/5' }
	},
	searchUrl:'/search/page/fypage/wd/**.html',
	tab_exclude:'影片|评论|榜单',
	lazy: `js:
	let html=request(input);
	let jscode=pdfh(html,'body&&script:eq(2)&&Text');
	let jsurl=jscode.match(/"url":"(.*?)"/)[1];
	input='https://www.baipiao-ys.cc:6062/player/analysis.php?v='+jsurl;
	`,
}