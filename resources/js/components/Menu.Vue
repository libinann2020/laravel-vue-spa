<template>
    <nav id="nav">
        <!--UNLOGGED-->
        <div v-if="!$auth.check()">
            <ul>
                <li
                    v-for="(route, key) in routes.unlogged"
                    v-bind:key="route.path"
                >
                    <router-link :to="{ name: route.path }" :key="key">
                        {{ route.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!--LOGGED USER-->
        <div v-if="$auth.check(1)">
            <ul>
                <li v-for="(route, key) in routes.user" v-bind:key="route.path">
                    <router-link :to="{ name: route.path }" :key="key">
                        {{ route.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!--LOGGED ADMIN-->
        <div v-if="$auth.check(2)">
            <ul>
                <li
                    v-for="(route, key) in routes.admin"
                    v-bind:key="route.path"
                >
                    <router-link :to="{ name: route.path }" :key="key">
                        {{ route.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!--LOGOUT-->
        <div v-if="$auth.check()">
            <ul>
                <li>
                    <a href="#" @click.prevent="$auth.logout()">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            routes: {
                // UNLOGGED
                unlogged: [
                    {
                        name: "Inscription",
                        path: "register",
                    },
                    {
                        name: "Connexion",
                        path: "login",
                    },
                ],
                // LOGGED USER
                user: [
                    {
                        name: "Dashboard",
                        path: "dashboard",
                    },
                ],
                // LOGGED ADMIN
                admin: [
                    {
                        name: "Dashboard",
                        path: "admin.dashboard",
                    },
                ],
            },
        };
    },
    mounted() {
        //
    },
};
</script>
