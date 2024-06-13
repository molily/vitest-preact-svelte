import { h, render } from 'preact';
import { PreactTest } from './PreactTest.jsx';
import SvelteTest from './SvelteTest.svelte';
import TabsTest from './TabsTest.svelte';

render(<PreactTest />, document.getElementById('root-preact'));

new SvelteTest({
  target: document.getElementById('root-svelte')
});

new TabsTest({
  target: document.getElementById('root-svelte-tabs')
});