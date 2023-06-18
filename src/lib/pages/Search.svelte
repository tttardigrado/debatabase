<script lang="ts">
    import Filter                from "./Filter.svelte";
    import Modal                 from "../components/Modal.svelte";
    import TopInput              from "../components/TopInput.svelte";
    import Card                  from "../components/Card.svelte";
    
    import type { Resource }     from "../interfaces/resource";
    import type { DataFilter }   from "../interfaces/filter";
    import      { getResources } from "../db/getResources";
    import      { onMount }      from "svelte";

    export let dataFilter: DataFilter;
    
    let resources: Resource[] = [];
    
    const search = () => resources = getResources(dataFilter)

    onMount(search)
</script>

<TopInput placeholder="Pesquisar..."
          bind:value={dataFilter.title}
          onClick={search}
/>

<main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-40 w-11/12 mx-auto">
    {#each resources as r}
        <Card resource={r}/>
    {/each}
</main>

<Modal icon="funnel-fill" id="filter-modal" onClose={search}>
    <Filter bind:dataFilter={dataFilter}/>
</Modal>
