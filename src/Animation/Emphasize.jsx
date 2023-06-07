import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function Emphasize({ children }) {
  const [isEmphasized, setIsEmphasized] = useState(false);
  const spring = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    backgroundColor: isEmphasized ? `rgba(255, 109, 109, 1)` : `transparent`,
    transform: isEmphasized ? `scale(1.1)` : `scale(1)`,
    padding: isEmphasized ? `0.5rem` : `0rem`,
  });

  // When mouse enter, emphasize the text
  const trigger = () => {
    setIsEmphasized(true);
  };

  // When mouse leave, emphasize the text
  const recover = () => {
    setIsEmphasized(false);
  };

  return (
    <animated.div
      onMouseEnter={trigger}
      onMouseLeave={recover}
      style={{
        ...spring,
      }}
    >
      {children}
    </animated.div>
  );
}
