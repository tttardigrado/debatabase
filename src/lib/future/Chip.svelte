<script lang="ts">
    export let label: string = ""
    export let onClick: () => void  = () => {}
</script>

<span on:click={onClick} class="badge badge-accent badge-outline gap-2 py-3 px-2 mt-2 mr-2 hover:bg-accent-focus/20">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    {label}
</span>