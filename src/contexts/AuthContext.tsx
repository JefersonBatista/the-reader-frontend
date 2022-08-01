import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Auth } from "../services/auth";

const authEmptyValue = {
  token: "",
  name: "",
};

const authLocalStorageKey = "the-reader-auth";

const AuthContext = createContext({
  auth: authEmptyValue,
  saveAuth: (auth: Auth) => {},
  removeAuth: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const retrievedAuth = localStorage.getItem(authLocalStorageKey);
  const initialAuth = retrievedAuth
    ? JSON.parse(retrievedAuth)
    : authEmptyValue;

  const [auth, setAuth] = useState(initialAuth);

  function saveAuth(receivedAuth: Auth) {
    setAuth(receivedAuth);
    localStorage.setItem(authLocalStorageKey, JSON.stringify(receivedAuth));
  }

  function removeAuth() {
    setAuth(authEmptyValue);
    localStorage.removeItem(authLocalStorageKey);
  }

  useEffect(() => {
    if (auth.token) {
      navigate("/main");
    } else {
      navigate("/sign-in");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, saveAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
