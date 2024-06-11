import { render } from '@testing-library/svelte';
import { expect, it } from 'vitest';
import SvelteTest from './SvelteTest.svelte';

it('renders', () => {
  const { baseElement } = render(SvelteTest);
  expect(baseElement.textContent).toBe('Hello world from Svelte');
});
