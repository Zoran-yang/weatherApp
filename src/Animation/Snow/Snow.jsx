// import RollingSun from "../Clear/Component/RollingSun.jsx";
import SvgBackground from "../SvgBackground.jsx";
import SvgSnow from "./SvgSnow.jsx";
// import { useTrail, animated } from "@react-spring/web";

export default function Snow() {
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
          zIndex: 1,
          position: "absolute",
          width: "100%", // Set parent to take up full width
          height: "100%",
        }}
      >
        <SvgSnow />
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
