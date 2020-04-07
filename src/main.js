// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// 引入element-ui及其相关样式
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// element-ui挂载到vue中
Vue.use(ElementUI);
// 引入基本样式文件
import "@/assets/css/base.css";
// 倒入axios
import axios from "axios";
Vue.prototype.$http = axios;
// 默认路径
axios.defaults.baseURL = "http://xqb.ubanjiaoyu.com/";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// http://xqbht.szbdedu.com /

//  export const BASE_URL = 'http://xqb.ubanjiaoyu.com/'

// // export const BASE_URL = 'http://tcloud.studyo.cn:75/'
