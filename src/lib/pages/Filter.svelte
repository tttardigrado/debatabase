<script lang="ts">
    import        CheckBox     from "../components/CheckBox.svelte";
    import        FormGroup    from "../components/FormGroup.svelte";
    import type { DataFilter } from "../interfaces/filter";
    import      { Kinds      } from "../interfaces/resource";

    export let dataFilter: DataFilter
</script>

<FormGroup label="Língua">
    <CheckBox label="Português" bind:checked={dataFilter.lang.pt}/>
    <CheckBox label="Inglês"    bind:checked={dataFilter.lang.en}/>
</FormGroup>

<div class="divider"/>

<FormGroup label="Tipo de Recursos">
    <CheckBox label="{Kinds.Recorded}"  bind:checked={dataFilter.kind.recorded} />
    <CheckBox label="{Kinds.Written}"   bind:checked={dataFilter.kind.written}  />
    <CheckBox label="{Kinds.Casefiles}" bind:checked={dataFilter.kind.casefiles}/>
    <CheckBox label="{Kinds.Articles}"  bind:checked={dataFilter.kind.articles} />
    <CheckBox label="{Kinds.Websites}"  bind:checked={dataFilter.kind.websites} />
    <CheckBox label="{Kinds.Videos}"    bind:checked={dataFilter.kind.videos}   />
    <CheckBox label="{Kinds.Debates}"   bind:checked={dataFilter.kind.debates}  />
    <CheckBox label="{Kinds.Manuals}"   bind:checked={dataFilter.kind.manuals}  />
</FormGroup>