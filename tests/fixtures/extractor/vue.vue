<template>
  <!-- HTML comment trap: <div layout="trap-comment" space="p:trap"> -->
  <div layout="flex col" space="p:medium" visual="bg:white">
    <nav :layout="isOpen ? 'flex row' : 'grid'" :space="compact ? 'p:small' : 'p:big'"></nav>
    <aside v-bind:visual="dark ? 'bg:black text:white' : 'bg:white text:black'"></aside>
    <ul :layout="{ 'wrap center': isWrapped, between: spread }"></ul>
    <li :visual="['rounded:medium', active && 'bg:primary']"></li>
    <span :visual="'shadow:' + level"></span>
    <span :space="`m:small ${gutter} g-${size}`"></span>
    <button :visual="hasError ? &quot;bg:danger&quot; : 'bg:success'" @click="count > 0 && go()"></button>
    <p :title="'trap: ' + layout" data-layout="trap-data" v-layout="trap-directive">{{ message }}</p>
    <div :layout.camel="'relative'" interact="click:toggle" listens="menu:update"></div>
    <div :class="{ layout: true }" x-layout="trap-x">{{ layout ? 'trap' : 'trap' }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const layout = ref('trap-script');
const visual = "visual=bg:trap";
const isOpen = ref(false);
if (count < limit) setAttribute('layout', 'trap-set-attribute');
</script>

<style scoped>
[layout~="flex"] { display: flex; }
</style>
