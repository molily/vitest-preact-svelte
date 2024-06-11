import { render } from '@testing-library/preact';
import { expect, it } from 'vitest';
import { PreactTest } from './PreactTest.jsx';

it('renders', () => {
  const { getByRole } = render(<PreactTest />);
  const heading = getByRole('heading');
  expect(heading.textContent).toBe('Hello world from Preact');
});
