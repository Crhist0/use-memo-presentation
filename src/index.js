import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

// css
import "./index.css";
import "./assets/css/Global.css";

ReactDOM.render(
  <AuthContextProvider>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
