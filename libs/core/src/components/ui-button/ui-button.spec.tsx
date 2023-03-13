import { newSpecPage } from '@stencil/core/testing';
import { UiButton } from './ui-button';

describe('ui-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [UiButton],
      html: '<ui-button></ui-button>',
    });
    expect(root).toEqualHtml(`
      <ui-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [UiButton],
      html: `<ui-button first="Stencil" last="'Don't call me a framework' JS"></ui-button>`,
    });
    expect(root).toEqualHtml(`
      <ui-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-button>
    `);
  });
});
