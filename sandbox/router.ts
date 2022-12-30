import { createRouter, createWebHistory } from "vue-router";
import homeView from "./views/homeView.vue";
import tinymceClassicView from "./views/tinymce/classicView.vue";
import tinymceInlineView from "./views/tinymce/inlineView.vue";
import tinymceBlockView from "./views/tinymce/blockView.vue";

import quillClassicView from "./views/quill/classicView.vue";
import quillInlineView from "./views/quill/inlineView.vue";
import quillBlockView from "./views/quill/blockView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/tinymce-classic",
      name: "tinymceclassic",
      component: tinymceClassicView,
    },
    {
      path: "/tinymce-inline",
      name: "tinymceinline",
      component: tinymceInlineView,
    },
    {
      path: "/tinymce-block",
      name: "tinymceblock",
      component: tinymceBlockView,
    },
    {
      path: "/quill-classic",
      name: "quillclassic",
      component: quillClassicView,
    },
    {
      path: "/quill-inline",
      name: "quillinline",
      component: quillInlineView,
    },
    {
      path: "/quill-block",
      name: "quillblock",
      component: quillBlockView,
    },
  ],
});

export default router;
