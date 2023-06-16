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
          onClick={search} />

<div class="mb-40">
    {#each resources as r}
        <Card resource={r}/>
    {/each}
</div>

<Modal icon="funnel-fill" id="filter-modal" onClose={search}>
  <Filter bind:dataFilter={dataFilter}/>
</Modal>