import axios from "axios";

import auth from "./auth";

const axiosInstance = axios.create({
  baseURL: "https://app-the-reader.herokuapp.com",
});

export { axiosInstance };

export default {
  auth,
};
