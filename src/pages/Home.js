import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { logOutUser } = useContext(AuthContext);
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={logOutUser}>Logout</button>
    </div>
  );
};

export default Home;
