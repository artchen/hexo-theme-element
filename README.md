# Hexo Theme Element

Element is another minimal theme for [Hexo](http://hexo.io).

## Dependencies

This theme depends on the following Hexo plugins:

* hexo-generator-tag
* hexo-generator-feed
* hexo-renderer-ejs
* hexo-renderer-less
* hexo-renderer-marked
* hexo-pagination
* hexo-all-minifier
* hexo-autoprefixer
* hexo-front-matter

For local search, you also need hexo-generator-json-content and add configuration to your global `_config.yml` if needed, refer to [hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content) github repository.

## Customization

Element is customizable via the `_config.yml` in the theme directory.

Element also depends on the global `_config.yml`. For example:

* Set `disqus_shortname` field to your disqus short name.
* Set `theme` field to `hexo-theme-element`.
* Set `title`, `url`, `author` and `description`.

In addition to these settings, you may also want to edit/replace the following files:

* Replace the author avatar: `source/img/avatar.png`.
* The font used on [Artifact.me](https://artifact.me) is Futura PT. I include it via Adobe Typekit. You need to use your own web font service, or go with the default Lato via Google Font. Details in `layout/_partial/head.ejs`.

This theme currently supports 4 search services:

* Google custom search
* Hexo Local search (hexo-json-content)
* Algolia search
* Microsoft Azure search

Setup guide for searching is availble here: [universal-search](https://github.com/artchen/universal-search).

## Demo

[Artifact.me](https://artifact.me)

## Copyright

Public resources used in this theme:

* [icomoon](https://icomoon.io/)
* [normalize.css](https://necolas.github.io/normalize.css/)
* [Google Fonts - Lato](https://fonts.google.com/specimen/Lato)

Copyright © Art Chen

Please do not remove the "Theme by Art Chen" text and links.

请不要删除页面底部的作者信息和链接。


## 更改||修正  （2018.03.06）

* 修复了几处bug。在全局`_config.yml`中，若需设置`root: /`为`root: /XXXXXX/`，现在可以正常显示了（`_sidebar.less`中背景图片的路径暂不清楚如何修正，需手动更改一下即可）。
* 已修正让`html`标签包裹`body`标签。
* 注释掉了`scripts.ejs`中的`Swiftype`，因其配置与作者网站(ttps://artifact.me)绑定了。

## 注意
> 要给文章显示目录索引，需在文章头部添加`toc: true`。
