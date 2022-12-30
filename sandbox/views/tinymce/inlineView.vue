<script setup lang="ts">
import tinymceeditor from "../../../src/components/tinymce-editor.component.vue";
</script>

<template>
  <tinymceeditor :content="'Test1'" :inline="true"></tinymceeditor>
  <tinymceeditor :content="'Test2'" :inline="true"></tinymceeditor>
  <router-link to="/">Back</router-link>
</template>

<style lang="scss" scoped></style>
