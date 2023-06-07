import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Introduction from "./Animation/Introduction/Introduction.jsx";
import Clear from "./Animation/Clear/Clear.jsx";
import Rain from "./Animation/Rain/Rain.jsx";
import Clouds from "./Animation/Clouds/Clouds.jsx";
import Snow from "./Animation/Snow/Snow.jsx";
import Thunderstorm from "./Animation/Thunderstorm/Thunderstorm.jsx";
import Atmosphere from "./Animation/Atmosphere/Atmosphere.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Clear /> */}
    {/* <Atmosphere /> */}
    {/* <Clouds /> */}
    {/* <Rain /> */}
    {/* <Snow /> */}
    {/* <Thunderstorm /> */}
    {/* <Introduction /> */}
  </React.StrictMode>
);
