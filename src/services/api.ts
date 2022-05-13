import axios from "axios";

import auth from "./auth";

const axiosInstance = axios.create({
  // There is no back-end deployed yet
  // baseURL:
  //   process.env.REACT_APP_ENV === "dev"
  //     ? "http://localhost:5000"
  //     : "http://localhost:5000",
  baseURL: "http://localhost:5000",
});

export { axiosInstance };

export default {
  auth,
};
