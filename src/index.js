import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tailwind.css";
import "./App.css";
import "jquery";
import App from "./App";
import "lightbox2";
import "../node_modules/lightbox2/dist/css/lightbox.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
