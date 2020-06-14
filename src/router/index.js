import Vue from 'vue';
 import Router from 'vue-router';
 Vue.use(Router);
//  const EmptyContent = () => import('@components/Layout/EmptyContent.vue');
 // const Index = () => import(/* webpackChunkName: "index" */ '../views/Index/index.vue');
 const Home = () => import(/* webpackChunkName: "tpl-admin-list" */ '../pages/step1/home.vue');
 const Rain = () => import(/* webpackChunkName: "tpl-admin-list" */ '../pages/step1/rain.vue');

 export default new Router({
   mode: 'history',
   routes: [
     {
       path: '/home',
       name: 'home',
       component: Home,
     },
     {
        path: '/rain',
        name: 'rain',
        component: Rain,
      },
     {
       path: '*',
       noshow: true,
     }
   ]
 });