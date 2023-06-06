// import RollingSun from "../Clear/Component/RollingSun.jsx";
import SvgBackground from "../SvgBackground.jsx";
import SvgClouds from "./SvgClouds.jsx";
import SvgFixedSun from "./SvgFixedSun.jsx";
import SvgClouds_Big from "./SvgClouds_Big.jsx";
import SvgClouds_Big1 from "./SvgClouds_Big1.jsx";
import { useSpring, animated } from "@react-spring/web";

export default function FewClouds() {
  const springs = useSpring({
    from: { x: "-50%", y: "0%" },
    to: { x: "5%", y: "0%" },
    config: { duration: 2000 },
  });
  const springs_big = useSpring({
    from: { x: "-50%", y: "30%" },
    to: { x: "110%", y: "30%" },
    config: { duration: 2000 },
  });

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
      <SvgFixedSun />
      <animated.div
        style={{
          //   zIndex: -1,
          position: "absolute",
          width: "100%", // Set parent to take up full width
          height: "100%", // Set parent to take up full height
          //   top: "8%",
          //   left: "13%",
          ...springs,
          //   display: "flex",
          //   alignItems: "flex-end",
          //   overflow: "hidden",
        }}
      >
        <SvgClouds />
      </animated.div>
      <animated.div
        style={{
          zIndex: -1,
          position: "absolute",
          //   top: "20%",
          //   left: "50%",
          ...springs_big,
          //   width: "100%", // Set parent to take up full width
          //   height: "100%", // Set parent to take up full height
          //   display: "flex",
          //   alignItems: "flex-end",
          //   overflow: "hidden",
        }}
      >
        <SvgClouds_Big />
      </animated.div>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          top: "-10%",
          left: "85%",
          ...springs_big,
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
