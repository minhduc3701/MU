import axios from "axios";
import * as Configs from "./../constants/Config";

export default function CallApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Configs.API_URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
