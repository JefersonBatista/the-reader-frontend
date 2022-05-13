import { axiosInstance } from "./api";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export interface Auth {
  token: string;
  name: string;
}

type SignInData = Omit<SignUpData, "name">;

async function signUp(data: SignUpData) {
  return axiosInstance.post("/users", data);
}

async function signIn(data: SignInData) {
  return axiosInstance.post<Auth>("/auth/sign-in", data);
}

export default { signUp, signIn };
