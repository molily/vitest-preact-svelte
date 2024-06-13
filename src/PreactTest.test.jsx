import { render } from '@testing-library/preact';
import { expect, it } from 'vitest';
import { PreactTest } from './PreactTest.jsx';

it('renders', () => {
  const { baseElement } = render(<PreactTest />);
  expect(baseElement.textContent).toBe('Hello world from Preact');
});
