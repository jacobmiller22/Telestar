import getTheme from "theme";

/** Interfaces/Types */
import { EThemeMode } from "interfaces/Theme";

/** Components */
import { EPieLabel } from "interfaces/Vis";
import { ResponsiveContainer, PieChart, Pie as RePie, Tooltip } from "recharts";

interface IPieProps {
  labelVariant?: EPieLabel;
}

interface ILabelInput {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  index: number;
}
const data = [
  { name: "Income", value: 400 },
  { name: "Expenses", value: 300 },
];

const Pie = ({ labelVariant = EPieLabel.TOOLTIP }: IPieProps) => {
  const theme = getTheme(EThemeMode.LIGHT);

  const calculateLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: ILabelInput) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].name} ({value})
      </text>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        minWidth: "150px",
        maxWidth: "100%",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "1fr min-content",
      }}
    >
      <ResponsiveContainer aspect={1}>
        <PieChart>
          <RePie
            data={data}
            fill={theme.palette.primary.main} // fill color
            dataKey="value"
            startAngle={180}
            endAngle={0}
            label={
              labelVariant === EPieLabel.ARROW ? calculateLabel : undefined
            }
          />
          {labelVariant === EPieLabel.TOOLTIP && <Tooltip />}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pie;
