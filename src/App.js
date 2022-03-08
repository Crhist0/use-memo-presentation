import useDocumentTitle from './hooks/useDocumentTitle';
import AppRoute from './routes/AppRoute';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useDocumentTitle('useMemo Hook Presentation');
  // useEffect(() => {
  //   checkAuthState();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const { isLoggedIn, checkAuthState } = useContext(AuthContext);
  // return isLoggedIn ? <AppRoute /> : <AuthRoute />;
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <AppRoute />
      </Provider>
    </>
  );
};

export default App;
