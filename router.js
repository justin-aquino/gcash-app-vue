import { createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage, //use this component for this path.
  },
  {
    path: "/cash-in",
    component: CashinPage,
  },
  {
    path: "/send",
    component: "SendPage",
  },
];

//create a router instance
export default createRouter({
  history: createWebHistory(), //go to a certain page and you can use the back button to go back
  routes,
});
