---
title: "Introduction"
menuTitle: "Introduction"
subtitle: ""
badge: ""
description: "lihbr utils for Netlify"
position: 110
category: "Getting Started"
version: 0.1
fullscreen: false
---

<img src="/preview.png" class="light-img" width="1280" height="640" alt="lihbr/utils-netlify logo" />
<img src="/preview-dark.png" class="dark-img" width="1280" height="640" alt="lihbr/utils-netlify logo" />

`@lihbr/utils-netlify.*` are helpers I use across my [Netlify](https://netlify.com) projects. To achieve that purpose they are designed to be as agnostic as possible, although being quite opinionated.

## Packages

<alert type="warning">

Those packages just got migrated to actual packages and are still pre-major version (`v1.x.x`). I'll most likely refactor them before releasing a first major and allow myself to publish breaking changes while doing so, therefore if you want to use them as is I highly recommend watching out when upgrading their versions.

Also feel free to inspire from them, [submit feedback or questions](https://github.com/lihbr/utils-netlify/issues/new), or fork this repository~

</alert>

### Packages

#### [ci](/packages/ci)

Provides utils for [Netlify Build process](https://docs.netlify.com/configure-builds/get-started).

#### [lambda](/packages/lambda)

Provides utils for [Netlify Functions](https://docs.netlify.com/functions/overview).
