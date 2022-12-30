<script setup lang="ts">
import Quill from "quill";
import { onMounted } from "vue";

let editorContent = "";

let editor!: Quill;
// let loadQuill: Ref<number> = ref(0);

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  mode: {
    type: String,
    default: "snow",
  },
});

onMounted(() => {
  editorContent = props.content;

  editor = new Quill("#editor", options);
  editor.setText(editorContent);
});

var toobarop = [
  [{ font: [] }, { size: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "super" }, { script: "sub" }],
  [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["direction", { align: [] }],
  ["link", "image", "video", "formula"],
  ["clean"],
];

var options = {
  debug: "info",
  modules: {
    toolbar: toobarop,
  },
  placeholder: "Compose an epic...",
  theme: props.mode,
};
</script>

<template>
  <div id="editor"></div>
</template>

<style lang="scss" scoped></style>
