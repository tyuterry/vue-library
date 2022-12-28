<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";
import type { RawEditorOptions } from "tinymce";
import { onMounted, ref, type Ref } from "vue";

let editorContent = "333";
let loadTinyMce: Ref<number> = ref(0);
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  inline: {
    type: Boolean,
    default: false,
  },
  toolbar: {
    type: String,
    default:
      "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample ",
  },
  menubar: {
    type: String,
    default: "file edit view insert format tools table help",
  },
  resize: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  editorContent = props.content;
  loadTinyMce.value += 1;
});

let initConfig: RawEditorOptions = {
  selector: "div",
  minheight: "400px",
  resize: props.resize,
  language: "zh-Hant",
  language_url: "/tinymce/zh-Hant.js",
  promotion: false,
  suffix: ".min",
  plugins:
    "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
  menubar: props.menubar,
  toolbar: props.toolbar,
  toolbar_sticky: true,
  toolbar_mode: "sliding", // 'floating' | 'sliding' | 'scrolling' | 'wrap'
};
</script>

<template>
  <Editor
    :key="loadTinyMce"
    style="height: 100%"
    api-key="no-api-key"
    :disabled="false"
    :init="initConfig"
    :inline="inline"
    v-model="editorContent"
    tagName="div"
  />
</template>

<style lang="scss" scoped></style>
