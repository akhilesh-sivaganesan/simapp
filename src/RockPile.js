import React from "react";
import { Chart } from "react-google-charts";

const RockPile = ({ data, isStacked }) => {
  const options = {
    title: "Site Utilization Rock Pile",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    chartArea: { width: "75%", height: "80%" },
    isStacked: isStacked,
    lineWidth: 3,
  };

  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      legend_toggle={true}
    />
  );
};

export default RockPile;
