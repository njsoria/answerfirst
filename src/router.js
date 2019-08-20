import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  baseUrl: "",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/orders",
      name: "orders",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Orders.vue")
    },
    {
      path: "/schedule",
      name: "schedule",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "schedule" */ "./views/Schedule.vue")
    },
    {
      path: "/mailing",
      name: "mailing",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "mailing" */ "./views/Mailing.vue")
    },
    {
      path: "/returns",
      name: "returns",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "returns" */ "./views/Returns.vue")
    }
  ]
});
