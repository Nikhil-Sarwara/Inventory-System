import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import Auth from "../components/AuthPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/auth", component: Auth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
