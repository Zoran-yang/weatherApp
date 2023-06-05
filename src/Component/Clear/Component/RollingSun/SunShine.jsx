import { useSpring, animated } from "@react-spring/web";

export function SunShine() {
  const springs = useSpring({
    from: { transform: "rotate(0deg) scale(1)" },
    to: [
      { transform: " rotate(90deg) scale(1.3)" },
      { transform: "rotate(135deg) scale(1)" },
      { transform: " rotate(180deg) scale(1.3)" },
      { transform: "rotate(247.5deg) scale(1)" },
    ],
    config: { duration: 2000 },
  });

  return (
    <animated.path
      style={{
        transformOrigin: "center",
        transformBox: "fill-box",
        ...springs,
      }}
      d="M11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637
        19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122
        1.414 1.414-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414 2.12
        2.122zm13.434 10.605l-1.414 1.414-2.122-2.122 1.414-1.414z"
    />
  );
}
