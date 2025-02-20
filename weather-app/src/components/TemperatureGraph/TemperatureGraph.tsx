import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { GraphContainer, Title, ChartWrapper } from "./TemperatureGraph.styles";

interface TemperatureGraphProps {
  forecast: any;
  unit: "metric" | "imperial";
}

// Custom XAxis tick: smaller font on mobile, larger on desktop
const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  // Use 10px for mobile (<768px), else 12px
  const fontSize = window.innerWidth < 768 ? 10 : 12;
  return (
    <text
      x={x}
      y={y + 15} // Adjust vertical position as needed
      textAnchor="middle"
      fill="#666"
      fontSize={fontSize}
    >
      {payload.value}
    </text>
  );
};

const TemperatureGraph: React.FC<TemperatureGraphProps> = ({ forecast, unit }) => {
  const graphData = Array.isArray(forecast)
    ? forecast.slice(0, 12).map((entry: any) => {
        const date = new Date(entry.dt * 1000);
        const hours = date.getHours();
        return {
          // If it's midnight (12 AM), show the date; otherwise, show the time.
          time:
            hours === 0
              ? date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
              : date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          temp: entry.main.temp,
        };
      })
    : [];

  return (
    <GraphContainer>
      <Title>Hourly Forecast</Title>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={graphData}
            margin={{ top: 40, right: 20, bottom: 20, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* X-Axis: Uses the custom tick for mobile adjustments */}
            <XAxis
              dataKey="time"
              axisLine={true}
              tickLine={true}
              height={30}
              padding={{ left: 10, right: 10 }}
              tick={<CustomXAxisTick />}
            />
            {/* Y-Axis: Default rendering so the unit appears correctly */}
            <YAxis
              domain={["auto", "auto"]}
              unit={unit === "metric" ? "°C" : "°F"}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </GraphContainer>
  );
};

export default TemperatureGraph;
