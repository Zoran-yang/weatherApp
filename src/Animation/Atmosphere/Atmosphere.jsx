// import RollingSun from "../Clear/Component/RollingSun.jsx";
import SvgBackground from "../SvgBackground.jsx";
import SvgWind from "./SvgWind.jsx";
import { useTrail, animated } from "@react-spring/web";

export default function Atmosphere() {
  const trailSprings = useTrail(3, {
    from: { opacity: 0 },
    to: [{ opacity: 1 }, { opacity: 0.5 }, { opacity: 0 }],
    config: { duration: 3000 },
  });

  return (
    <div className="background">
      <animated.div
        style={{
          zIndex: -1,
          position: "absolute",
          top: "65%",
          left: "10%",
          ...trailSprings[0],
        }}
      >
        <SvgWind />
      </animated.div>
      <animated.div
        style={{
          position: "absolute",
          top: "35%",
          left: "25%",
          ...trailSprings[2],
        }}
      >
        <SvgWind />
      </animated.div>
      <animated.div
        style={{
          position: "absolute",
          top: "55%",
          left: "65%",
          ...trailSprings[1],
        }}
      >
        <SvgWind />
      </animated.div>
      <div className="svgbackground">
        <SvgBackground />
      </div>
    </div>
  );
}
