import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* GitHub Pages app lives under /anchorpoint-invest-borrow */}
    <BrowserRouter basename="/anchorpoint-invest-borrow">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
