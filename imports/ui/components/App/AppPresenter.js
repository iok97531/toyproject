import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Favorite from "../../pages/Favorite";
import Home from "../../pages/Home";
import PostDetail from "../../pages/PostDetail";

import Profile from "../../pages/Profile";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import WritePost from "../../pages/WritePost";
import Layout from "../../layouts/Layout.js";

const AppPresenter = (props) => (
  <div>
    <BrowserRouter>
      <Layout>{props.user ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Layout>
    </BrowserRouter>
  </div>
);

LoggedInRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/posts/:postId"} exact={true} component={PostDetail} />
    <Route path={"/favorite"} exact={true} component={Favorite} />
    <Route path={"/profile"} exact={true} component={Profile} />
    <Route path={"/write"} exact={true} component={WritePost} />
    <Redirect from="*" to="/" />
  </Switch>
);

LoggedOutRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/posts/:postId"} exact={true} component={PostDetail} />
    <Route path={"/signin"} exact={true} component={SignIn} />
    <Route path={"/signup"} exact={true} component={SignUp} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppPresenter;
