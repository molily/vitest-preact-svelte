<script>
  import { setContext } from 'svelte';
  import { tabContextKey } from './tabContextKey.js';

  console.log('Tabs init');

  /** @type {string[]} */
  let tabs = [];

  const tabContext = {
    /**
     * @param {string} tab
     */
    addTab: (tab) => {
      console.log('addTab', tab);
      tabs = [...tabs, tab];
    },
  };

  setContext(tabContextKey, tabContext);
</script>

<div class="tabs">
  {#each tabs as tab}
    <button class="tab-button" data-testid="tab-button">{tab}</button>
  {/each}

  <slot />
</div>
