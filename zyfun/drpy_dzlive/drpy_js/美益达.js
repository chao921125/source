var rule = {
    title: "美益达",
    host: "https://myd02.com",
    url: "/vodshow/fyclassfyfilter.html",
    searchUrl: "/vodsearch/**----------fypage---.html",
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: "H4sIAAAAAAAAA+2ZaU9bRxSG/4u/NpUwWZtv2fd9T5UPUYXUqG0qNWmlKorEHuMAJtTBOJgtbA5gMCQhxgv8Gc9c+1/k2nPOe+ZG7Yi2NGrV++0+77ln7uzzevwkEo0c/vpJ5Lu2XyOHI6pvQXf1RPZEHt7/oc3mX+5//3Nb88WHDbknW+/KNmQfIk/3kBrPVisZUgkQG8n4ZXHMAMe82Bp9RACxhRdqs8QxAxzTHUO6fYRiBPgeKi6AvNhotdjHeQaQt7KhijnOM4DY3DOpCwHH6rmkxAiQ1ztcT7/hPAOoS66/FpvguhhAmenXXnGbyzSAvM5lb+QF5xlArCuuO19xzAD6M77qVRa5Pw1wrJabV/0cI0CZE4t+T3GZBlBm5YVXynjJ96qyxiXbEvohMVubwZgYQBkdW/VXW5xtgGPV8lRtJU8xApQ5MFhbxXgZQJnFRbXCfUuAvh0f1qNz3LcGUOZgr0qsc5kGnt5rRGmRZPKqv2gtEuYdLZLZhXq6lws3gErNp3VhlStlQDovrze30HlNQEO3BtVYhRtqAAP39qXECDDgz9ckRoC81JzOLHOeAdRz8o3kEaCeWx8kRiB1ydt1yQfyBvKqOI+BbALyuhN+T6kYryFhtGRu20vkvL40NwYsm9OUfr7tp2F/YsYbPRvVEm8nBPaw+1Orlm2XYQfvaNjHKtY8NWANg8QIMLTrsxIjwDCkKmogJWFha6CssAFrgCVGYE0aK2bAGmCrJQasLlQrXdKFDQisnM131VLFWjnMO+nC1pbWvaQ1Hy29VfRWW4+KHrX1FtFbLD36FXT/0dIPiX7I1g+KftDWD4h+wNb3i77f1veJvs/Wpb1Ru71RaW/Ubm9U2hu12xuV9vqPgQHJpfTqgDUgzJ8MCGR7QI6QcATKUVKOQjlGyjEox0k5DuUEKSegnCTlJJRTpJyCcpqU01DOkHIGyllSzkI5R8o5KOdJOQ/lAikXoFwk5SKUS6RcgnKZlMtQrpByBcpVUq5CuUbKNSjXSbkO5QYpN6DcJOUmlFuk3IJym5TbUO6QcgfKXVLuQmn5ktdA48meKnpwWBUTMlXAwamiUxv11DsJ+tLjB34CDvNiUeeTgfi3Dx4/ks1wtVvFegPxR9/8+FNboy739kRad82sjlWqRRwGBv7uOew6F13nqetc1O8/qFmYXAOILS/4pz3HDOzEyLrMo8sgOo2lw8S7zLjTiDkMo9OMd1VUoZPLNCBt6NHdk2hDEzD3su1STwK0b7Db+iFiAHnxYT2RUc+K6rcOzrYlfHtqWo3hWDUg/mRNbadgTpogPyAyepzHi+DzGFLHhP6ri8S1ENxG9o8XidPIjuR9r6fGpzkV/D81d6FJi4QmLRKatNCk/VMmbe+umbTmceSVyrW+YuCEIgnbXWHVP2UC7wUka1v0N8rge7YUNFbB92wJG3hm0u8qb6Gd93Aw3hgrqBm+uyJAL3avqcSMZAuj/Y5bUz004S3DxBlAySvbtXyMizWwEwOkR56pfphNA4iNDupR5BmQfu3RhQJ6tAmIvUzXOvk2jUDm2brKDVGMwPIC9Rn+HoGMd0HHEhjpJsjxVtIxLpNAjsy31U2OEeB7yUn9DgbPAGJLE7qc5JgB1CX9qlqGKTbwr74tdJm63zVgoU0KbVJok0KbFNqk3bVJ+3b3LkvFs7q8JNurSEGbFHgvIAVtUvA9WwrapOB7toQNvCtXm4ZHMoC623+OfvHJv6OuSxedm69uTfFnDaDQQFcEK+P8lzqe9ZIliTUAMceFk+uiyuXTXJc+rosx10WS7njuxfh/WALEykt+k3Ry0yvD5dkS1u1Nr4/to3lGCesl3c0hAkz3jn6VYb9MYE0pZTnEJohHjus05xGgh4ZiamVDL7/mTgJ/Fo/1py+rQq8UeqXQK4VeKfRKu+uV9tteKZy84eT970zepx8BmfA972MpAAA=",
    filter_url: "-{{fl.地区}}-{{fl.排序}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}",
    filter_def: "",
    headers: {
        "User-Agent": "MOBILE_UA"
    },
    timeout: 5000,
    class_parse: ".swiper-wrapper&&a;a&&Text;a&&href;(\\w+).html",
    cate_exclude: "Netflix|日更新|专题|排行榜|热搜|留言",
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, js: ''};
    }),
    double: true,
    推荐: "body&&.module:eq(1);body&&a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href",
    一级: "body&&a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href",
    二级: {
        title: "h1&&Text;.module-info-tag&&Text",
        img: ".lazyload&&data-original",
        desc: ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text",
        content: ".module-info-introduction-content&&Text",
        tabs: ".module-tab-item.tab-item",
        lists: "body&&.module-play-list:eq(#id)&&a",
        tab_text: "body&&Text",
        list_text: "body&&Text",
        list_url: "a&&href"
    },
    搜索: "body&&.module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text"
}