// import { useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
import "./LoadingAnimation.css";

export default function LoadingAnimation() {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const { opacity } = useSpring({
  //     opacity: isLoading ? 1 : 0,
  //     config: {
  //       duration: 1000,
  //     },
  //   });

  return (
    <>
      {
        // <animated.div style={{ opacity }}>
        <div className="body">
          <div className="container">
            <span>Loading...</span>
            <div className="circle">
              <div className="ring"></div>
            </div>
          </div>
        </div>

        // </animated.div>
      }
    </>
  );
}
