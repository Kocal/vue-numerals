import Vue from 'vue';
import { createLocalVue, mount } from '@vue/test-utils';
import VueNumerals from '..';

Vue.config.productionTip = false;

describe('filter', () => {
  let localVue;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
  });

  test('format with default locale and default format', () => {
    localVue.use(VueNumerals);

    wrapper = mount({
      template: '<p>{{ 12345 | numeralFormat }}</p>',
    }, { localVue });

    expect(wrapper.html()).toBe('<p>12,345</p>');
  });

  test('format with default locale and custom format', () => {
    localVue.use(VueNumerals);

    wrapper = mount({
      template: '<p>{{ 12345 | numeralFormat("0o") }}</p>',
    }, { localVue });

    expect(wrapper.html()).toBe('<p>12345th</p>');
  });

  test('format with custom locale and default format', () => {
    localVue.use(VueNumerals, {
      locale: 'en',
    });

    wrapper = mount({
      template: '<p>{{ 12345 | numeralFormat }}</p>',
    }, { localVue });

    expect(wrapper.html()).toBe('<p>12,345</p>');
  });

  test('format with custom locale and custom format', () => {
    localVue.use(VueNumerals, {
      locale: 'fr',
    });

    wrapper = mount({
      template: '<p>{{ 12345 | numeralFormat("0,0[.]00 $") }}</p>',
    }, { localVue });

    expect(wrapper.html()).toBe('<p>12 345 €</p>');
  });
});
