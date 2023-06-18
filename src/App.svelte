<script lang="ts">
    import Search              from "./lib/pages/Search.svelte";
    import Nav                 from "./lib/components/Nav.svelte";
    import Saved               from "./lib/pages/Saved.svelte";
    import Home                from "./lib/pages/Home.svelte";

    import { Pages, pages }    from "./lib/interfaces/nav"
    import type { DataFilter } from "./lib/interfaces/filter";
    

    let active: Pages = pages[0];
    
    let dataFilter: DataFilter = {
        title: "",
        lang: {
            pt: true,
            en: true,
        },
        kind: {
            recorded: true,
            written: true,
            casefiles: true,
            articles: true,
            websites: true,
            videos: true,
            debates: true,
            manuals: true
        },
    }
</script>



{#if active == Pages.Search}
    <Search bind:dataFilter={dataFilter}/>
{:else if active == Pages.Saved}
    <Saved/>
{:else if active == Pages.Home}
    <Home/>
{/if}

<Nav bind:active={active}/>
