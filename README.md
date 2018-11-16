# vue-numerals

[![Build Status](https://travis-ci.com/Kocal/vue-numerals.svg?token=pNBs2oaRpfxdyhqWf28h&branch=master)](https://travis-ci.com/Kocal/vue-numerals)

> Use the power of [Numerals.js](http://numeraljs.com) to properly format numbers inside your Vue components!

# Requirements

- Vue 2
- Node.js 8+

# Installation

## In the browser

```html
<script src="https://unpkg.com/vue-numerals/dist/vue-numerals.min.js" />
```

## With Node.js

```bash
$ yarn add vue-numerals
```

```javascript
import Vue from 'vue';
import VueNumerals from 'vue-numerals';

Vue.use(VueNumerals);

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
    <!-- With french locale, it will display: `12 345` -->
    <p>{{ count | numeralFormat }}</p>
    
    <!-- With french locale, it will display: `12 345 €` --> 
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
