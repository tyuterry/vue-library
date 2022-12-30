<script setup lang="ts">
import quilleditor from "../../../src/components/quill-editor.component.vue";
</script>

<template>
  <quilleditor :content="'123'" mode="bubble"></quilleditor>
  <router-link to="/">Back</router-link>
</template>

<style lang="scss" scoped></style>
