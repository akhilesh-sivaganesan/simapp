import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Chart } from "react-google-charts";

const TimelineChart = ({ data, name }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData([
      [
        { type: "string", id: "Task ID" },
        { type: "string", id: "Task Name" },
        { type: "string", role: "tooltip" },
        { type: "date", id: "Start Date" },
        { type: "date", id: "End Date" },
      ],
      ...data.map((item) => [
        item.Program,
        `${item.Project}`,
        `<div class="flex flex-col items-start min-w-[200px] p-3 !z-[1000] bg-white h-full">
          <p class="text-2xl font-bold"> ${item.Project} </p>
          <p><span class='font-bold'>Program:</span> ${item.Program}</p>
          <p><span class='font-bold'>Type of Work:</span> ${item.TypeOfWork}</p>
          <p><span class='font-bold'>Option Name:</span> ${item.OptionName}</p>
          <p><span class='font-bold'>Building:</span> ${item.Building}</p>
          <p><span class='font-bold'>Occupied Area:</span> ${
            item.OccupiedArea
          }</p>
          <p><span class='font-bold'>Identifier Key:</span> ${
            item.IdentifierKey
          }</p>
          <p><span class='font-bold'>Flag:</span> ${item.Flag}</p>
          <p><span class='font-bold'>Option Details:</span> ${
            item.OptionDetails
          }</p>
          <p><span class='font-bold'>Start Date:</span> ${item.DateStart}</p>
          <p><span class='font-bold'>End Date:</span> ${item.DateEnd}</p>
          <p><span class='font-bold'>Maturity:</span> ${item.Maturity}</p>
          <p><span class='font-bold'>Capital Expenditure:</span> ${
            item.CapitalExpenditure
          }</p>
          <p><span class='font-bold'>DRDB Key:</span> ${item.DRDBKey.join(
            ", "
          )}</p>
          <p><span class='font-bold'>SME:</span> ${item.SME}</p>
          <p><span class='font-bold'>Notes:</span> ${item.Notes}</p>
          <p><span class='font-bold'>Space Characterization:</span> ${
            item.SpaceCharacterization
          }</p>
        </div>`,
        new Date(item.DateStart, 0, 1),
        new Date(item.DateEnd, 11, 31),
      ]),
    ]);
  }, [data]);

  const options = {
    allowHtml: true,
  };

  return (
    <div className="flex flex-col justify-center h-full p-3 !z-0 border">
      <Typography
        variant="h5"
        style={{ fontWeight: "500" }}
        className="!z-0"
        gutterBottom
      >
        {" "}
        Occupied Area: {name}
      </Typography>
      <div className="!z-0">
        <Chart
          chartType="Timeline"
          data={chartData}
          width="100%"
          options={options}
          chartEvents={[
            {
              eventName: "select",
              callback({ chartWrapper }) {
                console.log(
                  "Selected ",
                  chartWrapper.getChart().getSelection()
                );
              },
            },
          ]}
          className="!z-0"
        />
      </div>
    </div>
  );
};

export default TimelineChart;
