import React from "react";
import { Chart } from "react-google-charts";

const RockPile = ({ data, isStacked, series }) => {
  const options = {
    title: "Site Utilization Rock Pile",
    titleTextStyle: {
      fontName: 'Inter Tight',
    },
    hAxis: { title: "Year" },
    chartArea: { height: "80%", left: "10%", width: "80%", right: "9%", },
    width: 1100,
    isStacked: isStacked,
    lineWidth: 2,
    pointSize: 4,
    pointsVisible: "true",
    series,
    legend: 'none',
    tooltip: {showColorCode: true}
  };

  return (
    <div className="border shadow-lg rounded-md overflow-hidden">
      <Chart
        chartType="AreaChart"
        height="500px"
        data={data}
        options={options}
        legend_toggle={true}
      />
    </div>
  );
};

export default RockPile;
