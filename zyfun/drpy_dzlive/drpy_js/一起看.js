var rule = {
  title:'一起看',
  host:'http://www.cpldq.com',
  url:'/cptype/fyclass-fypage.html',
  searchUrl:'',
  searchable:0,
  quickSearch:0,
  filterable:1,
  filter:'',
  filter_url:'',
  headers:{
      'User-Agent':'MOBILE_UA',
  },
  timeout:5000,
  class_parse:'ul.top-nav&&li;a&&Text;a&&href;/(\\d+)\.html',
  cate_exclude:'',
  play_parse:true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:input,js:''};
  }),
  double:true,
  推荐:'.main&&.bgte1130;ul&&.sb-film-one;*;*;*;*',
  一级:'.sb-area-index&&ul&&.qcontainer;i&&Text;.lazy&&data-original;.other&&Text;a&&href',
  二级:{
    title:'.name&&Text;.ct&&dd&&Text',
    img:'.lazy&&data-original',
    desc:'.ct&&dd:eq(1)&&Text;.ct&&dd:eq(2)&&Text;.ct&&dt:eq(2)&&Text;.ct&&dt&&Text;',
    content:'div.ee&&Text',
    tabs:'.playfrom--sup&&li',
    lists:'.playlist:eq(#id)&&ul&&li',
    lists:$js.toString(()=>{
        //log(html);
        LISTS = [];
        pdfa(html,'body&&.playlist').forEach((it)=>{
            let lis = pdfa(it,'ul&&li');
            let lis1 = [];
            lis.forEach((item,index)=>{
              let tt = pdfh(item,'body&&Text');
              //log('item:'+item);
              let uu = pd(item,'a&&href',MY_URL);
              if(!/дрр/.test(tt)){
                lis1.push(tt+'$'+uu);
              }
            });
            LISTS.push(lis1);
        });
    }),
    tab_text:'body&&Text',
    list_text:'body&&Text',
    list_url:'a&&href'
  },
  搜索:'列表;标题;图片;描述;链接;详情',
}