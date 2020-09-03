import { mount } from '@vue/test-utils';
import VueNumerals from '../src';

describe('filter', () => {
  test('format with default locale (en) and default format', () => {
    const wrapper = mount(
      { template: '<p>{{ numeralFormat(12345) }}</p>' },
      {
        global: {
          plugins: [VueNumerals]
        }
      }
    );

    expect(wrapper.html()).toBe('<p>12,345</p>');
  });

  test('format with default locale (en) and custom format', () => {
    const wrapper = mount(
      { template: '<p>{{ numeralFormat(12345, "0o") }}</p>' },
      {
        global: {
          plugins: [VueNumerals]
        }
      }
    );

    expect(wrapper.html()).toBe('<p>12345th</p>');
  });

  test('format with custom locale (fr) and default format', () => {
    const wrapper = mount(
      { template: '<p>{{ numeralFormat(12345) }}</p>' },
      {
        global: {
          plugins: [[VueNumerals, { locale: 'fr' }]]
        }
      }
    );

    expect(wrapper.html()).toBe('<p>12 345</p>');
  });

  test('format with default locale (fr) and custom format', () => {
    const wrapper = mount(
      { template: '<p>{{ numeralFormat(12345, "0o") }}</p>' },
      {
        global: {
          plugins: [[VueNumerals, { locale: 'fr' }]]
        }
      }
    );

    expect(wrapper.html()).toBe('<p>12345e</p>');
  });

  test('format with custom locale (ru) and custom format', () => {
    const wrapper = mount(
      { template: '<p>{{ numeralFormat(12345, "0,0[.]00 $") }}</p>' },
      {
        global: {
          plugins: [[VueNumerals, { locale: 'ru' }]]
        }
      }
    );

    expect(wrapper.html()).toBe('<p>12 345 руб.</p>');
  });
});
