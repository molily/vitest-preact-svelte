<script>
  import { getContext, onMount } from 'svelte';
  import { tabContextKey } from './tabContextKey.js';

  /** @type {string} */
  export let label;

  /** @type {{ addTab: (tab: string) => void }} */
  const tabContext = getContext(tabContextKey);

  if (tabContext === undefined) {
    throw new Error('Tab context missing');
  }

  console.log('Tab init');

  onMount(() => {
    console.log('Tab onMount');
    tabContext.addTab(label);
  });
</script>

<div class="tab-content">
  <slot />
</div>
