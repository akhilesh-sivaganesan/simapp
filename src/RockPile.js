import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Site Utilization Rock Pile",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "60%", height: "80%" },
  isStacked: true,
};

const RockPile = ({data}) => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default RockPile;
