# Hexo Theme Element

Element is another minimal theme for [Hexo](http://hexo.io).

## Dependencies

This theme depends on the following Hexo plugins:

* hexo-generator-tag
* hexo-generator-feed
* hexo-renderer-ejs
* hexo-renderer-scss
* hexo-renderer-marked
* hexo-pagination
* hexo-all-minifier
* hexo-autoprefixer
* hexo-front-matter

## Customization

First of all change the site logo in `header.ejs`.

Element is customizable via the `_config.yml` in the theme directory.

Element also depends on the global `_config.yml`. For example:

* Set `disqus_shortname` field to your disqus short name.
* Set `theme` field to `hexo-theme-element`.
* Set `title`, `url`, `author` and `description`.

In addition to these settings, you may also want to edit/replace the following files:

* Replace the author avatar: `source/img/avatar.png`.

This theme currently supports 3 search services:

* Google custom search (does not require plugin)
* Algolia search (requires plugin https://github.com/LouisBarranqueiro/hexo-algoliasearch)
* Microsoft Azure search (requires plugin https://github.com/artchen/hexo-azuresearch)

Find search configuration in theme's `_config.yaml`:

```yaml
search: 
  enable: true
  service: azure # google/algolia/azure
  # google 
  google_api_key: 
  google_engine_id: 
  # algolia
  algolia_app_id: 
  algolia_api_key: 
  algolia_index_name:
  # azure
  azure_service_name: 
  azure_index_name: 
  azure_query_key: 
```

## Demo

[Artifact.me](https://artifact.me)

## Copyright

Public resources used in this theme:

* [icomoon](https://icomoon.io/)
* [normalize.css](https://necolas.github.io/normalize.css/)
* [Google Fonts - Oswald](https://fonts.google.com/specimen/Oswald)
* [Google Fonts - Inconsolata](https://fonts.google.com/specimen/Inconsolata)
* [Google Fonts - Crimson Text](https://fonts.google.com/specimen/Crimson+Text)

Copyright © Art Chen

Please do not remove the "Theme by Art Chen" text and links.

请不要删除页面底部的作者信息和链接。
