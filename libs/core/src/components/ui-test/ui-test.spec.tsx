import { newSpecPage } from '@stencil/core/testing';
import { UiTest } from './ui-test';

describe('ui-test', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [UiTest],
      html: '<ui-test></ui-test>',
    });
    expect(root).toEqualHtml(`
      <ui-test>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-test>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [UiTest],
      html: `<ui-test first="Stencil" last="'Don't call me a framework' JS"></ui-test>`,
    });
    expect(root).toEqualHtml(`
      <ui-test first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-test>
    `);
  });
});
