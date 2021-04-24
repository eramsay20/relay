import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Footer from './components/Footer';
import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className={`app-container`}>
        <div className={`header flex-container`}>
          <NavBar />
        </div>
          <Switch>
            <Route path="/login" exact={true}>
              <div className={`main flex-container`}>
                <LoginForm />
              </div>
            </Route>
            <Route path="/sign-up" exact={true}>
              <div className={`main flex-container`}>
                <SignUpForm />
              </div>
            </Route>
            <ProtectedRoute path="/users" exact={true} >
              <div className={`main flex-container`}>
                <UsersList/>
              </div>
            </ProtectedRoute>
            <ProtectedRoute path="/users/:userId" exact={true} >
              <div className={`main flex-container`}>
                <User />
              </div>
            </ProtectedRoute>
            <ProtectedRoute path="/" exact={true}>
              <div className={`main flex-container`}>
                <h1>My Home Page</h1>
              </div>
            </ProtectedRoute>
          </Switch>
        <div className={`footer flex-container`}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
