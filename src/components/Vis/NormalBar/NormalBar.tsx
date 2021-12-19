import getTheme from "theme";
import _ from "lodash";

/** Interfaces/Types */
import { EThemeMode } from "interfaces/Theme";

/** Components */
import {
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { INormalBarData } from "interfaces/Vis";

interface INormalBarProps {
  data: INormalBarData[];
  keys: string[];
  y_label?: string;
}

const NormalBar = ({ data, keys, y_label }: INormalBarProps) => {
  const theme = getTheme(EThemeMode.LIGHT);

  const renderBars = (keys: string[]) => {
    const colors = [theme.palette.primary.main, theme.palette.secondary.main];
    console.log(keys);
    return _.map(keys, (key, i) => {
      return <Bar dataKey={key} fill={colors[i]} key={`normal-bar-${i}`} />;
    });
  };

  return (
    <ResponsiveContainer aspect={2.5}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          label={
            y_label
              ? { value: y_label, angle: -90, position: "insideLeft" }
              : {}
          }
        />
        <Tooltip />
        <Legend />
        {renderBars(keys)}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default NormalBar;
