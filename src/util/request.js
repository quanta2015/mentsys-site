import axios from "axios";
import { message } from "antd";
import jwt from "./token";
import { loadToken, saveUser, saveMenu } from "@/util/token";

export default (url, options = {}, allRes = false) => {
  // let token = jwt.loadToken()
  // let token = window.token
  let token = loadToken();

  token
    ? (axios.defaults.headers.common.authorization = `Bearer ${token}`)
    : delete axios.defaults.headers.common.authorization;

  return axios({
    url,
    ...options,
  })
    .then((r) => {
      if (allRes) {
        return r.data;
      }

      if (r && r.status === 200) {
        return r.data;
      } else {
        message.error("网络错误");
      }
    })
    .catch((e) => {
      if (e.response) {
        message.error(e.response.data.msg);
        return e.response.data;
      }
      message.error("网络错误");
    });
};
