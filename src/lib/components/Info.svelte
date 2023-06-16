<script lang="ts">
    export let icon: string = "";
    export let title: string = "";
    export let desc: string = "";
</script>

<div class="mb-20">
    <i class="bi bi-{icon} text-accent text-8xl"></i>
    <div class="my-3 text-2xl font-bold">{title}</div>
    <p>{desc}</p>
</div>