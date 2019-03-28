/**
 * @file entry
 * @author YangLiJin(aiaiaiaiaiai0@qq.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';
import Vant, { Lazyload } from 'vant';
import '@/assets/sass/index.scss';
import 'vant/lib/index.css';
Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(Meta);

Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
