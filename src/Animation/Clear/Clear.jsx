// import { useSpring, animated } from "@react-spring/web";
// import { Sun } from "./Component/RollingSun/Sun.jsx";
// import { SunShine } from "./Component/SunShine.jsx";
import RollingSun from "./Component/RollingSun.jsx";
import SvgBackground from "../SvgBackground.jsx";

export default function Clear() {
  return (
    <div className="background">
      <RollingSun />
      <div className="svgbackground">
        <SvgBackground />
      </div>
    </div>
  );
}
