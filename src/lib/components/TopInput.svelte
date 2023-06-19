<script lang="ts">
    export let placeholder: string = ""
    export let value: string = ""
    export let onClick: () => void

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode != 13) {return}
        onClick();
    }
</script>

<div class="form-control block top mx-auto my-5">
    <div class="input-group">
        <input type="text" 
            placeholder={placeholder}
            bind:value={value}
            on:keydown={onKeyDown}
            class="input input-bordered input-accent block w-full mx-auto"
        />
        <button class="btn btn-square" on:click={onClick}>
            <i class="bi bi-search"/>
        </button>
    </div>
</div>

<style>
    .top {
        width: 90%;
        max-width: 87.5rem;
    }
</style>