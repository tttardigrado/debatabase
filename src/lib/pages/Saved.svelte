<script lang="ts">
    import TopInput              from "../components/TopInput.svelte";
    import Card                  from "../components/Card.svelte";
    
    import      { getSaved }     from "../db/getResources";
    import      { onMount }      from "svelte";
    import type { Resource }     from "../interfaces/resource";
    
    let title: string = "";

    let resources: Resource[] = [];
    
    const search = () => resources = getSaved(title);

    onMount(search);
</script>

<TopInput placeholder="Pesquisar..."
          bind:value={title}
          onClick={search}
/>

<div class="mb-40">
    {#each resources as r}
        <Card resource={r}/>
    {/each}
</div>