import axios from "axios";

import auth from "./auth";
import reading from "./reading";
import readingIntention from "./readingIntention";

export const axiosInstance = axios.create({
  baseURL: "https://app-the-reader.herokuapp.com",
});

export function configAuth(token: string) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export default { auth, reading, readingIntention };
