import SvgBackground from "../SvgBackground.jsx";
import SvgRain from "./SvgRain.jsx";
import SvgClouds from "../Clouds/SvgClouds.jsx";
import SvgClouds_Big from "../Clouds/SvgClouds_Big.jsx";
import SvgClouds_Big1 from "../Clouds/SvgClouds_Big1.jsx";
// import { useTrail, animated } from "@react-spring/web";

export default function Rain() {
  return (
    <div className="background">
      <div
        style={{
          position: "absolute",
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
        }}
      >
        <SvgClouds_Big1 />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <SvgRain />
      </div>

      <div className="svgbackground">
        <SvgBackground />
      </div>
    </div>
  );
}
