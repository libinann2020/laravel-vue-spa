import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
};
