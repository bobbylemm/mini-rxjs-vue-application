import Vue from 'vue';
import App from './App.vue';

// these are all the configurations I need to strart using Rx with the Vue application. Additional functionality would then provided to the my other components.
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';

import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(VueRx, Rx);
Vue.use(vueAxios, axios);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
