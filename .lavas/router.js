import Vue from 'vue';
import Router from 'vue-router';

    
import _15537349539509d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1553734953950d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _1553734953950eea99934ecc5e765d5736c35f83c1614 from '@/pages/home/classification.vue';
    

    
import _15537349539509f95ef222a6266ff3feeaf6e90743c57 from '@/pages/home/Index.vue';
    

    
import _155373495395062a9da8e9a5730214b9c96eed7202276 from '@/pages/home/personalCenter.vue';
    

    
import _155373495395096f3045a67f46b47bd58909ab9906ea0 from '@/pages/home/shoppingCart.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15537349539509d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/home/classification",
        "component": _1553734953950eea99934ecc5e765d5736c35f83c1614,
        "meta": {},
        "name": "homeClassification"
    },
    {
        "path": "/home",
        "component": _15537349539509f95ef222a6266ff3feeaf6e90743c57,
        "meta": {},
        "name": "home"
    },
    {
        "path": "/home/personal-center",
        "component": _155373495395062a9da8e9a5730214b9c96eed7202276,
        "meta": {},
        "name": "homePersonalCenter"
    },
    {
        "path": "/home/shopping-cart",
        "component": _155373495395096f3045a67f46b47bd58909ab9906ea0,
        "meta": {},
        "name": "homeShoppingCart"
    },
    {
        "path": "/error",
        "component": _1553734953950d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
