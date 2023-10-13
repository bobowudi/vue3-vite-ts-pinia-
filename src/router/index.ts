import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Login from '@/views/Login.vue';
import Layout from '@/views/Layout.vue';
import Page404 from '@/views/404.vue';
import Empty from '@/views/Empty.vue';
import { menus } from './menus'
const pages = import.meta.glob('@/Layout/**/*.vue');

const LoginRoute: RouteRecordRaw = {
    name: "Login",
    path: "/:pathMatch(.*)*",
    component: Login
}

const Page404Route: RouteRecordRaw = {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: Page404
}

const LayoutRoute: RouteRecordRaw = {
    name: "Layout",
    path: "/layout",
    component: Layout,
    children: []
}

const GetComponent = (path: string) => {
    path = `/src/Layout/${path}`.replace(/\/\//, '/');
    return pages[`${path}.vue`] || pages[`${path}/index.vue`] || Empty;
}

const _BuildRoutes = (menus: any) => {
    let routes: RouteRecordRaw[] = [];
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].name && menus[i].path) {
            routes.push({
                name: menus[i].name,
                path: menus[i].path,
                component: GetComponent(menus[i].path),
            })
        }
        if(menus[i].children&&menus[i].children!.length){
            routes = routes.concat(_BuildRoutes(menus[i].children!))
        }
    }
    return routes
}
let routes: RouteRecordRaw[] = [LoginRoute];
if (menus.length) {
    LayoutRoute.children = _BuildRoutes(menus);
    if(LayoutRoute.children.length){
        LayoutRoute.children[0].alias='/';
    }
    routes = [Page404Route, LayoutRoute];
}
export const router = createRouter({
    routes,
    history: createWebHashHistory()
})