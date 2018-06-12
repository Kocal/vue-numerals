import numeral from 'numeral';
import 'numeral/locales';

/**
 * @param {VueConstructor} Vue
 * @param {string?} locale
 */
function install(Vue, { locale }) {
  const numeralLocale = (locale || navigator.language || navigator.languages[0] || 'fr').toLowerCase().substr(0, 2);

  numeral.locale(numeralLocale);

  Vue.filter('numeralFormat', (value, format = '0,0') => numeral(value).format(format));
}

if (typeof window !== 'undefined' && window.Vue) {
  // eslint-disable-next-line no-undef
  Vue.use(install);
}

module.exports = install;
