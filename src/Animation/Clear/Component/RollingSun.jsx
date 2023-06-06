import { useSpring, animated } from "@react-spring/web";
import SvgSun from "./RollingSun/SvgSun.jsx";
import SvgSunShine from "./RollingSun/SvgSunShine.jsx";

export default function RollingSun() {
  const springs = useSpring({
    from: { x: "-100%", y: "-100%" },
    to: { x: "5%", y: "5%" },
    config: { duration: 2000 },
  });

  return (
    <animated.div
      style={{
        width: "150px",
        height: "150px",
        position: "absolute",
        // top: "-10%",
        // left: "-10%",
        transformOrigin: "center",
        transformBox: "fill-box",
        ...springs,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="250px"
        // height="250px"
        viewBox="0 0 24 24"
        style={{
          // position: "absolute",
          // top: "-40px",
          // left: "90%",
          fill: "rgba(255, 109, 109, 1)",
          overflow: "visible",
        }}
      >
        <SvgSunShine />
        <SvgSun />
      </svg>
    </animated.div>
  );
}
