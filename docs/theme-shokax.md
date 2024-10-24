---
title: Hexo主题shokaX
sticky: true
date: "2024-04-14"
cover: https://attached-file.oss-cn-shanghai.aliyuncs.com/hexo/202404270827551.jpg
tags: [折腾, hexo]
categories: 
- [hexo]
---

:::info
本文只是简略记录本人站点的搭建过程及遇到的问题，详细步骤可以参见官网。
:::

# 机缘巧合

Hexo 站点默认主题为 landscape，不能说丑出天际，至少也是完全不符合大部分人的审美，所以给站点更换主题就是必然的。

最初的选择是 [NexT](https://theme-next.iissnan.com/)，这款主题主要是黑白配色，简洁易用，功能丰富，自己使用了挺长一段时间。

后来某次机缘巧合，打开了 [Ruri Shimotsuki](https://shoka.lostyu.me/) 小姐姐的博客，一下子就被吸引住了，引用小姐姐设计这个主题的一段话如下：

> 前几年在 Bear 和 Evernote 上整理了大量笔记，非常喜欢 Bear 默认的 markdown 渲染样式。
> 后来因为换了安卓手机，用不了 Bear，四处搜寻替代品，没有满意的。
> 然后阴差阳错知道了 Hexo，又得知 Github 也可以免费建私有仓库了，故再次转移阵地到了自建博客，并部署在 Github Pages。
> 因为这个博客是用来记笔记的，故起名 书架 。
> 对应的主题即 Theme.Shoka ，可以说是为了笔记阅读而生的主题。
> 样式严重参考 Bear，部分代码严重参考 NexT。

恰巧本人也非常喜欢用 Bear 熊掌记，NexT 主题也用了挺久，所以立马就开始了主题迁移工作，参照 Theme.Shoka 的 [使用文档](https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/)，并进行了一番魔改之后，第一版迁移工作完成，自己很满意。

再后来又一次机缘巧合，在搜索 Shoka 的一个问题解决方法时，发现了 [ShokaX](https://github.com/theme-shoka-x/hexo-theme-shokaX)，Shoka 的一个二次开发版，致力于提高性能和优化魔改体验，自己之前的一些魔改都可以直接通过配置来解决了，于是又开始了第二版迁移。

对于没有安装过 Shoka 的小伙伴推荐直接安装 ShokaX。

# 安装

## 主题安装

推荐使用 [ShokaX-CLI](https://github.com/theme-shoka-x/shokaX-CLI) 来安装主题，执行下列命令即可:

```bash
npm i shokax-cli --location=global
SXC install shokaX
```

:::info
如果安装了yarn，执行`SXC install shokaX` 命令会报错，详见[issues/265](https://github.com/theme-shoka-x/hexo-theme-shokaX/issues/265)
可卸载 yarn 或指定 npm 参数即 `SXC install shokaX -pm npm`
:::

## 依赖包

ShokaX-CLI 会自动处理好依赖项问题，基本不需要再手动安装依赖包，我只额外安装了部署和 SEO 相关的几个依赖包。

```bash
npm install --save hexo-deployer-git
npm install --save hexo-generator-sitemap
npm install --save hexo-generator-baidu-sitemap
npm install --save hexo-submit-urls-to-search-engine
```

# 配置

主题安装完成后还不能直接使用，需要进行相关配置，主要分以下几部分：

- Hexo 主配置文件 _config.yml ，
- 主题配置文件 _config.shokax.yml 。
- 其他自定义调整

## _config.yml

### 站点基本配置

```yml
# 站点基本配置
title: 好奇心inside
subtitle: 对世界保持好奇心
description: 互联网 | 生活 | 好奇心
keywords: 互联网,生活,好奇心,成长,探索,curiosity,ai,chatgpt,python,mysql,linux,苹果,mac,ios,hexo
author: 木亦
language: zh-CN
timezone: 'Asia/Shanghai'

# URL及永久链接
url: https://www.qooo.tech
permalink: :title/

# 停用默认代码高亮
syntax_highlighter:

# 主题
theme: shokax
```

### markdown 配置

```yml
markdown:
  render: # 渲染器设置
    html: false # 过滤 HTML 标签
    xhtmlOut: true # 使用 '/' 来闭合单标签 （比如 <br />）。
    breaks: true # 转换段落里的 '\n' 到 <br>。
    linkify: true # 将类似 URL 的文本自动转换为链接。
    typographer:
    quotes: "“”‘’"
  plugins: # markdown-it 插件设置
    - plugin:
        name: markdown-it-toc-and-anchor
        enable: true
        options: # 文章目录以及锚点应用的 class 名称，shoka 系主题必须设置成这样
          tocClassName: "toc"
          anchorClassName: "anchor"
    - plugin:
        name: markdown-it-multimd-table
        enable: true
        options:
          multiline: true
          rowspan: true
          headerless: true
    - plugin:
        name: ./markdown-it-furigana
        enable: true
        options:
          fallbackParens: "()"
    - plugin:
        name: ./markdown-it-spoiler
        enable: true
        options:
          title: "你知道得太多了"

autoprefixer:
  exclude:
    - "*.min.css"
```

### 文件压缩

```yml
minify:
  js:
    enable: false # ShokaX 自带 esbuild 优化，不建议开启，其他主题建议开启
    exclude: # 排除文件，接受 string[]，需符合 micromatch 格式
  css:
    enable: true # 开启 CSS 优化
    options:
      targets: ">= 0.5%" # browserslist 格式的 target
    exclude: # 排除文件，接受 string[]，需符合 micromatch 格式
  html:
    minifier: html-minifier
    enable: true # 开启 HTML 优化
    options:
      comments: false # 是否保留注释内容
    exclude: # 排除文件，接受 string[]，需符合 micromatch 格式
  image:
    enable: true # 开启图片预处理和自动 WebP 化
    options:
      avif: false
      webp: true # 预留配置项，现版本无作用
      quality: 80 # 质量，支持1-100的整数、lossless或nearLossless
      effort: 2 # CPU 工作量，0-6之间的整数(越低越快)
      replaceSrc: true # 自动替换生成html中的本地图片链接为webp链接
      # 我们更建议使用 Service Worker 来在用户侧实现 replaceSrc 的功能，这将能够以一种侵入式更小的方式实现链接替换
    exclude:
```

### feed及sitemap

```yml
# feed生成
feed:
  limit: 20
  order_by: "-date"
  tag_dir: false
  category_dir: false
  rss:
    enable: true
    template: "themes/shokaX/layout/_alternate/rss.ejs"
    output: "rss.xml"
  atom:
    enable: true
    template: "themes/shokaX/layout/_alternate/atom.ejs"
    output: "atom.xml"
  jsonFeed:
    enable: true
    template: "themes/shokaX/layout/_alternate/json.ejs"
    output: "feed.json"

# sitemap网站地图
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

### 站内搜索

配置流程:

- 登录 [Algolia]((https://www.algolia.com/)) 官网，建议使用 Github/Google 账号注册/登录。
- 进入 Dashboard - Search - Index 页面，选择上方 + Create Index 创建索引，索引名称可自定义，如 hexo。
- 进入 Dashboard - Settings - API Keys 页面，复制相关数据到下方配置中。
- 在博客部署前运行 hexo algolia 上传索引，可在 Dashboard - Search - Index 页面中查看。

```yml
algolia:
  appId: # Your appId
  apiKey: # Your apiKey
  adminApiKey: # Your adminApiKey
  chunkSize: 5000
  indexName: hexo
  fields:
    - title #必须配置
    - path #必须配置
    - categories #推荐配置
    - content:strip:truncate,0,4000
    - gallery
    - photos
    - tags
```

## _config.shokax.yml

:::info

以下只是列出了本人的一些配置，更多配置可参考主题文件夹下的 _config.yml

:::

### 主题基本配置

```yml
# 副标题
alternate: Zero

# 主页封面配置
homeConfig:
  gradient: false # 使用CSS渐变作为文章封面
  # fixedCover 性能比默认的更好，且开启时将启用LCP优化和预加载
  fixedCover: "" # 主页面cover(为空则使用bing随机图片)

# 菜单配置
menu:
  home: / || home
  archives: /archives/ || list-alt
  categories: /categories/ || th
  tags: /tags/ || tags
  # friends: /friends/ || heart

# 社交媒体配置
social:
  github: https://github.com/qoopp || github || "#191717"
  twitter: https://twitter.com/buptlostar || twitter || "#00aff0"
  weibo: https://weibo.com/baopeng || weibo || "#ea716e"
  about: /about || address-card || "#3b5998"

# 小工具配置
widgets:
  random_posts: false # 随机文章
  recent_comments: false # 显示最近评论

# 文章界面统计
post:
  count: true # 文章计数

# 页尾全站统计
footer:
  since: 2015 # 开始时间
  count: false # 全站计数

  icp: # ICP备案
    enable: true
    icon: "beian.webp" #网安备案图片
    icpnumber: "xxxxx" # ICP备案号
    beian: # 网安备案号
    recordcode: # 网安备案链接中的recordcode参数

# 是否显示页面加载动画 loading-cat
loader:
  start: false # 当初次打开页面时，显示加载动画
  switch: false # tab 切换到其他页面时，显示加载动画
```

### 模块配置

```yml
# 模块配置
modules:
  player: false # 启用音乐播放器
  fireworks: false # 启用鼠标点击烟花特效
  unlazyHash: false # 启用unlazy hash预览图支持
  visibilityListener: true # 启用可见度监听器
  tabs: true # 启用选项卡扩展支持，如需开启 summary 功能请一并开启
  quiz: true # 启用文章内问题扩展支持
  fancybox: true # 启用 fancybox 支持（不建议禁用）
```

### 预加载

```yml
# 预加载
performance:
  # 使用 preconnect 预加载的地址 (不建议超过三个)
  preConnect:
    - "https://lf9-cdn-tos.bytecdntp.com"
  # 使用 dns-prefetch 预解析的地址
  dnsPrefetch:
    - "https://cdn.jsdelivr.net"
    - "https://unpkg.com"
```

### 评论配置

评论系统采用 Waline, 具体配置可参照[官方文档](https://waline.js.org/guide/get-started/)，本人采用 LeanCloud + Docker 自部署的方式，详见 [评论系统Waline搭建](https://www.qooo.tech/hexo/waline/)

```yml
# 评论配置
waline:
  enable: true # 是否启用
  serverURL: "https://xxxx" # waline 服务端地址
  lang: "zh-CN" # 评论界面语言
  locale: {} # 本地化替换，详见 waline 文档
  emoji: # 表情包，默认为 waline 官方配置
    - https://unpkg.com/@waline/emojis@1.0.1/qq
    - https://unpkg.com/@waline/emojis@1.0.1/alus
    - https://unpkg.com/@waline/emojis@1.0.1/bilibili
  meta: # 评论可以填写的项目
    - nick
    - mail
    - link
  requiredMeta: # 评论必须填写的项目
    - nick
    - mail
  wordLimit: 0 # 评论字数上限 (不建议为 0)
  pageSize: 10 # 每页显示评论条数
  pageview: false # 页面浏览量显示
```

:::warning
经实际测试，pageview 在当前版本(3.1.3)客户端下无法正常显示，会一直显示为正在加载，详见[issues/236](https://github.com/theme-shoka-x/hexo-theme-shokaX/issues/236)
只能暂时关闭此选项，待修复版本发布再打开
:::

## 其他调整

### 自定义网站图片

新建素材文件夹 /source/_data/assets, 将自定义图片放入即可

```bash
avatar.jpg 默认情况下对应主页上的个人头像，可修改
favicon.ico 网站图标
apple-touch-icon.png 将网页链接添加到主屏幕时的图标
failure.ico 网站被隐藏时的网站图标
alipay.png 支付宝捐赠付款码
wechatpay.png 微信捐赠收款码
paypal.png PayPal 捐赠收款码
search.png 搜索下显示的图片
```

### 自定义网站轮播图

ShokaX 允许主页和文章使用不同的图片源:

- images_index.yml为首页图片源文件，如果主题文件夹下存在_images_index.yml，则会使用主题文件夹下的文件，否则使用source/_data/images_index.yml
- images.yml为通用图片源文件，作为首页的后备图片源和文章的图片源。如果未找到images.yml，则会使用主题文件夹下的_images.yml

在上面的 /source/_data 目录下创建 images.yml, 在文件中存入轮播图图片即可替换原本自带的轮播图。

:::warning
经实际测试，当前版本下 source/_data/images_index.yml 文件暂不起作用，无法单独控制首页图片，详见[issues/248](https://github.com/theme-shoka-x/hexo-theme-shokaX/issues/248)
变通方案为在主题文件夹下添加 _images_index.yml ，通过该文件来控制。
:::

### 自定义语言包

新建 source/_data/languages.yml 文件，其他可修改内容参见主题文件夹下 \_languages.yml 文件。

```yml
zh-CN:
  # items
  favicon:
    show: c(˘▽˘c)
    hide: c(˘△˘c)

  reward:
    donate: 赞赏
    text: '请我喝杯咖啡吧☕️'
```
