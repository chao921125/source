var rule = {
    title: "影视看吧",
    host: "https://m.yskanba.com",
    url: "/fyfilter",
    searchUrl: '/search/$wd/fypage',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: "H4sIAAAAAAAAA62XXVPaQBSG/wvXTr33r3R6ESUki2FDIQkfjjNUKiNMK9paPwrjx1SKbUFx7DgWiv4ZNwn/oidx2lHYN2jHCy9g9nE3J+95zrIUizOFFxjXYnMvl2KLaiE2FxNrFe98EJuJcSWl3v/sKIathgs5fe2Vu6Odk+Br+qCb1iz9pUyHqbOJQlrR1Be6lTJiyzP/VrsbzXurLTOdVZXMgh7N7B7eY7iZSxtKcFwMifcXole5vao9RA3FUjNTYW/t3C2vwlMq7DXh8m23m6LahmSeJW0p55Zr7spnyCUZTzL5Udub4tcAgouqbitcftRqO+ohkzZ8SHel421v4oe0gyxJyVF3K+q0KROftnZyO8TBiZtcK9qm/Lg7rdHBN4hmmA72dDtt73odgqadUuWP6V6diXoPgprCNUuRo+K4Pdqr4Oek3kP18bZwZYP6UG3lERrUxepVVPYCOzwO/dv8BGmQGv3YJZlIKE0xE+oY82r51Uyop6xOzfM8frKcJ8oJAOLNpSjX5YBp5+nQ8gbyT0qg9SynoHBsl/qx/wVwml3EzXN6Kfrd299fvQ1ptCwnyRSLdjVsbgDPXK8DsVkOtQHQGvUdpKjrNGTDnRbEMlChsOmoOBEd51704GbEgN2w6C0HWh7L2nIiTI19S3th2WJlWk6UL/FgoJzgqSAqq6IJ6s9VFgeHbAxv++3x9tRscwFamd5zdZLAaZoIYQjQvx9ff6caqkxK4f8lGmCPBTPFFpBxJuSEV7sb+15HmoOQIXuScuTv1GvU3L0+RAusqIP3U/kw2pMOzxBMhXuCF1Vedd8eQDQIkoaENZ6KsSeNisdOy212IJph8+MTZuq0D0E87cXpO2/wEYI5Chq4Z/o3+/5wCEmDKltE1trueZ++QzTPeALf+0Sz71XXIJy0g+pq82jol7v+UQlXmC6A4FoN9ReCEQb0bzbIZji+Ng/aVl6owyPR6EYUSjELULzNvru2i+tEXQMn7lFUmLK6ylGcvNY+XZMjUfrpIjFXkUpQYM8prqxu5h7trSmL3cZPyuxDxE7H6fcYBP3TG78njWmAJMKZ/lT1BGSUeUalqteWhjsgg2mbZ+BGAOdfQOIJiO8tARd5c4Hz4I7E44D8Ko63IWmbObClX+27zTMEFlgW3M2aJXr5ExHgam5KBO5AUd8UV+WHYNqeN1hWElHqheU/vFhpUtEQAAA=",
    filter_url: "{{fl.分类}}",
    filter_def: {
        dianying: {
            分类: "hot/hotmovie/fypage.html"
        },
        dianshiju: {
            分类: "hot/hottv/fypage.html"
        },
        dongman: {
            分类: "hot/topsearchcomic/fypage.html"
        },
        zongyi: {
            分类: "hot/topsearchshow/fypage.html"
        }
    },
    headers: {
        "User-Agent": "MOBILE_UA"
    },
    timeout: 5000,
    class_parse: ".subNav&&a;a&&Text;a&&href;([^\/]+$)",
    cate_exclude: "推荐",
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 0, url: input, js: ''};
    }),
    double: true,
    推荐: '.main&&.globalPadding;.picTxtA&&li;*;img&&src;*;*',
    一级: '.picTxtA&&li;.sTit&&Text;img&&data-original;.emScore&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.ulTxt&&li&&Text',
        img: '.posterPic&&img&&src',
        desc: ';.ulTxt&&li:eq(1)&&Text;.ulTxt&&li:eq(2)&&Text;.zpmy&&Text',
        content: '',
        tabs: '.tabt3&&span',
        //lists:'dd.ulNumList:eq(#id)&&li',
        lists: $js.toString(() => {
            LISTS = [];
            //let tabs = pdfa(html,rule.二级.tabs);
            let tabs = pdfa(html, 'dd.ulNumList');
            // log(tabs.length);
            //log(tabs[0]);
            for (let tab of tabs) {
                let lists = pdfa(tab, 'ul&&li');
                // log(lists.length);
                let list1 = [];
                for (let ls of lists) {
                    let tt = pdfh(ls, 'a&&Text');
                    let href = pd(ls, 'a&&href', MY_URL);
                    if (!tt.includes('展开')) {
                        list1.push(tt + '$' + href);
                    } else {
                        let script = pdfh(ls, 'script&&Html');
                        //log(script);
                        let a = script.match(/window.*=(.*?);/)[1];
                        //log(a);
                        let b = eval(a);
                        //log(b.length);
                        let c = b.map(it => it.t + '$' + urljoin(MY_URL, it.l));
                        // log(c);
                        list1 = list1.concat(c);
                    }

                }
                LISTS.push(list1);
            }

        }),
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: $js.toString(() => {
        function encodeWd(t) {
            var n;
            return t.length < 7 && (t = t + "       ".substr(0, 7 - t.length)),
            t.length > 15 && (t = t.substr(0, 15)),
                n = base64Encode(t),
                n = n.replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, ""),
                n = n.slice(0, 6) + "j" + n.slice(6);
        }

        let wd = encodeWd(KEY);
        input = input.replace('$wd', wd);
        input = urljoin(HOST, input);
        let html = request(input);
        let d = [];
        let p = rule.一级.split(';');
        pdfa(html, p[0]).forEach(it => {
            d.push({
                title: pdfh(it, p[1]),
                img: pdfh(it, p[2]),
                desc: pdfh(it, p[3]),
                url: pd(it, p[4], input),
            });

        });
        setResult(d);
    }),
}