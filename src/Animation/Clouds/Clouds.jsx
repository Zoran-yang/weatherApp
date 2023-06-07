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
    <div className="background">
      <SvgFixedSun />
      <animated.div
        style={{
          position: "absolute",
          top: "3%",
          left: "3%",
          ...springs,
        }}
      >
        <SvgClouds />
      </animated.div>
      <animated.div
        style={{
          zIndex: -1,
          position: "absolute",
          ...springs_big,
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
        }}
      >
        <SvgClouds_Big1 />
      </div>
      <div className="svgbackground">
        <SvgBackground />
      </div>
    </div>
  );
}
