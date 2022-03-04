import useDocumentTitle from "./hooks/useDocumentTitle";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import AppRoute from "./routes/AppRoute";
import AuthRoute from "./routes/AuthRoute";

const App = () => {
  useDocumentTitle("Custom Template");
  useEffect(() => {
    checkAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoggedIn, checkAuthState } = useContext(AuthContext);
  return isLoggedIn ? <AppRoute /> : <AuthRoute />;
};

export default App;
