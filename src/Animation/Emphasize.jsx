import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
// import { useEffect } from "react";

export default function Emphasize({ children }) {
  const [isEmphasized, setIsEmphasized] = useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    backgroundColor: isEmphasized ? `rgba(255, 109, 109, 1)` : `transparent`,
    transform: isEmphasized ? `scale(1.1)` : `scale(1)`,
    padding: isEmphasized ? `0.5rem` : `0rem`,
  });

  //   useEffect(() => {
  //     if (!isEmphasized) {
  //         return;
  //       }
  //       const timeoutId = window.setTimeout(() => {
  //         setIsBooped(false);
  //       }, timing);
  //       return () => {
  //         window.clearTimeout(timeoutId);
  //       };
  //   }, [isEmphasized]);

  const trigger = () => {
    setIsEmphasized(true);
  };

  const recover = () => {
    setIsEmphasized(false);
  };

  return (
    <animated.div onMouseEnter={trigger} onMouseLeave={recover} style={style}>
      {children}
    </animated.div>
  );
}
