<script lang="ts">
    import { onMount }     from 'svelte';
    import { themeChange } from 'theme-change';

    onMount(() => themeChange(false));

</script>

<div class="absolute top-5 right-5 flex items-center border-accent">
    <i class="bi bi-moon-fill text-xl"/>
    <input type="checkbox"
           data-toggle-theme="light,dark"
           data-act-class="ACTIVECLASS"
           class="toggle mx-3"
    >
    <i class="bi bi-brightness-high-fill text-2xl"/>
</div>
