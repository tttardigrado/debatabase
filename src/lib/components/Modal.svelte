<script lang="ts">
    export let icon: string;
    export let id: string;
    export let onClose: () => void;
</script>

{#if icon}
    <label for={id} class="btn btn-accent fixed bottom-20 right-4">
        <i class="bi bi-{icon}"/>
    </label>
{/if}
  
<input type="checkbox" id={id} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <slot/>
        <div class="modal-action">
            <label for={id} class="btn" on:click={onClose} on:keydown={onClose}>
                <i class="bi bi-x-lg"/>
            </label>
        </div>
    </div>
</div>