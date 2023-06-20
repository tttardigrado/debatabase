<script lang="ts">
    import TopInput                    from "../components/TopInput.svelte";
    import Card                        from "../components/Card.svelte";
    
    import type { Resource }           from "../interfaces/resource";
    import      { getSaved }          from "../db/getResources";
    import      { onDestroy, onMount } from "svelte";
    import      { SavedStore }         from "../db/savedStore";

    let title: string = "";
    let saved: SavedStore = new SavedStore;
    let resources: Resource[] = [];
    
    const search = () => resources = getSaved(saved.saved, title);

    onMount(search);
    onDestroy(() => saved.destruct());
</script>

<TopInput placeholder="Pesquisar..."
          bind:value={title}
          onClick={search}
/>

<main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-40 w-11/12 mx-auto">
    {#each resources as r}
        <Card resource={r} 
              saveFunc={() => saved.append(r.id)} 
              unsaveFunc={() => saved.delete(r.id)}
              isSaved={saved.isSaved(r.id)}
        />
    {/each}
</main>