import { createRouter, createWebHistory } from "vue-router"
import MainView from "@/views/MainView.vue"
import ShareView from "@/views/ShareView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/share",
      name: "share",
      component: ShareView,
    },
  ],
})

export default router
