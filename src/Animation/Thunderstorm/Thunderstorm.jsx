import SvgBackground from "../SvgBackground.jsx";
import SvgRain from "../Rain/SvgRain.jsx";
import SvgClouds from "../Clouds/SvgClouds.jsx";
import SvgClouds_Big from "../Clouds/SvgClouds_Big.jsx";
import SvgClouds_Big1 from "../Clouds/SvgClouds_Big1.jsx";
import Svglightning from "./Svglightning.jsx";
// import { useTrail, animated } from "@react-spring/web";

export default function Thunderstorm() {
  return (
    <div
      style={{
        zIndex: -1,
        position: "absolute",
        width: "100%", // Set parent to take up full width
        height: "100%", // Set parent to take up full height
        overflow: "hidden",
      }}
    >
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "150px", // Set parent to take up full width
          height: "150px",
        }}
      >
        <Svglightning />
      </div>
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          top: "40%",
          left: "50%",
          width: "150px", // Set parent to take up full width
          height: "150px",
        }}
      >
        <Svglightning />
      </div>
      <div
        style={{
          //   zIndex: -1,
          position: "absolute",
          width: "100%", // Set parent to take up full width
          height: "100%", // Set parent to take up full height
          //   top: "8%",
          //   left: "13%",
          //   display: "flex",
          //   alignItems: "flex-end",
          //   overflow: "hidden",
        }}
      >
        <SvgClouds />
      </div>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          top: "20%",
          left: "50%",
          //   width: "100%", // Set parent to take up full width
          //   height: "100%", // Set parent to take up full height
          //   display: "flex",
          //   alignItems: "flex-end",
          //   overflow: "hidden",
        }}
      >
        <SvgClouds_Big />
      </div>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          top: "-10%",
          left: "85%",
          //   width: "100%", // Set parent to take up full width
          //   height: "100%", // Set parent to take up full height
          //   display: "flex",
          //   alignItems: "flex-end",
          //   overflow: "hidden",
        }}
      >
        <SvgClouds_Big1 />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          width: "100%", // Set parent to take up full width
          height: "100%",
        }}
      >
        <SvgRain />
      </div>

      <div
        style={{
          //   zIndex: 1,
          width: "100%", // Set parent to take up full width
          height: "100%", // Set parent to take up full height
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <SvgBackground />
      </div>
    </div>
  );
}
