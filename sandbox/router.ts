import { createRouter, createWebHistory } from "vue-router";
import homeView from "./views/homeView.vue";
import classicView from "./views/classicView.vue";
import inlineView from "./views/inlineView.vue";
import blockView from "./views/blockView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/classic",
      name: "classic",
      component: classicView,
    },
    {
      path: "/inline",
      name: "inline",
      component: inlineView,
    },
    {
      path: "/block",
      name: "block",
      component: blockView,
    },
  ],
});

export default router;
