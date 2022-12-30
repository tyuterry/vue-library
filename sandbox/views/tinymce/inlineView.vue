<script setup lang="ts">
import tinymceeditor from "../../../src/components/tinymce-editor.component.vue";
</script>

<template>
  <tinymceeditor
    :content="'Just type something here!'"
    :inline="true"
  ></tinymceeditor>
  <tinymceeditor
    :content="'Just type something here!2'"
    :inline="true"
  ></tinymceeditor>
  <router-link to="/">Back</router-link>
</template>

<style lang="scss" scoped></style>
