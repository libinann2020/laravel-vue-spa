import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/user/Dashboard.vue";
import AdminDashboard from "../pages/admin/Dashboard.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            auth: undefined,
        },
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            auth: false,
        },
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            auth: false,
        },
    },
    // USER ROUTES
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
            auth: true,
        },
    },
    // ADMIN ROUTES
    {
        path: "/admin",
        name: "admin.dashboard",
        component: AdminDashboard,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
    },
    {
        path: "/:catchAll(.*)",
        name: "not-found",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `Vue auth`;
    next();
});
export default router;
