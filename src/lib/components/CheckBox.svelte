<!-- Checkbox component
    Renders a toggle checkbox with an associated label.
    When the checkbox is checked it will be rendered with accent color
    When the checkbox is not checked it will be renderes with a grey tone and lower opacity -->

<script lang="ts">
    export let label: string = "Label"
    export let checked: boolean = true
</script>

<label class="cursor-pointer label">
    <span class="label-text transition" class:off={!checked}>{label}</span>
    <input type="checkbox" bind:checked={checked} class="toggle toggle-accent" />
</label>

<style>
    .off { opacity: 0.35; }
</style>