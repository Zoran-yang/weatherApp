// import { useSpring, animated } from "@react-spring/web";
// import { Sun } from "./Component/RollingSun/Sun.jsx";
// import { SunShine } from "./Component/SunShine.jsx";
import RollingSun from "./Component/RollingSun.jsx";
import SvgBackground from "../SvgBackground.jsx";

export default function Clear() {
  return (
    <div
      style={{
        zIndex: -1,
        position: "absolute",
        width: "100%", // Set parent to take up full width
        height: "100%", // Set parent to take up full height
      }}
    >
      <RollingSun />
      <div
        style={{
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
