# Hexo BMW 主题

# 原项目
[原项目](https://github.com/dongyuanxin/theme-bmw)貌似不再维护，且[原作者的博客](https://godbmw.com/)已经不再使用此主题。  
但非常喜欢这个主题，所以把修改过的代码放出来。

# 效果

还是先看一下[效果](https://blog.lanthora.org/)吧，如果喜欢可以往下看


# 配置

**_不要照抄配置，一定要看完!!!_**

```yml
keywords: 

favicon: 
  icon: /images/favicon.ico
  touch_icon: /images/touch-icon.png

rss: atom.xml

toc: false

mathjax: true

copyright: 
  enable: false
  author:  
  license: 

header:
  author: lanthora

gitalk:
  enable: true
  owner: polygonatum
  repo: lanthora
  admin: ['lanthora']
  clientID: 326a600f11c887f1fb1d
  clientSecret: 2fc1a0f0494481c9ad81272a041e854d49470d09

nav_name: LANTHORA

nav: 
  -
    name: Archives
    path: "/archives/"
    blank: true
  -
    name: GitHub
    path: "https://github.com/lanthora"
    blank: true
  -
    name: Gmail
    path: "mailto:nierunjie@gmail.com"
    blank: true
```

# 修改评论系统

博客使用Gitalk评论系统，Gitalk默认使用`日期+标题`作为每篇文章的唯一id。由于长标题可能导致一些错误，所以把标题缩短成了一个字符串，这给字符串的含义就是创建文章的时间。

[这篇文章](https://blog.lanthora.org/20181229230044/)讲了如何把文章的链接变短，**_如果打算在本主题使用Gitalk评论系统，请一定完成上述操作_**。否则，会出现统一年的文章使用同一个评论的问题。

因为，被修改后的主题根据域名后的第一个字符串作为评论的id，对于上面那篇文章，标签为`20181229230044`，可以在[issue](https://github.com/polygonatum/lanthora/issues/16)中查看。

此外Gitalk在窄屏幕，比如手机，上显示效果不佳，所以在屏幕宽度过小时，不显示评论系统。并且修改Gitalk的配色，使其与主题的链接颜色一致。

为了保证主题轻巧，其他评论系统已经移除。

# 新增的变量

```yml
header:
  author: lanthora
```

原本每个网页的author是写死的，现在可以自定义。

# 隐藏博客标题

博客标题在页内跳转时会挡住跳转处的标题，开始阅读时，博客标题被移除，返回顶部时再次显示。

# 调整返回顶部位置按钮

调整返回顶部按钮位置，防止在移动端与下一篇文章的按钮太近引发的误触

# 修复的BUG
[小屏幕时，点击右上角的图标，第一次点击无反映](https://github.com/dongyuanxin/theme-bmw/issues/18)