import Atmosphere from "./Atmosphere/Atmosphere";
import Clear from "./Clear/Clear";
import Clouds from "./Clouds/Clouds";
import Rain from "./Rain/Rain";
import Snow from "./Snow/Snow";
import Thunderstorm from "./Thunderstorm/Thunderstorm";
import SvgBackground from "./SvgBackground";

export default function WeatherAnimation({ weather }) {
  // According to the weather, return different animation
  switch (weather) {
    case "Thunderstorm":
      return <Thunderstorm />;
    case "Rain":
      return <Rain />;
    case "Drizzle":
      return <Rain />;
    case "Snow":
      return <Snow />;
    case "Clear":
      return <Clear />;
    case "Clouds":
      return <Clouds />;
    case "Atmosphere":
      return <Atmosphere />;
    default:
      return (
        <div className="svgbackground background">
          <SvgBackground />
        </div>
      );
  }
}
