import numeral from 'numeral';
import 'numeral/locales';

/**
 * @param {import('vue').App} app
 * @param {string?} locale
 */
export default function install(app, { locale = 'en' } = {}) {
  numeral.locale(locale);

  // eslint-disable-next-line no-param-reassign
  app.config.globalProperties.numeralFormat = (value, format = '0,0') => numeral(value).format(format);
}
