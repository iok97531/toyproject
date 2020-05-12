import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "./component/App";
//import "semantic-ui-css/semantic.css";
//import "./main.css";

Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});
