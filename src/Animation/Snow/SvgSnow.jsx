import { useTrail, animated } from "@react-spring/web";

export default function SvgSnow() {
  const trailSprings = useTrail(3, {
    from: { opacity: 0 },
    to: [{ opacity: 1 }, { opacity: 0.5 }, { opacity: 0 }],
    config: { duration: 3000 },
    loop: true,
  });
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 952.35 710">
      <animated.g style={{ ...trailSprings[0] }}>
        <circle cx="38.221" cy="30.027" r="19.027" fill="#cfcce0"></circle>
        <circle cx="338.221" cy="570.027" r="11" fill="#cfcce0"></circle>
        <circle cx="624.668" cy="204" r="5" fill="#cfcce0"></circle>
        <circle cx="835.668" cy="364" r="5" fill="#cfcce0"></circle>
        <circle cx="704.668" cy="478" r="5" fill="#cfcce0"></circle>
      </animated.g>
      <animated.g style={{ ...trailSprings[1] }}>
        <circle cx="50" cy="515" r="5" fill="#cfcce0"></circle>
        <circle cx="150.221" cy="250.027" r="11" fill="#cfcce0"></circle>
        <circle cx="273.668" cy="25" r="5" fill="#cfcce0"></circle>
        <circle cx="316.668" cy="170" r="5" fill="#cfcce0"></circle>
        <circle cx="420.668" cy="515" r="5" fill="#cfcce0"></circle>
        <circle cx="562.668" cy="11" r="11" fill="#cfcce0"></circle>
      </animated.g>
      <animated.g style={{ ...trailSprings[2] }}>
        <circle cx="521.668" cy="582" r="11" fill="#cfcce0"></circle>
        <circle cx="250" cy="440" r="5" fill="#cfcce0"></circle>
        <circle cx="150" cy="650" r="5" fill="#cfcce0"></circle>
        <circle cx="773.668" cy="192" r="11" fill="#cfcce0"></circle>
        <circle cx="463.668" cy="353" r="11" fill="#cfcce0"></circle>
      </animated.g>
    </svg>
  );
}
