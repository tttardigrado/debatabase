<script lang="ts">
    //import Badge from "./Badge.svelte";
    import type { Resource } from "../interfaces/resource"

    export let resource: Resource

    let isSaved = false

    // thumbnail for youtube content
    $: image = (resource.url.hostname === "www.youtube.com")
                ? `https://img.youtube.com/vi/${resource.url.searchParams.get("v")}/0.jpg`
                : (resource.url.hostname === "youtu.be")
                ? `https://img.youtube.com/vi${resource.url.pathname}/0.jpg`
                : ""

    const copy = () => {
        navigator.clipboard.writeText(resource.url.href)
    }

    const saveOrUnsave = () => {
        isSaved = !isSaved
    }
</script>

<div class="card card-compact mx-auto my-8 w-11/12 bg-base-100 shadow-xl">
    <figure><a href={resource.url.href} target="_blank">
        <img src={image} alt="">
    </a></figure>

    <a href={resource.url.href} target="_blank" class="card-body">
        <h2 class="card-title">{resource.title}</h2>
        {#if resource.author}
            <span>{resource.author}</span>
        {/if}
    <!--
      <div class="flex-wrap justify-start items-center">
        {#each [resource.kw1, resource.kw2, resource.kw3] as kw}
            <Badge label={kw}/>
        {/each}
      </div>
    -->
    </a>
    
    <div class="flex justify-between items-center w-11/12 mx-auto mb-3 card-actions">
        <span class="opacity-50">{resource.kind}</span>    
        <span class="text-xl">
            <i class="bi transition cursor-pointer hover:text-accent mr-3 bi-link-45deg"
                on:click={copy} on:keydown={copy}
            />
            <i class="bi transition cursor-pointer hover:text-accent bi-bookmark{isSaved ? "-fill" : ""}"
               on:click={saveOrUnsave} on:keydown={saveOrUnsave}
            />
        </span>
    </div>
</div>
