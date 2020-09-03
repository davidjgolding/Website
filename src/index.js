import React from "react";
import ReactDOM from "react-dom";
import Site from "./Site";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./stylesheet.css";

ReactDOM.render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
