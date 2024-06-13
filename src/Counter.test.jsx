import { h } from 'preact';
import { render } from '@testing-library/preact';
import { expect, it } from 'vitest';
import { Counter } from './Counter.jsx';

it('renders', () => {
  const { baseElement } = render(<Counter />);
  expect(baseElement.textContent).toBe('0');
});
