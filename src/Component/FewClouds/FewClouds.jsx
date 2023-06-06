import RollingSun from "../Clear/Component/RollingSun.jsx";
import SvgBackground from "../SvgBackground.jsx";
import SvgClouds from "./SvgClouds.jsx";

export default function FewClouds() {
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
          //   zIndex: -1,
          position: "absolute",
          width: "100%", // Set parent to take up full width
          height: "100%", // Set parent to take up full height
          //   display: "flex",
          //   alignItems: "flex-end",
          //   overflow: "hidden",
        }}
      >
        <SvgClouds />
      </div>
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
