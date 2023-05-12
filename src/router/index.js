import { createWebHistory, createRouter } from "vue-router";
import Home from "../navBar/Home";
import About from "../navBar/About";
import Contact from "../navBar/Contact";
import Hoodi from "../navBar/Hoodi";
import Sneaker from "../navBar/Sneaker";
import Backpack from "../navBar/Backpack";
import Dress from "../navBar/Dress";
import Swimsuit from "../navBar/Swimsuit";

import TodoDetail from "../views/todo/TodoDetail";
import TodoList from "../views/todo/TodoList";
import TodoCreate from "../views/todo/TodoCreate";
import TodoEdit from "../views/todo/TodoEdit";
import HoodiDetail from "../views/Hoodis/HoodiDetail";
import HoodiList from "../views/Hoodis/HoodiList";
import HoodiCreate from "../views/Hoodis/HoodiCreate";
import HoodiEdit from "../views/Hoodis/HoodiEdit";
import SneakerDetail from "../views/sneaker/SneakerDetail";
import SneakerList from "../views/sneaker/SneakerList";
import SneakerCreate from "../views/sneaker/SneakerCreate";
import SneakerEdit from "../views/sneaker/SneakerEdit";
import BackpackDetail from "../views/Backpack/BackpackDetail";
import BackpackList from "../views/Backpack/BackpackList";
import BackpackCreate from "../views/Backpack/BackpackCreate";
import BackpackEdit from "../views/Backpack/BackpackEdit";
import Footer from "../components/Footer.vue";
import keranjangs from "../views/slider/keranjangs.vue";

import UserFb from "../components/UserFb.vue"



const routes = [
  {
    path: "/UserFb",
    name: "userFb",
    component: UserFb,
    // ===========================
  },

  {
    path: "/keranjangs",
    name: "keranjangs",
    component: keranjangs,
    // ===========================
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer,
    // ===========================
  },
  {
    path: "/backpacks",
    name: "BackpackList",
    component: BackpackList,
  },
  {
    path: "/backpacks/:id",
    name: "BackpackDetail",
    component: BackpackDetail,
  },
  {
    path: "/backpacks/new",
    name: "BackpackCreate",
    component: BackpackCreate,
  },
  {
    path: "/backpacks/:id/edit",
    name: "BackpackEdit",
    component: BackpackEdit,
  },
  // ===============================
  {
    path: "/sneaker",
    name: "Sneaker",
    component: SneakerList,
  },
  {
    path: "/sneaker/:id",
    name: "SneakerDetails",
    component: SneakerDetail,
  },

  {
    path: "/sneaker/new",
    name: "sneakerCreate",
    component: SneakerCreate,
  },
  {
    path: "/sneaker/:id/edit",
    name: "SneakerEdit",
    component: SneakerEdit,
    // ========================
  },
  {
    path: "/hoodis",
    name: "Hoodis",
    component: HoodiList,
  },
  {
    path: "/hoodis/:id",
    name: "HoodisDetails",
    component: HoodiDetail,
  },
  {
    path: "/hoodis/new",
    name: "HoodisCreate",
    component: HoodiCreate,
  },
  {
    path: "/hoodis/:id/edit",
    name: "HoodisEdit",
    component: HoodiEdit,
  },
  // =============
  {
    path: "/products",
    name: "Products",
    component: TodoList,
  },
  
  {
    path: "/products/:id",
    name: "TodoDetails",
    component: TodoDetail,
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/products/new",
    name: "TodoCreate",
    component: TodoCreate,
  },
  {
    path: "/products/:id/edit",
    name: "TodoEdit",
    component: TodoEdit,
  },
 
  {
    path: "/swimsuit",
    name: "Swimsuit",
    component: Swimsuit,
  },
  {
    path: "/dress",
    name: "Dress",
    component: Dress,
  },
  {
    path: "/backpack",
    name: "Backpack",
    component: Backpack,
  },
  {
    path: "/sneaker",
    name: "Sneaker",
    component: Sneaker,
  },
  {
    path: "/hoodi",
    name: "Hoodi",
    component: Hoodi,
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;