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
      path: "/report",
      name: "report",
      component: () => import("@/pages/report.vue")
   },
   {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/pages/dashboard.vue")
   },
   {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/pages/checkout.vue")
   },
   {
      path: "/help",
      name: "help",
      component: () => import("@/pages/help.vue")
   },
   {
      path: "/select-plan",
      name: "select-plan",
      component: () => import("@/pages/selectPlan.vue")
   },
   {
      path: "/signup-next-step",
      name: "signup-next-step",
      component: () => import("@/pages/signupNextStep.vue")
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
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition;
      } else if (to.hash) {
         return {
            el: to.hash,
            behavior: "smooth", // smooth scroll
         };
      } else {
         return { top: 0 };
      }
   },
});

export default router;
