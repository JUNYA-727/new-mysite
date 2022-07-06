/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mysite from "./Mysite";
import Home from "./Home";
import Notfound from "./Notfound";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/mysite"}>
            <Mysite />
          </Route>
          <Route>
            <Notfound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default Main;
