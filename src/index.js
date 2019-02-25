import numeral from 'numeral';
import 'numeral/locales';

/**
 * @param {VueConstructor} Vue
 * @param {string?} locale
 */
export default function install(Vue, { locale } = { locale: null }) {
  numeral.locale(locale || 'fr');

  Vue.filter('numeralFormat', (value, format = '0,0') => numeral(value).format(format));
}

if (typeof window !== 'undefined' && window.Vue) {
  // eslint-disable-next-line no-undef
  Vue.use(install);
}
