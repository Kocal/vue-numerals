'use strict';

const numeral = require('numeral');
const locales = require('numeral/locales');

/**
 * @param {VueConstructor} Vue
 * @param {Object}  config
 * @param {string?} config.locale
 */
function install(Vue, config) {
  config = config || {};
  const locale = config.locale || (navigator.language || navigator.languages[0] || 'fr').toLowerCase().substr(0, 2);

  numeral.locale(locale);

  Vue.filter('numeralFormat', function (value, format = '0,0') {
    return numeral(value).format(format);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install);
}

module.exports = install;
