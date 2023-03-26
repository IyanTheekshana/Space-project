import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./pages/TheHome.vue";
import DestinationPage from "./pages/DestinationPage.vue";
import CrewPage from "./pages/CrewPage.vue";
import TechPage from "./pages/TechPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: TheHome,
    },
    {
      path: "/destination",
      component: DestinationPage,
    },
    // {
    //   path: "/destination/:name",
    //   component: DestinationDetails,
    // },
    {
      path: "/crew",
      component: CrewPage,
    },
    {
      path: "/tech",
      component: TechPage,
    },
  ],
});

export default router;
