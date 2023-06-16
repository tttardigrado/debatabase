<script lang="ts">
    import { Pages, pages } from "../interfaces/nav";

    export let active: Pages = pages[0]
</script>

<div class="btm-nav">
    {#each pages as page}
      <button class="transition duration-500" 
              class:active={page == active} 
              class:text-accent={page == active}
              on:click={() => active = page}
      >
        <i class="bi bi-{page}"/>
      </button>  
    {/each}
</div>