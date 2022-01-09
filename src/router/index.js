import { createRouter, createWebHistory } from "vue-router";
import Movie from "../views/Movie.vue";
import OtherMovies from "../views/OtherMovies";
import NotFound from "../views/NotFound";
import Awards from "../views/Awards";

const routes = [
  {
    path: "/",
    component: Movie,
  },
  {
    path: "/otherMovies",
    component: OtherMovies
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/awards",
    component: Awards
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
