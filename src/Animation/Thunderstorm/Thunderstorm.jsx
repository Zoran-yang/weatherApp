import SvgBackground from "../SvgBackground.jsx";
import SvgRain from "../Rain/SvgRain.jsx";
import SvgClouds from "../Clouds/SvgClouds.jsx";
import SvgClouds_Big from "../Clouds/SvgClouds_Big.jsx";
import SvgClouds_Big1 from "../Clouds/SvgClouds_Big1.jsx";
import Svglightning from "./Svglightning.jsx";

export default function Thunderstorm() {
  return (
    <div className="background">
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          top: "17%",
          left: "3%",
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
        }}
      >
        <Svglightning />
      </div>
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
          width: "100%", // Set parent to take up full width
          height: "100%", // Set parent to take up full height
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
