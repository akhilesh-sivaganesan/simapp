import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const GanttChart = ({ name, data }) => {
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
        { type: "string", label: "Resource" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
      ],
      ...data.map((item) => [
        item.IdentifierKey,
        `${item.Program + ': ' + item.Project}`,
        item.Program,
        new Date(item.DateStart, 0, 1),
        new Date(item.DateEnd, 11, 31),
        null,
        80,
        null,
      ]),
    ]);
  }, [data]);

  const options = {
    height: `${chartData.length * 50}`
  }

  return (
    <div className="relative">
      <p className="absolute top-1 right-1">{name}</p>
      <Chart chartType="Gantt" data={chartData} legendToggle width='100%' options={options}/>
    </div>
  );
};

export default GanttChart;
