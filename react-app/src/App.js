import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import { authenticate } from "./store/session";
import ProjectForm from "./components/ProjectForm";

function App() {
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
            <ProtectedRoute path="/" exact={true}>
              <div className={`main flex-container`}>
                <ProfilePage />
              </div>
            </ProtectedRoute>
            <ProtectedRoute path="/projects/:project_id" exact={true}>
              <div className={`main flex-container`}>
                <ProjectPage />
              </div>
            </ProtectedRoute>
            <ProtectedRoute path="/projects/:project_id/tasks/:task_id" exact={true}>
              <div className={`main flex-container`}>
                <ProjectPage />
              </div>
            </ProtectedRoute>
            <ProtectedRoute path="/new_project" exact={true}>
              <ProjectForm />
            </ProtectedRoute>
          </Switch>
        <div className={`footer`}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
