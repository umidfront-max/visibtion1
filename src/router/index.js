import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: "/",
      name: "Home",
      component: () => import("@/pages/index.vue")
   },
   {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/login.vue")
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
