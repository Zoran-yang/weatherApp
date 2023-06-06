import { useSpring, animated } from "@react-spring/web";

export default function Svglightning() {
  const springs = useSpring({
    from: { opacity: 0, transform: "scale(1)" },
    to: [
      { opacity: 1, transform: "scale(1.3)" },
      { opacity: 0, transform: "scale(1)" },
    ],
    delay: 1000,
    loop: true,
    config: { duration: 1000 },
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        fill: "yellow",
        overflow: "visible",
      }}
    >
      <animated.path
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
          ...springs,
        }}
        d="M10 13l-1 5h2v4l3.975-6H13l1-3z"
      />
    </svg>
  );
}
