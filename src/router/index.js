import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StoriesView from "../views/StoriesView.vue";
import DiaryView from "../views/DiaryView.vue";
import MessagesView from "../views/MessagesView.vue";
import ContactView from "../views/ContactView.vue";
import SignUpView from "../views/SignUpView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/stories",
      component: StoriesView,
    },
    {
      path: "/diary",
      component: DiaryView,
    },
    {
      path: "/messages",
      component: MessagesView,
    },
    {
      path: "/contact",
      component: ContactView,
    },
    {
      path: "/signup",
      component: SignUpView,
    },
    {
      path: "/profile",
      component: ProfileView,
    },
  ],
});

export default router;
