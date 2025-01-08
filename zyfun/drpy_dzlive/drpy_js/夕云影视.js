var rule = {
    title: "夕云影院",
    host: "https://www.xyxy.live",
    url: "/index.php/vod/showfyfilter.html",
    searchUrl: "/index.php/vod/search/page/fypage/wd/**.html",
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: "H4sIAAAAAAAAA+2YW08bVxSF/8s8I/mMDTbOW+73+z1VHtzUalEplYBWQlGkJASCuTZRYpdLKFUxhgiwSXMppjZ/xjNj/4uOMzP77LOMKh7aPO3HWd+ec1nnnJlZ89CKK+vIVw+t77Mj1hHLmRj3dvasLmsg80OWX/+c6f8p+7lwoC2PrbdG19uyfxHr+ybmN/KoK2Du1lqjvuLlnjPc3Uu48fdKc7ti4kSKsDP2sbGXB6zv9p7UWwt1wAnd98SvjWoOcDcb2nRzYhlwj+57dtyZewc4qe9+uunlX5g4zvDopPt0AbCemPvkF/cxTCzOJjZZ9mpvAacJNysz/txgaNpzZ/xla34DsK1x8bmzuwc4rnGu5I6OQd/aFq/0ouPuuDbVm9jpvFsviZNf8tsHzPqeXG/UlgD7I7/fLgj2pL8BneUpvSfp+l/2JIwuavxBf2ZoKBZq5hDMklAzJwElgWZuPbMk1EwjYSyBZi4FdBRo5vmCjgLN3A7QSqBRK8tv/dFBK4Fm7lgoCTTqqL7tvfrg1HagL5LZsXa2R6Eq0PhSO0sVZ7rKHj/R9WGW2lkttebHoz4yg9lMLJSiitbavPtX2agIJWpjruLu1s02AokWsT7rLNaMilCiXn7bwIpQImcLRXdp06gIJar4s4JthBJV5CvO5Irz5neziFQazcam+6bYLO43qgvmmDig+c9UnOqaOf9AoifR1A6OLJT02F93jv01r/CH6E7t+4tjdkQq9VXc9+a2vNy82R2p9E7Zf+bVCm7eXFqtHrwLg047N2GzvNVcf6w3IV0fahMu1vz6qIv+zMC3sVBiBmJFKNEWe7eKFaFEi1qoOTMFLNIq24odRYHEtiJWhBJbzo6KQNJPgU8dcw6kg40PKg44/bvvG3t/sNMfXR/G+Ljy30lhByPZzGDss8BoAmmC0zjSOKc2UptThVQxaqeB2mlOe5H2cppCmuI0iTTJaQ/SHk7RK5t7ZaNXNvfKRq9s7pWNXtncKxu9srlXCr1S3CuFXinulUKvFPdKoVeKe6XQK8W9UuiV4l4p9EpxrxR6pbhXCr1S3CuFXvmCcVy2Cm55hh2X6Powx+UoHcbs8HB2MHaUyDEgx4gcB3KcyAkgJ4icBHKSyCkgp4icBnKayBkgZ4icBXKWyDkg54icB3KeyAUgF4hcBHKRyCUgl4hcBnKZyBUgV4hcBXKVyDUg14hcB3KdyA0gN4jcBHKTyC0gt4jcBnKbyB0gd4jcBXKXyD0g94jYQNjhAKIPVQKIPozdQPQh7gGiD38SiH5opIDoh00vEP2QSgPRD7fopBvn25196VTn9Pmma/N8u9M5t/CxVXgftf71SGy4z7+DXuDTuUa16lZesYLv+oaHeEGz/MyP+qxg6MGPg9n2cO53WYn0f/CHIKFn639w+x/VLFC1/xDoxfW/P9rfyybWK+xultof3CZmvwA+fHJW84D1Wgf/FwCzXwCLtUa1BFhJHJU4KnFU4qjEUYmjEkcljloSRyWOWhJHJY5KHP3ycbQ7yeKopDFJY5LGJI1JGpM0JmlM0pikMUljksYkjTEiaex/TWMpSWOSxiSNSRqTNCZpTNKYpDFJY5LGJI1JGpM09qXT2KN/ABG0rrrOOQAA",
    filter_url: "{{fl.地区}}{{fl.类型}}{{fl.排序}}{{fl.分类}}{{fl.语言}}{{fl.字母}}{{fl.年代}}",
    filter_def: {
        20: {
            分类: "/id/20"
        },
        39: {
            分类: "/id/39"
        },
        46: {
            分类: "/id/46"
        },
        47: {
            分类: "/id/47"
        }
    },
    headers: {
        "User-Agent": "MOBILE_UA"
    },
    timeout: 5000,
    class_parse: "ul.mo-navs-boxs&&a;a&&Text;a&&href;id/(\\d+)",
    cate_exclude: "",
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, js: ''};
    }),
    double: true,
    推荐: ".mo-cols-lays&&ul.mo-cols-rows;*;*;*;*;*",
    一级: ".mo-cols-lg2;.mo-situ-name&&Text;a&&data-original;.mo-situ-rema&&Text;a&&href",
    二级: {
        title: "h1&&Text;li.mo-cols-info.mo-ptxs-5px:eq(2)&&Text;li.mo-cols-info.mo-ptxs-5px:eq(0)&&Text",
        img: ".mo-deta-info&&a&&data-original",
        desc: "li.mo-cols-info.mo-ptxs-5px:eq(3)&&Text;li.mo-cols-info.mo-ptxs-5px:eq(1)&&Text",
        content: ".mo-word-info&&Text",
        tabs: ".mo-sort-head&&h2&&a",
        lists: "ul.mo-movs-item:eq(#id)&&li",
        tab_text: "a&&Text",
        list_text: "body&&Text",
        list_url: "a&&href",
        url: "meta[property=og:url]&&.videoURL&&value||meta[property=og:url]&&content"
    },
    搜索: ".mo-deta-info.mo-cols-rows;h1&&Text;*;*;a&&href;.module-info-item-content&&Text"
}