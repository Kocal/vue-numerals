'use strict';

function install(Vue) {
  console.log(Vue);
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install);
}

module.exports = install;
