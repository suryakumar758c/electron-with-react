import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouterRegister from "./app.router.register";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Suspense fallback={<>Loading...</>}>
            <RouterRegister />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
