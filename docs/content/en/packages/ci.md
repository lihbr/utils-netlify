---
title: "ci"
menuTitle: "ci"
subtitle: ""
badge: ""
description: "lihbr utils for Netlify"
position: 210
category: "Packages"
version: 0.2
fullscreen: false
features:
  - "Check if build process is ran within Netlify"
  - "Check if it's a deployment for production or something else (preview, staging, etc.)"
  - "Get the final deploy URL, even for branch subdomains"
---

`@lihbr/utils-netlify.ci` provides utils for [Netlify Build process](https://docs.netlify.com/configure-builds/get-started).

## Features

<list :items="features"></list>

## Installation

<alert type="info">

Make sure you checked [prerequisites](/prerequisites) before proceeding to installation~

</alert>

Add `@lihbr/utils-netlify.ci` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @lihbr/utils-netlify.ci
```

  </code-block>
  <code-block label="npm">

```bash
npm install @lihbr/utils-netlify.ci
```

  </code-block>
</code-group>

That's it!

## Usage

Just import the module inside your build script:

<!-- prettier-ignore-start -->
```javascript
const ci = require("@lihbr/utils-netlify.ci");
```
<!-- prettier-ignore-end -->

## Reference

### Methods

#### isNetlify()

Returns true if on Netlify by checking the [NETLIFY](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata) environment-variables.

<!-- prettier-ignore-start -->
```javascript
if (ci.isNetlify()) {
  // Perform Netlify only actions...
} 
```
<!-- prettier-ignore-end -->

#### isProduction()

Returns true if on a production build by checking the [CONTEXT](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata) environment-variables.

<!-- prettier-ignore-start -->
```javascript
if (ci.isProduction()) {
  // Perform production only actions...
} 
```
<!-- prettier-ignore-end -->

#### getFinalDeployUrl({ branchDomains })

**branchDomains**

- An array of branches having a branch domain
- Type: `Array`
- Default: `[]`

Returns the final deploy URL, taking branch subdomains into account.

<!-- prettier-ignore-start -->
```javascript
const APP_URL = ci.getFinalDeployUrl({ branchDomains: ["staging"] });
/**
 * For master branch deploy:
 * https://example.com
 * 
 * For staging branch deploy:
 * https://staging.example.com
 * 
 * For feature-branch deploy:
 * https://feature-branch--example.netlify.app
 * 
 * For a deploy preview:
 * https://5b243e66dd6a547b4fee73ae--example.netlify.app
 */
```
<!-- prettier-ignore-end -->

## Example

You can check out a full example usage of these utils across this [Nuxt.js](https://nuxtjs.org) configuration file: [nuxt.config.js](https://github.com/lihbr/lihbr-apex/blob/master/packages/core/nuxt.config.js), search for `ci.`
