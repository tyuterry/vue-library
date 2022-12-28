<script setup lang="ts">
import tinymceeditor from "../../src/components/tinymce-editor.component.vue";
</script>

<template>
  <tinymceeditor
    :content="'12314'"
    :inline="true"
    menubar="'false'"
    toolbar="'false'"
  ></tinymceeditor>
</template>

<style lang="scss" scoped></style>
