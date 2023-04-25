import { apiContext } from "@/behavior-subject/auth-context.rxjs";
import axios from "axios";

const baseURL = "http://localhost:3100/api";
const Axios = axios.create({
  baseURL,
});

Axios.interceptors.request.use(
  (config) => {
    const user = apiContext.getUser();
    const token = user?.token;
console.log("Token interceptor, token : ", token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
