import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Clear from "./Component/Clear/Clear.jsx";
// import Introduction from "./Component/Introduction.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Clear /> */}
    {/* <Introduction /> */}
  </React.StrictMode>
);