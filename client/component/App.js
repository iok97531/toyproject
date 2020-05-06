import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Favorite from "../routes/Favorite";
import Home from "../routes/Home";
import PostDetail from "../routes/PostDetail";
import Profile from "../routes/profile";
import SignIn from "../routes/SignIn";
import SignUp from "../routes/SignUp";
import Write from "../routes/Write";

const App = () => (
  <BrowserRouter>
    <LogedInRoutes />
  </BrowserRouter>
);

LogedInRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/favorite"} exact={true} component={Favorite} />
    <Route path={"/profile"} exact={true} component={Profile} />
    <Route path={"/posts/:postId"} exact={true} component={PostDetail} />
    <Route path={"/post_write"} exact={true} component={Write} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

LogedOutRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"signin"} exact={true} component={SignIn} />
    <Route path={"signup"} exact={true} component={SignUp} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default App;
