import React from "react";
import ReactDOM from "react-dom/client";

import { AppContext } from "./components/context/context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContext>
    <App />
  </AppContext>
);
