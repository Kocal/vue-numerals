'use strict';

import numeral from 'numeral';
import 'numeral/locales';

/**
 * @param {VueConstructor} Vue
 * @param {string?} locale
 */
function install(Vue, { locale } = {}) {
  locale = (locale || navigator.language || navigator.languages[0] || 'fr').toLowerCase().substr(0, 2);

  numeral.locale(locale);

  Vue.filter('numeralFormat', (value, format = '0,0') => numeral(value).format(format));
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install);
}

module.exports = install;
