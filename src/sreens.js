import { Home } from "./pages/home";
import { News } from "./pages/news/news";

export const SCREENS = {
  login: {
    name: "login",
    component: Home,
    icon: null,
    outlinedIcon: null,
  },
  home: {
    name: "home",
    component: Home,
    icon: "home",
    outlinedIcon: "home-outline",
  },
  news: {
    name: "news",
    component: News,
    icon: null,
    outlinedIcon: null,
  },
  form: {
    name: "form",
    component: Home,
    icon: "document-text",
    outlinedIcon: "document-text-outline",
  },
  ranking: {
    name: "ranking",
    component: Home,
    icon: "trophy",
    outlinedIcon: "trophy-outline",
  },
  map: {
    name: "map",
    component: Home,
    icon: "location",
    outlinedIcon: "location-outline",
  },
  profile: {
    name: "profile",
    component: Home,
    icon: "person",
    outlinedIcon: "person-outline",
  },
};
