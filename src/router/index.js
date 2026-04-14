import {createRouter, createWebHistory} from 'vue-router'

const scrollBehavior = function scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (savedPosition) {
                resolve(savedPosition)
            } else {
                resolve({top: 0, left: 0})
            }
        }, 100)
    })
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
    scrollBehavior
});

router.beforeEach((to, from) => {

});

router.afterEach((to, from) => {

});

export default router
