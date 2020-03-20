const navigatorList = [
  {
    title: "DOC",
    meta: {
      id: "DOC",
      styleObj: {
        "--legendColor": "rgba(39, 174, 96, 1)"
      }
    },
    data: [
      {
        name: "Polyfill.io",
        url: "https://cdn.polyfill.io/v3/url-builder",
        desc: "",
        icon: "https://cdn.polyfill.io/v3/favicon-32x32.55811c1a.png"
      },
      {
        name: "微信公众平台",
        url: "https://mp.weixin.qq.com",
        desc: "",
        icon: "https://mp.weixin.qq.com/favicon.ico"
      },
      {
        name: "Vue.js",
        url: "https://cn.vuejs.org",
        desc: "",
        icon: "https://cn.vuejs.org/images/icons/apple-icon-60x60.png"
      },
      {
        name: "Element UI",
        url: "https://element.eleme.cn",
        desc: "",
        icon: "https://element.eleme.cn/favicon.ico"
      },
      {
        name: "BootCDN",
        url: "https://www.bootcdn.cn",
        desc: "",
        icon: "https://www.bootcdn.cn/assets/ico/favicon.ico?1572121303972"
      },
      {
        name: "css.loli.net",
        url: "https://css.loli.net",
        desc: "",
        icon:
          "https://tva4.sinaimg.cn/large/a4ef6b4agy1g8gbrcvkdwj202s02smx6.jpg"
      }
    ]
  },
  {
    title: "PIC",
    meta: {
      id: "PIC",
      styleObj: {
        "--legendColor": "rgba(1, 136, 251, 1)"
      }
    },
    data: [
      {
        name: "TinyPNG",
        url: "https://tinypng.com",
        desc: "",
        icon: "https://tinypng.com/images/favicon.ico"
      },
      {
        name: "压缩图",
        url: "https://www.yasuotu.com",
        desc: "",
        icon: "https://www.yasuotu.com/favicon.ico"
      },
      {
        name: "iconfont",
        url: "https://www.iconfont.cn/home/index",
        desc: "",
        icon: "//gtms04.alicdn.com/tps/i4/TB1_oz6GVXXXXaFXpXXJDFnIXXX-64-64.ico"
      },
      {
        name: "easyicon",
        url: "https://www.easyicon.net",
        desc: "",
        icon: "https://cdn-img.easyicon.net/favicon.ico"
      },
      {
        name: "removeBgFromImg",
        url: "https://www.remove.bg",
        desc: "",
        icon: "https://www.remove.bg/favicon-32x32.png?v=YAXaAv7pao"
      },
      {
        name: "7度吧",
        url: "https://www.7duba.com/",
        desc: "幻灯片模板、UX/UI工具包、设计图标",
        icon: "https://www.7duba.com/assets/images/favicons/favicon.png"
      }
    ]
  },
  {
    title: "EXAM",
    meta: {
      id: "EXAM",
      styleObj: {
        "--legendColor": "rgba(79, 22, 141, 0.8)"
      }
    },
    data: [
      {
        name: "Css3演示",
        url: "https://www.html.cn/tool/css3Preview",
        desc: "Css3演示-阴影、文本阴影/描边/填充色、圆角、渐变、变形、flex",
        icon: "https://www.html.cn/favicon.ico"
      },
      {
        name: "菜鸟教程在线编辑器",
        url: "https://www.runoob.com/try/try.php?filename=tryhtml_intro",
        desc: "",
        icon: "//static.runoob.com/images/favicon.ico"
      },
      {
        name: "View UI Run",
        url: "https://run.iviewui.com",
        desc: "",
        icon: "https://file.iviewui.com/file/favicon.ico"
      }
    ]
  },
  {
    title: "OTHER",
    meta: {
      id: "OTHER",
      styleObj: {
        "--legendColor": "rgba(221, 79, 66, 1)"
      }
    },
    data: [
      {
        name: "百度翻译",
        url: "https://fanyi.baidu.com",
        desc: "",
        icon:
          "//fanyi.bdstatic.com/static/translation/img/favicon/favicon-32x32_ca689c3.png"
      },
      {
        name: "github",
        url: "https://github.com",
        desc: "",
        icon: "https://github.githubassets.com/favicon.ico"
      }
    ]
  }
];

const app = new Vue({
  el: "#app",
  data: {
    navigatorList: navigatorList
  },
  created: function() {}
});
