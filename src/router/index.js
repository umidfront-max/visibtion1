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
   {
      path: "/forgot",
      name: "forgot",
      component: () => import("@/pages/forgot.vue")
   },
   {
      path: "/terms",
      name: "terms",
      component: () => import("@/pages/terms.vue")
   },
   {
      path: "/privacy-policy",
      name: "privacyPolicy",
      component: () => import("@/pages/privacyPolicy.vue")
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
