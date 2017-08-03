# collapse

> [Element](https://github.com/ElemeFE/element) Collapse clone, extract the core function and did a little change. If you have a better idea of this component improvement, please share it and I will update it immediately.

## Screenshots

![vue-multiple-collapse](screenshot/collapse.gif)

## Install

```bash
npm install vue-multiple-collapse -S
```

## Quick Start

```bash
import Vue from 'vue'
import {VmCollapse, VmCollapseItem } from 'vue-multiple-collapse'
Vue.component('vm-collapse', VmCollapse)
Vue.component('vm-collapse-item', VmCollapseItem)
```

OR

```bash
import Vue from 'vue'
import VmCollapse from 'vue-multiple-collapse'
Vue.use(VmCollapse)
```

For more information, please refer to [Collapse](https://vue-multiple.github.io/collapse) in our documentation.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run demo:dev

# build for demo with minification
npm run demo:build

# build for gh-pages with minification
npm run demo:prepublish

# build for production with minification
npm run build

# generate gh-pages
npm run deploy
```

## LICENSE

[MIT](http://opensource.org/licenses/MIT)
