# vue-numerals

[![](https://img.shields.io/npm/v/vue-numerals.svg)](https://www.npmjs.com/package/vue-numerals)
[![Build Status](https://travis-ci.com/Kocal/vue-numerals.svg?token=pNBs2oaRpfxdyhqWf28h&branch=master)](https://travis-ci.com/Kocal/vue-numerals)

> Use the power of [Numerals.js](http://numeraljs.com) to properly format numbers inside your Vue components!

# Requirements

- Vue 2
- Node.js 8+

# Installation

## In the browser

```html
<!-- Import Numeral.js (http://numeraljs.com/#use-it) -->
<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.0/numeral.min.js"></script>
<!-- Then import vue-numerals -->
<script src="https://unpkg.com/vue-numerals/dist/vue-numerals.min.js"></script>
```

## With Node.js

```bash
$ yarn add vue-numerals 'numeral@>=2'
```

```javascript
import Vue from 'vue';
import VueNumerals from 'vue-numerals';

Vue.use(VueNumerals); // default locale is 'en'

// with options
Vue.use(VueNumerals, {
  locale: 'fr'
});

```

# Usage

Inside your component:

```vue
<template>
  <div>
    <!-- Will display: `12,345` -->
    <p>{{ count | numeralFormat }}</p>
    
    <!-- Will display: `12,345 $` --> 
    <p>{{ count | numeralFormat('0,0[.]00 $') }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({ count: 12345 }),
}
</script>
```

# License

MIT
