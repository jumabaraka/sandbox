import { newE2EPage } from '@stencil/core/testing';

describe('ui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-button></ui-button>');
    const element = await page.find('ui-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-button></ui-button>');
    const component = await page.find('ui-button');
    const element = await page.find('ui-button >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
