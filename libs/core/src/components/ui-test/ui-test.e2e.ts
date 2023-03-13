import { newE2EPage } from '@stencil/core/testing';

describe('ui-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-test></ui-test>');
    const element = await page.find('ui-test');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-test></ui-test>');
    const component = await page.find('ui-test');
    const element = await page.find('ui-test >>> div');
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
