import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const GanttChart = ({ data }) => {
  const [chartData, setChartData] = useState([
    [
      { type: "string", label: "Task ID" },
      { type: "string", label: "Task Name" },
      { type: "date", label: "Start Date" },
      { type: "date", label: "End Date" },
      { type: "number", label: "Duration" },
      { type: "number", label: "Percent Complete" },
      { type: "string", label: "Dependencies" },
    ],
    ...data.map((item) => [
      item.IdentifierKey,
      item.Project,
      new Date(item.DateStart, 0, 1),
      new Date(item.DateEnd, 11, 31),
      null,
      100,
      null,
    ]),
  ]);
  useEffect(() => {
    setChartData([
      [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
      ],
      ...data.map((item) => [
        item.IdentifierKey,
        item.Project,
        new Date(item.DateStart, 0, 1),
        new Date(item.DateEnd, 11, 31),
        null,
        100,
        null,
      ]),
    ]);
  }, [data]);

  const options = {
    height: "800",
  };

  return <Chart chartType="Gantt" data={chartData} legendToggle options={options}/>;
};

export default GanttChart;
