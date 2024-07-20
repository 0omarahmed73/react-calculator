import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CalculateProvider from "./contexts/CalculateContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalculateProvider>
      <App />
    </CalculateProvider>
  </React.StrictMode>
);
