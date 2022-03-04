import React, { createContext, useState } from "react";

const initialAuthState = {
  authStateLoading: true,
  access_token: window.localStorage.getItem("access_token") || ""
};

export const AuthContext = createContext({
  authState: initialAuthState
});

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  // Updating access token in localStorage
  const updateAuthStateContext = (access_token, token_gen_time) => {
    window.localStorage.setItem("access_token", access_token);

    if (token_gen_time) window.localStorage.setItem("token_gen_time", token_gen_time);

    setAuthState({
      authStateLoading: false,
      access_token
    });
  };
  /* Remove access_token from local storage and logout user */
  const logOutUser = () => {
    if (window.localStorage.getItem("access_token") !== null) {
      window.localStorage.removeItem("access_token");
    }
    setAuthState({
      access_token: "",
      authStateLoading: false
    });
  };

  // Check if auth is valid
  const checkAuthState = () => {
    const access_token = window.localStorage.getItem("access_token");
    const tokenGeneratedTime = parseInt(localStorage.getItem("token_gen_time"), 10);

    if (access_token !== null && tokenGeneratedTime && tokenGeneratedTime + 1400 * 60 * 1000 >= new Date().getTime()) {
      updateAuthStateContext(access_token);
    } else {
      logOutUser();
    }
  };

  //  Logout user
  const logInUser = access_token => {
    const token_gen_time = new Date().getTime();
    updateAuthStateContext(access_token, token_gen_time);
  };

  // IsloggedIn
  const isLoggedIn = authState.access_token ? true : false;

  const value = {
    authState,
    checkAuthState,
    logInUser,
    logOutUser,
    isLoggedIn
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
