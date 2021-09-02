import { SVGRender } from "components/atoms";

interface IChartViewProps {
  initChart: string;
}

const ChartView = ({ initChart }: IChartViewProps) => {
  return (
    <div>
      <SVGRender svg={initChart} />
    </div>
  );
};

export default ChartView;
