Object.assign(muban.mxone5.二级,{
    //tabs: '.module-tab-item',
    lists: '.module-row-one:eq(#id)&&a.module-row-text',
    list_text:'h4&&Text',
    list_url:'a&&data-clipboard-text',
});
var rule = {
  title: '阿里土豆[盘]',
  模板:'mxone5',
  host: 'https://tudou.lvdoui.top',
  //url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  url: '/index.php/vod/show/id/fyclassfyfilter.html',
  searchUrl: '/index.php/vod/search.html?wd=**',
  filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: 'H4sIAAAAAAAAA+1b2U4bSRR9nvkMPzNyN2R/y77ve0Z5cCJrJhqGkYAZCUVIBLBjCNgGERyPzTZhHwxmCTFmjH/G1W3/Rdqu8u3bt1FsJCdCzH3knMutqlPl9jnt7tc//uDRPWd+fu35zd/lOeN52err6PA0edp8v/utP8XAgtEXsP7+y9f6p79S11aGA4ulvsUybP3h6W5S6HjSqleot9LJq7BqiRlaV/3sEoVVS4w3UaNn3FmiMBhocLGQS5KBJAYDLYyInV0ykMSgC6wNdZEYzCX0oZAdIHORWLWkmJoXQ8vOEoXBXAbXzBwpURhakTm261pRGYOSubeuFSkMppuaL+xNk+lKDLoER0vxJdJFYtBlctlaI+kisQPskdG7Yo6PkBKJQUnfoNH7NymRGEi3GxGBDJFOYtWS0sSo8WHOWaIwGGj8bXEgSwaSGOiyt2qOfRK5dSINwFAYmS1+pKdGYlASDorIBimRGJyafNTaXnJqJGbvVNKYGKE7VcGgpD9v/kuWrjAQMDdi7ib3W5qD6X5e/gd5CfC1+33oCpBMi6FsvVeA2YVSPFgdp9zIqyDYrfm4kVlzVCjIFjht7Ow5e0gI1rQXFomco0JBsOGb72mFgmAD3q3TCgVBj9ickVxx9pAQrGVqifZQkH2qPtMKBdkzTbtnmnb0GE6L7Lyzh4SgR3/EUlmElpxtAIU1z+XNSMociDuXDah9MZo23uWtf3YOCijUBbYLu+POIgnh49Tqa/vFPk7FtVRxsafe45TIWfXVAcqNvApC20grFASHZWOWVigItjGWE8MxWmSjaLtdRRJCR4ZWKAgdTFeFhNCRca1ZQkh2sdrnrJAQlr3L72u3ZTdi26XYVp2yN2vNx6rty228FQCxLZRtwWwzZZsxq1NWx6xGWQ2x+mnCWgBiT1H2FGZPUvYkZk9Q9gRmj1P2OGapVjrWSqda6VgrnWqlY610qpWOtdKpVjrWSqNaaVgrjWqlYa00qpWGtdKoVhrWSqNaaVgrjWqlYa00qpWGtdKoVhrWSqNaaVgrjWplAY5rlL+z048+LiIVM9aG6/y4nIWPYqWL9yww5whzDpjzhDkPzAXCXADmImEuAnOJMJeAuUyYy8BcIcwVYK4S5iow1whzDZjrhLkOzA3C3ADmJmFuAnOLMLeAuU2Y28DcIcwdYO4S5i4w9whzD5j7hLkPzAPCPADmIWEeAvOIMI+AeUyYx8A8IcwTYJ4S5ikwzwjzDBjtp9OEKyP4I/CiC31bhEdFNuI6/vaXSLnPiy5v5yurvDpEIZs10mOI/fVVZ4f9Rb3WL0JBxHa8/KPdX57B8yYrgjZ/vwgqVrdFNkVKJHawwFYrgtYR2OqIoHWEiTpCUmFnxhUmFGansYARX3OWKAzm8j7oSoYKQ3nDtQEK2982qi5u38gxhGMIx5BvE0M4QnCE4AjBEYIjBEeIIxMhvuPPWJwhjnyG+Iqrboyr/IqPYw+GWfZgiGUPxh6MPRh7sEPpwSwTxjdy2YQ1zoTxLdb/yS3W2jdQ+ckJttxsudlys+Vmy82W277t2dIgw13qGTAXepxmTmHYWPZPuY2lhcFkV/PFdMhZojDoMpoyBslDywqzDVnAyBAfrDDbkW0WdqJkuhJD5rH0kUxXYVCSXRark6REYjCXxIb72XGJQZexKWOLvmsgMeiSyRihSCE76nrq28GAjFv/WL6fyCgx6LjeW3wzRHpJrEHmu5BJWe50n2cpHATM59NnMeu0iAriX+HBsPKv8B62o2xH2Y6yHWU7eiTt6LEG2dE6vGYdr3iafaniDDG1CoOBwotmNEgGkhiURCfNFfoqo8Tgq7z2a5XF6EQxTN4lVRgMND0jEuSOtsJgoNq3q41k1v3+psRgLrVfP6zj1VeRtsTeInORGC6Z23SXWBjs0exe4T/yFqjCoEt4SoQSpIvE7EO7IVIkDygMBkoMGnHi5BVmq7su8jGqbgVDpu0b3/Q+oO+uefPaWFmwYo+zQkL7r4mfoGXvzt6dvTt7d/buiGHvftS9u3Wd54c3+OENfguPHxE5hI+IcIbgDMEZgjMEZwjOEJwhDm2GaNQPAJwhOENwhuAMwRmCMwRnCM4QnCE4Q3CGOPIZovsL7HXVqZFeAAA=',

cate_exclude:'求片|全部影片',
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
}
  
  `,
}