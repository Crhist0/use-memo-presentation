import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button
        onClick={() => {
          logInUser("access_token");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
