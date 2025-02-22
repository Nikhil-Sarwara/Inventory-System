import { createRouter, createWebHistory } from "vue-router";
import InventoryList from "../components/InventoryList.vue";
import InventoryForm from "../components/InventoryForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: InventoryList,
  },
  {
    path: "/add",
    name: "Add Inventory",
    component: InventoryForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
