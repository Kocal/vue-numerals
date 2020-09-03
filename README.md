# vue-numerals

[![](https://img.shields.io/npm/v/vue-numerals.svg)](https://www.npmjs.com/package/vue-numerals)
![Node CI](https://github.com/Kocal/vue-numerals/workflows/Node%20CI/badge.svg)
![Release](https://github.com/Kocal/vue-numerals/workflows/Release/badge.svg)

> Use the power of [Numerals.js](http://numeraljs.com) to properly format numbers inside your Vue components!

# Requirements

- Vue 3 (for Vue 2, see https://github.com/Kocal/vue-numerals/tree/v3)
- Node.js 10+

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
import { createApp } from 'vue';
import VueNumerals from 'vue-numerals';
import App from './App.vue'

const app = createApp(App);

app.use(VueNumerals); // default locale is 'en'

// with options
app.use(VueNumerals, {
  locale: 'fr'
});

app.mount('#app');
```

# Usage

Inside your component:

```vue
<template>
  <div>
    <!-- Will display: `12,345` -->
    <p>{{ numeralFormat(count) }}</p>
    
    <!-- Will display: `12,345 $` --> 
    <p>{{ numeralFormat(count, '0,0[.]00 $') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 12345,
    };
  },
}
</script>
```

# License

MIT
