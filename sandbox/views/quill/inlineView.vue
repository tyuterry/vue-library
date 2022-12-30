<script setup lang="ts">
import quilleditor from "../../../src/components/quill-editor.component.vue";
</script>

<template>
  <quilleditor
    :content="'Just type something here!'"
    mode="bubble"
  ></quilleditor>
  <router-link to="/">Back</router-link>
</template>

<style lang="scss" scoped></style>
