import { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

import styles from "./styles.module.css";

export default function Introduction({ setIsFirstVisit }) {
  const ref = useRef([]);
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    // ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(["Hello", "everyone"]), 1000));
    ref.current.push(
      setTimeout(() => setItems(["Hello", "I'm", "weather app"]), 4000)
    );
    ref.current.push(
      setTimeout(() => setItems(["Hello", "I'm", "your", "weather app"]), 7000)
    );
    ref.current.push(
      setTimeout(() => {
        setIsFirstVisit(false);
      }, 10000)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="mainbody">
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
            onClick={() => setIsFirstVisit(false)}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
