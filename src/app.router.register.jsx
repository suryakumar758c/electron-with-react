import React, { lazy, useEffect } from "react";
import { Route, useHistory, useParams } from "react-router-dom";

import LocalStorageService from "./services/localStorage.service";

// import Auth from "./components/auth/Auth";
const Auth = lazy(() => import("./components/auth/Auth"));
const Chat = lazy(() => import("./components/chat/Chat"));

const RouterRegister = () => {
  const history = useHistory();
  const { id = "" } = useParams();

  useEffect(() => {
    console.log(id);
    if (LocalStorageService.getAuthToken() && !id) history.push("/chat");
    else history.push("/");
  }, []);

  return (
    <>
      <Route exact path="/" component={Auth} />
      <Route exact path="/chat" component={Chat} />
    </>
  );
};

export default RouterRegister;
