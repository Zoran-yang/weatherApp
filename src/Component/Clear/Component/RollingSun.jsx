import { useSpring, animated } from "@react-spring/web";
import { Sun } from "./RollingSun/Sun.jsx";
import { SunShine } from "./RollingSun/SunShine.jsx";

export function RollingSun() {
  const springs = useSpring({
    from: { x: 0, y: 0 },
    to: { x: 200, y: 100 },
    config: { duration: 2000 },
  });

  return (
    <animated.div
      style={{
        width: "250px",
        height: "250px",
        position: "absolute",
        top: "-100px",
        left: "-10%",
        transformOrigin: "center",
        transformBox: "fill-box",
        ...springs,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="250px"
        height="250px"
        viewBox="0 0 24 24"
        style={{
          // position: "absolute",
          // top: "-40px",
          // left: "90%",
          fill: "rgba(255, 109, 109, 1)",
          overflow: "visible",
        }}
      >
        <SunShine />
        <Sun />
      </svg>
    </animated.div>
  );
}
