import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Assuming you have global styles here

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
