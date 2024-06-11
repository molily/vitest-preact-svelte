import { h, render } from 'preact';
import { PreactTest } from './PreactTest.jsx';
import SvelteTest from './SvelteTest.svelte';

render(<PreactTest />, document.getElementById('root-preact'));

new SvelteTest({
  target: document.getElementById('root-svelte')
});