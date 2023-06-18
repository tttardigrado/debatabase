<script lang="ts">
    import TopInput          from "../components/TopInput.svelte";
    import Card              from "../components/Card.svelte";
    
    import type { Resource } from "../interfaces/resource";
    import      { getSaved } from "../db/getResources";
    import      { onMount }  from "svelte";
    
    let title: string = "";

    let resources: Resource[] = [];

    const search = () => resources = getSaved([], title);

    onMount(search);
</script>

<TopInput placeholder="Pesquisar..."
    bind:value={title}
    onClick={()=>1}
/>

<main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-40 w-11/12 mx-auto">
    {#each resources as r}
        <Card resource={r}/>
    {/each}
</main>