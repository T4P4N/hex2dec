import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import swDev from "./swDev"
// import * as serviceWorkerRegistration from "./swDev"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// serviceWorkerRegistration.register();
// Uncomment before build to enable service worker.
// swDev();