import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class AbRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // 拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  // 实例方法，统一封装 request
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ method: "get", ...config });
  }
  post(config) {
    return this.request({ method: "post", ...config });
  }
  delete(config) {
    return this.request({ method: "delete", ...config });
  }
  put(config) {
    return this.request({ method: "put", ...config });
  }
}

const AbAxios = new AbRequest(BASE_URL, TIMEOUT);
export default AbAxios;
