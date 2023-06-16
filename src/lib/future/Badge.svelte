<!-- Badge Component
    Shows an accent colored badge with a given label as it's text.
    If the label is the empty string "", the badge won't be displayed. -->

<script lang="ts">
    export let label: string = ""
</script>

{#if label}
    <span class="badge badge-accent badge-outline py-3 px-2 mr-2 mb-2 hover:bg-accent-focus/20">
        {label}
    </span>
{/if}