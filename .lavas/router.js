import Vue from 'vue';
import Router from 'vue-router';

    
import _15547086321709d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1554708632170cd64960f6a8329d0b9f6f14f0e4377b0 from '@/pages/commodity-details/commodity-details.vue';
    

    
import _15547086321706db3c7567ebd5f7f800d0910ae3bbda9 from '@/pages/commodity-list/commodity-list.vue';
    

    
import _1554708632170d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _1554708632170eea99934ecc5e765d5736c35f83c1614 from '@/pages/home/classification.vue';
    

    
import _15547086321709f95ef222a6266ff3feeaf6e90743c57 from '@/pages/home/Index.vue';
    

    
import _155470863217062a9da8e9a5730214b9c96eed7202276 from '@/pages/home/personalCenter.vue';
    

    
import _155470863217096f3045a67f46b47bd58909ab9906ea0 from '@/pages/home/shoppingCart.vue';
    

    
import _15547086321706c19ed02edff12e8e9a2a62eb4ad84f3 from '@/pages/order-details/address-editor/address-editor.vue';
    

    
import _155470863217092d1a41a1997e432a9ad44bbeab28598 from '@/pages/order-details/address-list/address-list.vue';
    

    
import _1554708632170e7353e4686f60dda15a90cef86cb2d0c from '@/pages/order-details/order-details.vue';
    

    
import _15547086321709431bc401043754107f72d17bdb3d570 from '@/pages/order-list/order-list.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15547086321709d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/commodity-details/commodity-details",
        "component": _1554708632170cd64960f6a8329d0b9f6f14f0e4377b0,
        "meta": {},
        "name": "commodity-detailsCommodity-details"
    },
    {
        "path": "/commodity-list/commodity-list",
        "component": _15547086321706db3c7567ebd5f7f800d0910ae3bbda9,
        "meta": {},
        "name": "commodity-listCommodity-list"
    },
    {
        "path": "/home/classification",
        "component": _1554708632170eea99934ecc5e765d5736c35f83c1614,
        "meta": {},
        "name": "homeClassification"
    },
    {
        "path": "/home",
        "component": _15547086321709f95ef222a6266ff3feeaf6e90743c57,
        "meta": {},
        "name": "home"
    },
    {
        "path": "/home/personal-center",
        "component": _155470863217062a9da8e9a5730214b9c96eed7202276,
        "meta": {},
        "name": "homePersonalCenter"
    },
    {
        "path": "/home/shopping-cart",
        "component": _155470863217096f3045a67f46b47bd58909ab9906ea0,
        "meta": {},
        "name": "homeShoppingCart"
    },
    {
        "path": "/order-details/address-editor/address-editor",
        "component": _15547086321706c19ed02edff12e8e9a2a62eb4ad84f3,
        "meta": {},
        "name": "order-detailsAddress-editorAddress-editor"
    },
    {
        "path": "/order-details/address-list/address-list",
        "component": _155470863217092d1a41a1997e432a9ad44bbeab28598,
        "meta": {},
        "name": "order-detailsAddress-listAddress-list"
    },
    {
        "path": "/order-details/order-details",
        "component": _1554708632170e7353e4686f60dda15a90cef86cb2d0c,
        "meta": {},
        "name": "order-detailsOrder-details"
    },
    {
        "path": "/order-list/order-list",
        "component": _15547086321709431bc401043754107f72d17bdb3d570,
        "meta": {},
        "name": "order-listOrder-list"
    },
    {
        "path": "/error",
        "component": _1554708632170d2462dcf0c7beccd286c658e08187914,
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
