import { html } from 'lit-html';
import { UiButton } from '@sandbox/core/ui-button';

export default {
  title: 'UiButton',
  component: 'UiButton',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <ui-button
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></ui-button>
  `;
};

export const Default = {
  render: (args) => Template(args),
};
