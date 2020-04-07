import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
// 登录
import login from "@/components/login/login";
// 主页
import home from "@/components/home/home";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/home",
      name: "home",
      component: home
    }
  ]
});
