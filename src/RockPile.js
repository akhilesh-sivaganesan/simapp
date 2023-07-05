import React from "react";
import { Chart } from "react-google-charts";

const RockPile = ({ data, isStacked, series  }) => {
  const options = {
    title: "Site Utilization Rock Pile",
    hAxis: { title: "Year"},
    //chartArea: { width: "75%", height: "80%" },
    width: 1120,
    isStacked: isStacked,
    lineWidth: 3,
    pointsVisible: 'true',
    series,
    legend: {position: 'right', maxLines: 2}
  };

  return (
    <Chart
      chartType="AreaChart"
      //width="100%"
      //height="400px"
      data={data}
      options={options}
      legend_toggle={true}
    />
  );
};

export default RockPile;
