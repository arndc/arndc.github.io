import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/themes/main.scss'
import '@/assets/icons/font-awesome-icons'

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

console.log('Welcome on my site!');
