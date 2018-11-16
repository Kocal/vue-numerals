import numeral from 'numeral';
import 'numeral/locales';

/**
 * @param {VueConstructor} Vue
 * @param {string?} locale
 */
function install(Vue, { locale } = { locale: null }) {
  let numeralLocale = locale || 'fr';

  // will transform `fr-fr` to `fr`
  if (numeralLocale.includes('-')) {
    const [main, minor] = numeralLocale.split('-');
    if (main === minor) {
      numeralLocale = main;
    }
  }

  numeral.locale(numeralLocale);

  Vue.filter('numeralFormat', (value, format = '0,0') => numeral(value).format(format));
}

if (typeof window !== 'undefined' && window.Vue) {
  // eslint-disable-next-line no-undef
  Vue.use(install);
}

module.exports = install;
