import { prettyDOM, render } from '@testing-library/svelte';
import { setImmediate } from 'timers';
import { expect, it } from 'vitest';

import { tick } from 'svelte';
import TabsTest from './TabsTest.svelte';

const flushMicrotasksQueue = () =>
  new Promise((resolve) => {
    setImmediate(() => {
      Promise.resolve().then(() => resolve(undefined));
    });
  });

it('renders tabs', async () => {
  const { baseElement, findAllByTestId } = render(TabsTest);

  await flushMicrotasksQueue();
  await tick();

  await expect(findAllByTestId('tab-button')).resolves.toHaveLength(3);

  console.log('baseElement', prettyDOM(baseElement));
});
