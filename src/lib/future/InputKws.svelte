<script lang="ts">
    import Badge from "../future/Chip.svelte";

    export let kws: string[] = [];

    let textKW: string = "";

    function addKW(e: KeyboardEvent) {
        // Only add if the enter key was pressed
        if (e.keyCode != 13) {return}

        // Do nothing if the string is empty or already in the kws list
        let txt: string = textKW.trim().toLowerCase();
        if(txt == "" || kws.includes(txt)) {return}
    
        // Update the kws list and clear the text input
        kws.push(txt);
        kws = kws; // re-render
        textKW = "";
    }

    function remKW(i: number) {
        // Remove the i-th keyword from the kws list
        kws.splice(i, 1);
        kws = kws; // re-render
    }
</script>

<input type="text"
    placeholder="Adicionar Palavras Chave..."
    class="input transition focus:shadow-xl focus:outline-none w-full my-3"
    on:keypress={addKW}
    bind:value={textKW}
/>

<div class="flex-wrap justify-start items-center">
    {#each kws as kw, i}
        <Badge label={kw} onClick={() => remKW(i)}/>
    {/each}
</div>