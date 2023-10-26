import { createAuth } from "@websanova/vue-auth/src/v3.js";
import driverAuthBearer from "@websanova/vue-auth/src/drivers/auth/bearer.js";
import driverHttpAxios from "@websanova/vue-auth/src/drivers/http/axios.1.x.js";
import driverRouterVueRouter from "@websanova/vue-auth/src/drivers/router/vue-router.2.x.js";

// Auth base configuration some of this options
// can be override in method calls
export default (app) => {
    app.use(
        createAuth({
            plugins: {
                auth: app.bearer,
                http: app.axios,
                router: app.router,
            },
            drivers: {
                http: driverHttpAxios,
                auth: driverAuthBearer,
                router: driverRouterVueRouter,
            },
            options: {
                rolesKey: "role",
                notFoundRedirect: { name: "not-found" },
                registerData: {
                    url: "auth/register",
                    method: "POST",
                    redirect: "/login",
                },
                loginData: {
                    url: "auth/login",
                    method: "POST",
                    redirect: "",
                    fetchUser: true,
                },
                logoutData: {
                    url: "auth/logout",
                    method: "POST",
                    redirect: "/",
                    makeRequest: true,
                },
                fetchData: { url: "auth/user", method: "GET", enabled: true },
                refreshData: {
                    url: "auth/refresh",
                    method: "GET",
                    enabled: true,
                    interval: 30,
                },
            },
        })
    );
};
