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
   {
      path: "/signup",
      name: "signup",
      component: () => import("@/pages/signUp.vue")
   },
   {
      path: "/verify",
      name: "verify",
      component: () => import("@/pages/verify.vue")
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
