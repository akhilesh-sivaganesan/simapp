import React from "react";
import { Chart } from "react-google-charts";

const RockPile = ({ data, isStacked, series  }) => {
  const options = {
    title: "Site Utilization Rock Pile",
    hAxis: { title: "Year"},
    chartArea: { height: "80%", left: "10%", width: "77%" },
    width: 1170,
    isStacked: isStacked,
    lineWidth: 2,
    pointsVisible: 'true',
    series,
    legend: {position: 'none'}
  };

  return (
    <Chart
      chartType="AreaChart"
      height="500px"
      data={data}
      options={options}
      legend_toggle={true}
    />
  );
};

export default RockPile;
