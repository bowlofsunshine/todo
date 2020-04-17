import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import { MdField } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css'
import VueDraggable from 'vue-draggable'
import draggable from "vuedraggable";

Vue.use(MdField);
Vue.use(VueMaterial);
Vue.use(VueDraggable);
Vue.use(draggable);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
