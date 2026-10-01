<script>
  export let open = false;
  let layout = 'trap-script';
  const visual = "visual=bg:trap";
  $: space = open ? 'trap-reactive' : 'trap-reactive-2';
</script>

<!-- <div layout="trap-comment"> -->
<div layout="flex col" space="p:medium" visual="bg:white">
  <nav layout={open ? 'flex row' : 'grid'} space={open ? 'p:big' : 'p:small'} />
  <aside visual="rounded:medium {open ? 'shadow:big' : 'shadow:small'} bg:light" />
  <span visual="static {expr} more" />
  <span space="bg-{color} g:small" />
  <span layout="{cls}-wrap center" />
  <button visual={`bg:primary ${open ? 'text:white' : 'text:black'} ring-${tone}`} on:click={() => open = !open} />
  <div layout={layout} {visual} {...rest} data-layout="trap-data" bind:this={el} />
  {#if open}
    <section layout="between" visual="bg:success">{space}</section>
  {:else}
    <section layout="around" />
  {/if}
  {#each items as item (item.id)}
    <p visual="text:muted">{item.name} space = big</p>
  {/each}
</div>

<style>
  [layout="flex"] { gap: 1rem; }
</style>
