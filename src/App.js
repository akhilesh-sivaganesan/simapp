import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import EditableDataTable from "./EditableDataTable";
import RockPile from "./RockPile";
import { useTheme } from "@mui/material/styles";

function App() {
  // Using Material UI theme
  const theme = useTheme();

  const [data, setData] = useState([
    {
      Project: "Design Work Space",
      TypeOfWork: "LRP",
      Program: "LMXT",
      OptionName: "A",
      Building: "L-10",
      OccupiedArea: "Levels 1-5",
      DateStart: 2023,
      DateEnd: 2037,
      TotalCapitalExpenditure: "$5,800,000",
      Expenditure2023: "$0",
      Expenditure2024: "$4,375,000",
      Expenditure2025: "$873,000",
      Expenditure2026: "$552,000",
      Expenditure2027: "$0",
      SME: "Adrian, Gibson",
      Notes:
        "LMXT Building interior design for Engineering, contract award 2025",
      SpaceCharacterization: "Design",
    },
    {
      Project: "AFF",
      TypeOfWork: "Potential",
      Program: "F-22",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      DateStart: 2028,
      DateEnd: 2030,
      TotalCapitalExpenditure: "$0",
      Expenditure2023: "$0",
      Expenditure2024: "$0",
      Expenditure2025: "$0",
      Expenditure2026: "$0",
      Expenditure2027: "$0",
      SME: "Patel, Pathik J",
      Notes: "Cost captured in LRP, same option",
      SpaceCharacterization: "Sustainment",
    },
    {
      Project: "AFF",
      Program: "F-22",
      TypeOfWork: "LRP",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      DateStart: 2026,
      DateEnd: 2028,
      TotalCapitalExpenditure: "$0",
      Expenditure2023: "$0",
      Expenditure2024: "$0",
      Expenditure2025: "$0",
      Expenditure2026: "$0",
      Expenditure2027: "$0",
      SME: "Patel, Pathik J",
      Notes: "Maintain F-22 rate of turnaround for sustainment",
      SpaceCharacterization: "Sustainment",
    },
    {
      Project: "AFF",
      Program: "F-22",
      TypeOfWork: "Firm",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      DateStart: 2024,
      DateEnd: 2026,
      TotalCapitalExpenditure: "$8,000,000",
      Expenditure2023: "$0",
      Expenditure2024: "$500,000",
      Expenditure2025: "$6,500,000",
      Expenditure2026: "$1,000,000",
      Expenditure2027: "$0",
      SME: "Patel, Pathik J",
      Notes: "Cost captured in LRP, same option",
      SpaceCharacterization: "Sustainment",
    },
    {
      Project: "AFF",
      Program: "F-22",
      TypeOfWork: "LRP",
      OptionName: "B",
      Building: "L-64",
      OccupiedArea: "Bay 1",
      DateStart: "2023",
      DateEnd: "2026",
      TotalCapitalExpenditure: "$8,000,000 ",
      Expenditure2023: "$0 ",
      Expenditure2024: "$500,000 ",
      Expenditure2025: "$6,500,000 ",
      Expenditure2026: "$1,000,000 ",
      Expenditure2027: "$0 ",
      SME: "Patel, Pathik J",
      Notes: "WAG based on Bay 2 P&E Cost",
    },
    {
      Project: "AFF Expansion",
      Program: "Program C",
      TypeOfWork: "LRP",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      DateStart: 2025,
      DateEnd: 2040,
      TotalCapitalExpenditure: "$10,223,000",
      Expenditure2023: "$0",
      Expenditure2024: "$0",
      Expenditure2025: "$3,400,000",
      Expenditure2026: "$6,823,000",
      Expenditure2027: "$0",
      SME: "Lanning, Christine",
      Notes: "Occupancy in 2026",
      SpaceCharacterization: "Expansion",
    },
    {
      Project: "AFF",
      Program: "Program C",
      TypeOfWork: "Firm",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 3 ",
      DateStart: "2023",
      DateEnd: "2040",
      TotalCapitalExpenditure: "$0 ",
      Expenditure2023: "$0 ",
      Expenditure2024: "$0 ",
      Expenditure2025: "$0 ",
      Expenditure2026: "$0 ",
      Expenditure2027: "$0 ",
      SME: "Lanning, Christine",
    },
    {
      Project: "General Assemby",
      Program: "P209",
      OptionName: "A",
      TypeOfWork: "LRP",
      Building: "B64",
      OccupiedArea: "All",
      DateStart: "2024",
      DateEnd: "2040",
      TotalCapitalExpenditure: "$6,780,000 ",
      Expenditure2023: "$0 ",
      Expenditure2024: "$1,542,000 ",
      Expenditure2025: "$4,988,000 ",
      Expenditure2026: "$250,000 ",
      Expenditure2027: "$0 ",
      SME: "Reiman, Britt",
      Notes: "Need April 2025",
      SpaceCharacterization: "Collateral",
    },
    {
      Project: "AFF",
      Program: "Program C",
      TypeOfWork: "LRP",
      OptionName: "B",
      Building: "L-64",
      OccupiedArea: "Bay 1",
      DateStart: 2025,
      DateEnd: 2040,
      TotalCapitalExpenditure: "$10,223,000",
      Expenditure2023: "$0",
      Expenditure2024: "$0",
      Expenditure2025: "$3,400,000",
      Expenditure2026: "$6,823,000",
      Expenditure2027: "$0",
      SME: "Lanning, Christine",
      Notes: "Assume same WAG as Bay 2 occupancy costs",
      SpaceCharacterization: "Expansion",
    },
    {
      Project: "General Assembly",
      Program: "P209",
      OptionName: "B",
      TypeOfWork: "LRP",
      Building: "L-10",
      OccupiedArea: "Levels 1-5",
      DateStart: 2024,
      DateEnd: 2040,
      TotalCapitalExpenditure: "$6,780,000",
      Expenditure2023: "$0",
      Expenditure2024: "$1,542,000",
      Expenditure2025: "$4,988,000",
      Expenditure2026: "$250,000",
      Expenditure2027: "$0",
      SME: "Reiman, Britt",
      Notes: "Deemed B54 better option cost-wise, assume same cost as B64",
      SpaceCharacterization: "Final Integration",
    },
    {
      Project: "AFF",
      Program: "Program C",
      TypeOfWork: "LRP",
      OptionName: "C",
      Building: "New Classified AFF Facility",
      OccupiedArea: "All",
      DateStart: "2025",
      DateEnd: "2040",
      TotalCapitalExpenditure: "$50,000,000 ",
      Expenditure2023: "$0 ",
      Expenditure2024: "$0 ",
      Expenditure2025: "$15,000,000 ",
      Expenditure2026: "$10,000,000 ",
      Expenditure2027: "$25,000,000 ",
      SME: "Lanning, Christine",
      Notes: "Theoretical New Building, WAG on amount and years",
      SpaceCharacterization: "Design & Construction",
    },
    {
      Project: "AFF",
      Program: "F-22",
      TypeOfWork: "LRP",
      OptionName: "C",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      DateStart: "2025",
      DateEnd: "2040",
      TotalCapitalExpenditure: "$10,223,000 ",
      Expenditure2023: "$0 ",
      Expenditure2024: "$0 ",
      Expenditure2025: "$3,400,000 ",
      Expenditure2026: "$6,823,000 ",
      Expenditure2027: "$0 ",
      SME: "Patel, Pathik J",
      Notes: "Assuming F-22 uses Prog C AFF Expansion Building",
      SpaceCharacterization: "Speedline",
    },
    {
      Project: "AFF",
      Program: "F-22",
      TypeOfWork: "LRP",
      OptionName: "C",
      Building: "New AFF Facility",
      OccupiedArea: "All",
      DateStart: 2025,
      DateEnd: 2040,
      TotalCapitalExpenditure: "$175,000,000 ",
      Expenditure2023: "$0 ",
      Expenditure2024: "$0 ",
      Expenditure2025: "$75,000,000 ",
      Expenditure2026: "$25,000,000 ",
      Expenditure2027: "$75,000,000 ",
      SME: "Patel, Pathik J",
      Notes: "Assuming F-22 gets a new AFF Building",
      SpaceCharacterization: "Speedline",
    },
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [isGoogleChartsLoaded, setIsGoogleChartsLoaded] = useState(false);

  const convertData = (data) => {
    // Group the data by the OccupiedArea field
    const groupedData = data.reduce((acc, row) => {
      // Check if the current OccupiedArea is already in the accumulator
      if (!acc[row.OccupiedArea]) {
        // If not, create a new entry for it
        acc[row.OccupiedArea] = [];
      }
      // Add the current row to the corresponding group
      acc[row.OccupiedArea].push(row);
      return acc;
    }, {});

    // Define the colors for each Program
    const colors = {
      LMXT: "#109618",
      "F-22": "#3366CC", //blue
      "Program C": "#DC3912", //red
      P209: "#990099",
    };

    // Define a function to lighten or darken a hex color
    const adjustColor = (color, amount) => {
      return (
        "#" +
        color
          .replace(/^#/, "")
          .replace(/../g, (color) =>
            (
              "0" +
              Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
                16
              )
            ).substr(-2)
          )
      );
    };

    // Define the adjustment amount for each TypeOfWork
    const adjustments = {
      LRP: 0,
      Firm: +60,
      Potential: +90,
    };

    // Convert the grouped data into an array of new JSON objects
    const convertedData = Object.entries(groupedData).map(
      ([occupiedArea, rows]) => {
        // Create an array of color codes for each row
        const rowColors = rows.map((row) => {
          // Get the base color for the current Program
          const baseColor = colors[row.Program];

          // Get the adjustment amount for the current TypeOfWork
          const adjustment = adjustments[row.TypeOfWork];
          // Adjust the base color to create a new color
          const color = adjustColor(baseColor, adjustment);
          return color;
        });

        return {
          OccupiedArea: occupiedArea,
          rows: rows,
          rowColors: rowColors,
        };
      }
    );
    return convertedData;
  };

  const convertDataForChart = (filteredData) => {
    // Create the header row
    const headerRow = ["Year"];
    const dataMap = {};
  
    // Create a map to store the color, areaOpacity, and lineDashStyle for each series
    const seriesMap = {};
  
    // Define the colors for each Program
    const colors = {
      LMXT: "#109618",
      "F-22": "#3366CC",
      "Program C": "#DC3912",
      P209: "#990099",
    };
    const opacities = {
      LRP: 0.8,
      Firm: 0.5,
      Potential: 0.3,
    };
  
    filteredData.forEach((row) => {
      // Get the name of the row
      const name = `${row.Program} ${row.Project} ${row.TypeOfWork} ${row.OptionName}`;
  
      // Check if the name is already in the header row
      if (!headerRow.includes(name)) {
        // If not, add it to the header row
        headerRow.push(name);
  
        // Get the color for the current Program
        const color = colors[row.Program];
  
        // Get the areaOpacity for the current Project
        const areaOpacity = opacities[row.TypeOfWork];
  
        // Add the color, areaOpacity to the seriesMap
        seriesMap[name] = { color, areaOpacity };
      }
  
      // Add the capital expenditure to the dataMap for each year
      for (let year = 2023; year <= 2040; year++) {
        // Check if the year is already in the dataMap
        if (!dataMap[year]) {
          // If not, create a new entry for it
          dataMap[year] = {};
        }
        const expenditureField = `Expenditure${year}`;
        if (row[expenditureField]) {
          const capitalExpenditure = parseInt(
            row[expenditureField].replace(/[^0-9]/g, "")
          );
          dataMap[year][name] =
            (dataMap[year][name] || 0) + capitalExpenditure;
        }
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
  
    return { rows, series };
  };
  
  const convertDataForMultipleCharts = (convertedData) => {
    return convertedData.map((groupObj) => {
      const headerRow = ["Year"];
      const dataMap = {};
      const seriesMap = {};
      const colors = {
        LMXT: "#109618",
        "F-22": "#3366CC",
        "Program C": "#DC3912",
        P209: "#990099",
      };
      const opacities = {
        LRP: 0.8,
        Firm: 0.5,
        Potential: 0.3,
      };
  
      groupObj.rows.forEach((row) => {
        // Get the name of the row
        const name = `${row.Program} ${row.Project} ${row.TypeOfWork} ${row.OptionName}`;
  
        // Check if the name is already in the header row
        if (!headerRow.includes(name)) {
          // If not, add it to the header row
          headerRow.push(name);
  
          // Get the color for the current Program
          const color = colors[row.Program];
  
          // Get the areaOpacity for the current Project
          const areaOpacity = opacities[row.TypeOfWork];
  
          // Add the color, areaOpacity to the seriesMap
          seriesMap[name] = { color, areaOpacity };
        }
  
        // Add the capital expenditure to the dataMap for each year
        for (let year = 2023; year <= 2040; year++) {
          // Check if the year is already in the dataMap
          if (!dataMap[year]) {
            // If not, create a new entry for it
            dataMap[year] = {};
          }
          const expenditureField = `Expenditure${year}`;
          if (row[expenditureField]) {
            const capitalExpenditure = parseInt(
              row[expenditureField].replace(/[^0-9]/g, "")
            );
            dataMap[year][name] =
              (dataMap[year][name] || 0) + capitalExpenditure;
          }
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

  // Convert the data into the desired format
  const [convertedData, setConvertedData] = useState(convertData(filteredData));
  // Convert filteredData into a format that can be used by RockPile component
  const { rows: chartData, series } = convertDataForChart(filteredData);
  useEffect(() => {
    // Convert the filteredData whenever it changes
    setConvertedData(convertData(filteredData));
    console.log("Converted Data for GANTT: ");
    console.log(convertedData);
    // console.log("Converted Multiple RockPile Data: ");
    // console.log(convertDataForMultipleCharts(convertedData));
  }, [filteredData]);
  // Convert filteredData into a format that can be used to render multiple RockPile components
  const multipleChartData = convertDataForMultipleCharts(convertedData);
  useEffect(() => {
    // Clear the contents of the parent element
    if (convertedData) {
      const minStartYear = 2023;
      const maxEndYear = 2040;

      const parent = document.getElementById("gantt-renderer");
      if (parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      }

      if (!isGoogleChartsLoaded) {
        // Load the Google Charts library
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.addEventListener("load", () => {
          window.google.charts.load("current", { packages: ["timeline"] });
          window.google.charts.setOnLoadCallback(() => {
            setIsGoogleChartsLoaded(true);
            drawCharts();
          });
        });
        document.body.appendChild(script);
      } else {
        drawCharts();
      }

      // Function to draw the timeline charts
      function drawCharts() {
        convertedData.forEach((groupObj, i) => {
          if (
            document.getElementById(
              groupObj.OccupiedArea + "chartGroup" + groupObj.rows.length
            )
          ) {
            document
              .getElementById(
                groupObj.OccupiedArea + "chartGroup" + groupObj.rows.length
              )
              .remove();
          }
          const chartGroup = document.createElement("div");
          chartGroup.classList.add("flex");
          chartGroup.classList.add("flex-col");
          chartGroup.classList.add("items-start");
          chartGroup.classList.add("border");
          chartGroup.classList.add("pt-5");
          chartGroup.id =
            groupObj.OccupiedArea + "chartGroup" + groupObj.rows.length;

          parent.appendChild(chartGroup);
          const containerId = groupObj.OccupiedArea + "" + groupObj.rows.length;

          const heading1Id =
            groupObj.OccupiedArea + "heading1" + groupObj.rows.length;

          const heading2Id =
            groupObj.OccupiedArea + "heading2" + groupObj.rows.length;

          const rockpileId =
            groupObj.OccupiedArea + "rockpile" + groupObj.rows.length;

          if (!document.getElementById(heading1Id)) {
            const heading = document.createElement("h5");
            heading.id = heading1Id;
            heading.classList.add("text-2xl");
            heading.classList.add("ml-[30px]");
            groupObj.rows.forEach((row, rowIndex) => {
              // You can use the variable rowIndex to access elements of the groupObj.rows array
              heading.textContent = groupObj.rows[rowIndex].Program + " " + groupObj.OccupiedArea;
            });
            chartGroup.appendChild(heading);
          }

          if (!document.getElementById(rockpileId)) {
            const rockpileContainer = document.createElement("div");
            rockpileContainer.id = rockpileId;
            chartGroup.appendChild(rockpileContainer);

            // Create and render a rockpile chart using the Google Charts library
            const rockpileChart = new window.google.visualization.AreaChart(
              rockpileContainer
            );
            const rockpileDataTable =
              new window.google.visualization.arrayToDataTable(
                multipleChartData[i].rows
              );
            // Add columns and rows to the data table based on the groupObj data

            const rockpileOptions = {
              // Define options for the rockpile chart
              hAxis: {
                minValue: new Date(2023, 0, 1),
                maxValue: new Date(2040, 11, 31),
                textStyle: {
                  fontSize: 13,
                },
              },
              width: 1120,
              chartArea: {
                //left: 100,
                //width: "75%",
                //height: "80%"
              },
              isStacked: true,
              lineWidth: 2,
              pointsVisible: "true",
              series: multipleChartData[i].series,
              legend: { position: "right", maxLines: 2 },
            };
            rockpileChart.draw(rockpileDataTable, rockpileOptions);
          }

          if (!document.getElementById(heading2Id)) {
            const heading = document.createElement("h5");
            heading.id = heading2Id;
            heading.classList.add("text-2xl");
            heading.classList.add("ml-[30px]");
            groupObj.rows.forEach((row, rowIndex) => {
              // You can use the variable rowIndex to access elements of the groupObj.rows array
              heading.textContent = groupObj.rows[rowIndex].Program + " " + groupObj.OccupiedArea;
            });
            chartGroup.appendChild(heading);
          }
          if (!document.getElementById(containerId)) {
            const container = document.createElement("div");
            container.id = containerId;
            container.classList.add("ml-[20px]");
            chartGroup.appendChild(container);

            const chart = new window.google.visualization.Timeline(container);
            const dataTable = new window.google.visualization.DataTable();
            dataTable.addColumn({ type: "string", id: "Task ID" });
            dataTable.addColumn({ type: "string", id: "Task Name" });
            dataTable.addColumn({
              type: "string",
              role: "tooltip",
              p: { html: true },
            });
            dataTable.addColumn({ type: "date", id: "Start Date" });
            dataTable.addColumn({ type: "date", id: "End Date" });
            dataTable.addRows(
              groupObj.rows.map((item) => [
                item.Program.padStart(13, "."),
                item.Program + " - " + item.Project + " - " + item.OptionName,
                `<div class="flex flex-col items-start min-w-[200px] max-w-[500px] p-3 !z-[1000] bg-white h-full">
            <p class="text-2xl font-bold"> ${item.Project} </p>
            <p><span class='font-bold'>Program:</span> ${item.Program}</p>
            <p><span class='font-bold'>Type of Work:</span> ${
              item.TypeOfWork
            }</p>
            <p><span class='font-bold'>Option Name:</span> ${
              item.OptionName
            }</p>
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
            <p><span class='font-bold'>SME:</span> ${item.SME}</p>
            <p><span class='font-bold'>Notes:</span> ${item.Notes}</p>
            <p><span class='font-bold'>Space Characterization:</span> ${
              item.SpaceCharacterization
            }</p>
          </div>`,
                new Date(item.DateStart, 0, 1),
                new Date(item.DateEnd, 11, 31),
              ])
            );

            var options = {
              allowHtml: true,
              tooltip: { isHtml: true },
              alternatingRowStyle: true,
              width: 1040,
              chartArea: {
                //width: 600
                //left: 100
              },
              hAxis: {
                minValue: new Date(2023, 0, 1),
                maxValue: new Date(2040, 11, 31),
                //ticks: [0, 5, 10, 15]
              },
              timeline: {
                rowLabelStyle: { fontSize: 12 },
                barLabelStyle: { fontSize: 12 },
              },
              colors: convertedData[i].rowColors,
            };
            // console.log(options.colors + " Row " + i);

            // Set the height of the chart to fit its content
            var barLabelFontSize = 12;
            try {
              barLabelFontSize = options.timeline.barLabelStyle.fontSize;
            } catch (e) {}
            var barHeight = barLabelFontSize * 2.196;
            var barMargin = barLabelFontSize * 0.75;
            var rowHeight = barHeight + barMargin * 2;
            var chartAreaHeight = rowHeight * data.length;
            var axisHeight = 24;
            var whiteSpaceHeight = 27;
            var chartHeight = chartAreaHeight + axisHeight + whiteSpaceHeight;
            chartHeight = chartHeight > 200 ? 200 : chartHeight;

            container.style.height = chartHeight + "px";
            chart.draw(dataTable, options);
          }
        });
      }
    }
  }, [convertedData]);

  // Add a new state variable to keep track of the isStacked option
  const [isStacked, setIsStacked] = useState(true);

  return (
    <div className="flex flex-col space-y-3">
      <Container className="">
        <Typography variant="h3" style={{ fontWeight: "bold" }} gutterBottom>
          Rock Pile Chart
        </Typography>
        {/* Add a ToggleButtonGroup component to set the isStacked option */}
        <ToggleButtonGroup
          exclusive
          value={isStacked}
          onChange={(event, value) => setIsStacked(value)}
        >
          <ToggleButton value={false}>Not Stacked</ToggleButton>
          <ToggleButton value={true}>Stacked</ToggleButton>
          <ToggleButton value="relative">Relative</ToggleButton>
        </ToggleButtonGroup>
        <div className="relative">
          <RockPile data={chartData} isStacked={isStacked} series={series} />
        </div>
        <div id="gantt-group" className="relative">
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            Gantt Chart
          </Typography>
          <div
            id="gantt-renderer"
            className="flex flex-col items-start space-y-3"
          ></div>
        </div>

        <Typography variant="h3" style={{ fontWeight: "bold" }} gutterBottom>
          Editable Data Table
        </Typography>
        <EditableDataTable
          data={data}
          setData={setData}
          setFilteredData={setFilteredData}
        />
      </Container>
    </div>
  );
}

export default App;
