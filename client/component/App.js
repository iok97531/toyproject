import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Favorite from "../routes/Favorite";
import Home from "../routes/Home";
import PostDetail from "../routes/PostDetail";
import Profile from "../routes/profile";
import SignIn from "../routes/SignIn";
import SignUp from "../routes/SignUp";
import Write from "../routes/Write";
import { Meteor } from "meteor/meteor";

const App = () => (
  <BrowserRouter>
    {Meteor.currentUser ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

LoggedInRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/favorite"} exact={true} component={Favorite} />
    <Route path={"/profile"} exact={true} component={Profile} />
    <Route path={"/posts/:postId"} exact={true} component={PostDetail} />
    <Route path={"/write_post"} exact={true} component={Write} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

LoggedOutRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/signin"} exact={true} component={SignIn} />
    <Route path={"/signup"} exact={true} component={SignUp} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default App;
