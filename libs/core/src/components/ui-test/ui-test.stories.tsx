import { html } from 'lit-html';
import { UiTest } from '@sandbox/core/ui-test';

export default {
  title: 'UiTest',
  component: 'UiTest',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <ui-test {...args}></ui-test>
  `;
};

export const Default = {
  render: (args) => Template(args),
};
