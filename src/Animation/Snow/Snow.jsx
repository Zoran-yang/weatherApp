// import RollingSun from "../Clear/Component/RollingSun.jsx";
import SvgBackground from "../SvgBackground.jsx";
import SvgSnow from "./SvgSnow.jsx";
// import { useTrail, animated } from "@react-spring/web";

export default function Snow() {
  return (
    <div className="background">
      <div
        style={{
          position: "absolute",
          width: "100%", // Set parent to take up full width
          height: "100%",
        }}
      >
        <SvgSnow />
      </div>

      <div className="svgbackground">
        <SvgBackground />
      </div>
    </div>
  );
}
