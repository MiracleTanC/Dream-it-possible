import Vue from "vue";

import Cookies from "js-cookie";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import Element from "element-ui";
import "./assets/styles/element-variables.scss";
import "@/assets/styles/index.scss"; // global css
import "@/assets/styles/dream.scss"; // dream css
import "@/assets/fonts/font-awesome.min.css"; // dream css
import App from "./App";
import store from "./store";
import router from "./router";
import permission from "./directive/permission";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "./assets/icons"; // icon
import "./permission"; // permission control
import { getDicts } from "@/api/system/dict/data";
import 'jquery'
import { getConfigKey } from "@/api/system/config";
import VueParticles from 'vue-particles'
import vueCanvas from 'vue-canvas-effect';
import {
  parseTime,
  resetForm,
  addDateRange,
  selectDictLabel,
  selectDictLabels,
  download,
  handleTree
} from "@/utils/dream";
import Pagination from "@/components/Pagination";
//自定义表格工具扩展
import RightToolbar from "@/components/RightToolbar";
// 全局方法挂载
Vue.prototype.getDicts = getDicts;
Vue.prototype.getConfigKey = getConfigKey;
Vue.prototype.parseTime = parseTime;
Vue.prototype.resetForm = resetForm;
Vue.prototype.addDateRange = addDateRange;
Vue.prototype.selectDictLabel = selectDictLabel;
Vue.prototype.selectDictLabels = selectDictLabels;
Vue.prototype.download = download;
Vue.prototype.handleTree = handleTree;
Vue.prototype.birthToShengxiao = handleTree;
//Vue.prototype.fishloading = fishloading;
Vue.prototype.msgSuccess = function(msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
};

Vue.prototype.msgError = function(msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
};

Vue.prototype.msgInfo = function(msg) {
  this.$message.info(msg);
};

// 全局组件挂载
Vue.component("Pagination", Pagination);
Vue.component("RightToolbar", RightToolbar);
Vue.use(mavonEditor);
Vue.use(permission);
Vue.use(VueParticles);
Vue.use(vueCanvas);
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get("size") || "medium" // set element-ui default size
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
