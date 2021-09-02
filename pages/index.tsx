import { Main } from "layouts";
import React from "react";
import { ChartView } from "views";
import WithLayout from "WithLayout";
import axios from "axios";

const dashboard = ({ initChart }) => {
  return (
    <WithLayout component={ChartView} layout={Main} initChart={initChart} />
  );
};

export default dashboard;

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:8080/v1/");
  return {
    props: {
      initChart: res?.data,
    },
  };
};
