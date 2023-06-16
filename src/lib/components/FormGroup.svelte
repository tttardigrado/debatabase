<script lang="ts">
    export let label: string = "Label"
</script>

<div class="form-control">
    <label class="label">{label}</label>
    <hr/>
    <slot/>
</div>

<style>
    hr { opacity: 0.05; }
</style>