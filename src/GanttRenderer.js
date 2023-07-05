import TimelineChart from "./TimelineChart";
import { useEffect, useState } from "react";
import {
  Typography,
  Container,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import RockPile from "./RockPile";

export default function GanttRenderer({ filteredData }) {
  const minStartYear = Math.min(
    ...filteredData.flatMap((groupObj) =>
      groupObj.rows.map((item) => new Date(item.DateStart).getFullYear())
    )
  );
  const maxEndYear = Math.max(
    ...filteredData.flatMap((groupObj) =>
      groupObj.rows.map((item) => new Date(item.DateEnd).getFullYear())
    )
  );
  const convertDataForMultipleCharts = (filteredData) => {
    return filteredData.map((groupObj) => {
      const headerRow = ["Year"];
      const dataMap = {};
      const seriesMap = {};
      const colors = {
        LMXT: "#A52A2A",
        "F-22": "#5b6be1",
        "Program C": "#FF0000",
        P209: "#008000",
      };
      const opacities = {
        AFF: 0.5,
        "AFF Expansion": 0.2,
        "Design Work Space": 0.5,
        "General Assembly": 0.5,
      };
      const lineDashStyles = {
        LRP: null,
        Firm: [10, 2],
        Potential: [2, 2],
      };

      groupObj.rows.forEach((row) => {
        const startYear = row.DateStart;
        const endYear = row.DateEnd;
        const yearsInDevelopment = endYear - startYear + 1;

        // Get the name of the row
        const name = `${row.Program} ${row.Project} ${row.TypeOfWork} ${row.OptionName}`;

        // Check if the name is already in the header row
        if (!headerRow.includes(name)) {
          // If not, add it to the header row
          headerRow.push(name);

          // Get the color for the current Program
          const color = colors[row.Program];

          // Get the areaOpacity for the current Project
          const areaOpacity = opacities[row.Project];

          // Get the lineDashStyle for the current TypeOfWork
          const lineDashStyle = lineDashStyles[row.TypeOfWork];

          // Add the color, areaOpacity, and lineDashStyle to the seriesMap
          seriesMap[name] = { color, areaOpacity, lineDashStyle };
        }

        const capitalExpenditure = parseInt(
          row.CapitalExpenditure.replace(/[^0-9]/g, "")
        );
        const capitalExpenditurePerYear =
          capitalExpenditure / yearsInDevelopment;

        // Add the capital expenditure to the dataMap for each year
        for (let year = startYear; year <= endYear; year++) {
          // Check if the year is already in the dataMap
          if (!dataMap[year]) {
            // If not, create a new entry for it
            dataMap[year] = {};
          }
          dataMap[year][name] =
            (dataMap[year][name] || 0) + capitalExpenditurePerYear;
        }
      });

      // Convert the dataMap into an array of rows
      const rows = Object.entries(dataMap).map(([year, rowData]) => {
        const row = [year];

        // Iterate over the header row to add the data for each column in order
        headerRow.slice(1).forEach((name) => {
          const value = rowData[name] || 0;
          row.push(value);
        });
        return row;
      });
      // Sort the rows by year
      rows.sort((a, b) => a[0] - b[0]);

      // Add the header row to the beginning of the rows array
      rows.unshift(headerRow);

      // Convert the seriesMap into an array of series options
      const series = headerRow.slice(1).map((name, index) => ({
        ...seriesMap[name],
        index,
      }));

      return { occupiedArea: groupObj.OccupiedArea, rows, series };
    });
  };

  // Convert filteredData into a format that can be used to render multiple RockPile components
  const chartData = convertDataForMultipleCharts(filteredData);

  // Add a new state variable to keep track of the isStacked option
  const [isStacked, setIsStacked] = useState(true);

  useEffect(() => {
    console.log(minStartYear);
    console.log(maxEndYear);
  }, []);

  return (
    <div className="flex flex-col space-y-5">
      <ToggleButtonGroup
        exclusive
        value={isStacked}
        onChange={(event, value) => setIsStacked(value)}
      >
        <ToggleButton value={false}>Not Stacked</ToggleButton>
        <ToggleButton value={true}>Stacked</ToggleButton>
        <ToggleButton value="relative">Relative</ToggleButton>
      </ToggleButtonGroup>
      {chartData.map((groupObj, i) => (
        <div key={i}>
          <Typography variant="h4" style={{ fontWeight: "bold" }} gutterBottom>
            {groupObj.occupiedArea}
          </Typography>
          <RockPile
            data={groupObj.rows}
            isStacked={isStacked}
            series={groupObj.series}
          />
          <TimelineChart
            name={groupObj.occupiedArea}
            data={filteredData[i].rows}
            minStartYear={minStartYear}
            maxEndYear={maxEndYear}
          />
        </div>
      ))}
    </div>
  );
}
