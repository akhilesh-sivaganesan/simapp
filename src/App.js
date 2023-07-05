import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import EditableDataTable from "./EditableDataTable";
import RockPile from "./RockPile";
import GanttRenderer from "./GanttRenderer";

function App() {
  const [data, setData] = useState([
    {
      Program: "LMXT",
      Project: "Design Work Space",
      TypeOfWork: "LRP",
      OptionName: "A",
      Building: "L-10",
      OccupiedArea: "Levels 1-5",
      IdentifierKey: "LMXTDesign Work SpaceLRPAL-10Levels 1-5",
      Flag: "Primary",
      OptionDetails: "Based on LMXT Team Feedback",
      DateStart: 2023,
      DateEnd: 2037,
      Maturity: "Capital Review",
      CapitalExpenditure: "$8,269,000",
      DRDBKey: ["R25769", "R25777", "R25780", "R25784", "R25785", "R25786"],
      SME: "Adrian Gibson",
      Notes:
        "LMXT Building interior design for Engineering, contract award 2025",
      SpaceCharacterization: "Design",
    },
    {
      Program: "F-22",
      Project: "AFF",
      TypeOfWork: "Potential",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      IdentifierKey: "F-22AFFPotentialAL-64Bay 2",
      Flag: "Primary",
      OptionDetails: "Based on 2022 Marietta WIP",
      DateStart: 2028,
      DateEnd: 2030,
      Maturity: "Capital Review",
      CapitalExpenditure: "$8,400,000",
      DRDBKey: ["R24036"],
      SME: "Patel Pathik J",
      Notes: "Maintain F-22 rate of turnaround for sustainment",
      SpaceCharacterization: "Sustainment",
    },
    {
      Program: "F-22",
      Project: "AFF",
      TypeOfWork: "LRP",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      IdentifierKey: "F-22AFFLRPAL-64Bay 2",
      Flag: "Primary",
      OptionDetails: "Based on 2022 Marietta WIP",
      DateStart: 2026,
      DateEnd: 2028,
      Maturity: "Capital Review",
      CapitalExpenditure: "$8,400,000",
      DRDBKey: ["R24036"],
      SME: "Patel Pathik J",
      Notes: "Maintain F-22 rate of turnaround for sustainment",
      SpaceCharacterization: "Sustainment",
    },
    {
      Program: "F-22",
      Project: "AFF",
      TypeOfWork: "Firm",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      IdentifierKey: "F-22AFFFirmAL-64Bay 2",
      Flag: "Primary",
      OptionDetails: "Based on 2022 Marietta WIP",
      DateStart: 2024,
      DateEnd: 2026,
      Maturity: "Capital Review",
      CapitalExpenditure: "$8,400,000",
      DRDBKey: ["R24036"],
      SME: "Patel Pathik J",
      Notes: "Maintain F-22 rate of turnaround for sustainment",
      SpaceCharacterization: "Sustainment",
    },
    {
      Program: "F-22",
      Project: "AFF",
      TypeOfWork: "LRP",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 1",
      IdentifierKey: "F-22AFFLRPAL-64Bay 1",
      Flag: "Alt",
      OptionDetails: "Alternative Plan",
      DateStart: "2024",
      DateEnd: "2026",
      Maturity: "N/A",
      CapitalExpenditure: "$8,400,000",
      DRDBKey: ["N/A"],
      SME: "Patel Pathik J",
      Notes: "Estimated Cost of Bay 1 in relation to Bay 2",
      SpaceCharacterization: "Sustainment",
    },
    {
      Program: "Program C",
      Project: "AFF Expansion",
      TypeOfWork: "LRP",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      IdentifierKey: "Program CAFF ExpansionLRPAL-64Bay 2",
      Flag: "Primary",
      OptionDetails: "Based on 2022 Marietta WIP",
      DateStart: 2025,
      DateEnd: 2040,
      Maturity: "Pushed to 2025",
      CapitalExpenditure: "$10,223,000",
      DRDBKey: [],
      SME: "Lanning Christine",
      Notes: "Occupancy in 2026",
      SpaceCharacterization: "Expansion",
    },
    {
      Program: "Program C",
      Project: "AFF",
      TypeOfWork: "Firm",
      OptionName: "A",
      Building: "L-64",
      OccupiedArea: "Bay 3",
      IdentifierKey: "Program CAFFFirmAL-64Bay 3",
      Flag: "Primary",
      OptionDetails: "Currently Occupied",
      DateStart: 2023,
      DateEnd: 2040,
      Maturity: "N/A",
      CapitalExpenditure: "$0",
      DRDBKey: [],
      SME: "Lanning Christine",
      Notes: "",
      SpaceCharacterization: "",
    },
    {
      Program: "P209",
      Project: "General Assemby",
      TypeOfWork: "LRP",
      OptionName: "A",
      Building: "B54",
      OccupiedArea: "All",
      IdentifierKey: "P209General AssembyLRPAB54All",
      Flag: "Primary",
      OptionDetails: "Facilities Recommended",
      DateStart: "2024",
      DateEnd: "2040",
      Maturity: "N/A",
      CapitalExpenditure: "$4,085,000",
      DRDBKey: ["R25511"],
      SME: "Reiman Britt",
      Notes: "Need April 2025",
      SpaceCharacterization: "Collateral",
    },
    {
      Program: "F-22",
      Project: "AFF",
      TypeOfWork: "LRP",
      OptionName: "B",
      Building: "L-64",
      OccupiedArea: "Bay 1",
      IdentifierKey: "F-22AFFLRPBL-64Bay 1",
      Flag: "Alt",
      OptionDetails: "Alternative Plan",
      DateStart: 2023,
      DateEnd: 2026,
      Maturity: "N/A",
      CapitalExpenditure: "$0",
      DRDBKey: ["N/A"],
      SME: "",
      Notes: "",
      SpaceCharacterization: "",
    },
    {
      Program: "Program C",
      Project: "AFF",
      TypeOfWork: "LRP",
      OptionName: "B",
      Building: "L-64",
      OccupiedArea: "Bay 1",
      IdentifierKey: "Program CAFF LRPBL-64Bay 1",
      Flag: "Alt",
      OptionDetails: "Alternative Plan",
      DateStart: "2025",
      DateEnd: "2040",
      Maturity: "Pushed to 2025",
      CapitalExpenditure: "$10,223,000",
      DRDBKey: ["N/A"],
      SME: "Lanning, Christine",
      Notes: "Occupancy in 2027",
      SpaceCharacterization: "Expansion",
    },
    {
      Program: "P209",
      Project: "General Assembly",
      TypeOfWork: "LRP",
      OptionName: "B",
      Building: "L-10",
      OccupiedArea: "Levels 1-5",
      IdentifierKey: "P209General AssembyLRPBL-10Levels 1-5",
      Flag: "Alt",
      OptionDetails: "Alternative Plan",
      DateStart: "2024",
      DateEnd: "2040",
      Maturity: "N/A",
      CapitalExpenditure:
        "Capabilities, total space, ICD705, transport of classified materials, equipment current, Total Capital graph comparison between different options",
      DRDBKey: ["N/A"],
      SME: "Reiman Britt",
      Notes: "Alternative, deemed B54 better option cost-wise",
      SpaceCharacterization: "Final Integration",
    },
    {
      Program: "Program C",
      Project: "AFF",
      TypeOfWork: "LRP",
      OptionName: "C",
      Building: "New Classified AFF Facility",
      OccupiedArea: "All",
      IdentifierKey: "Program CAFF LRPCNew Classified AFF FacilityAll",
      Flag: "Alt",
      OptionDetails: "Theoretical Building",
      DateStart: 2025,
      DateEnd: 2040,
      Maturity: "N/A",
      CapitalExpenditure: "$50,000,000",
      DRDBKey: ["N/A"],
      SME: "Lanning Christine",
      Notes: "Theoretical New Building, WAG",
      SpaceCharacterization: "Design & Construction",
    },
    {
      Program: "F-22",
      Project: "AFF",
      TypeOfWork: "LRP",
      OptionName: "C",
      Building: "L-64",
      OccupiedArea: "Bay 2",
      IdentifierKey: "F-22AFFLRPCL-64Bay 2",
      Flag: "Alt",
      OptionDetails: "F-22 using L64 after Prog. C AFF Expansion",
      DateStart: 2025,
      DateEnd: 2040,
      Maturity: "N/A",
      CapitalExpenditure: "$10,223,000",
      DRDBKey: ["R25503"],
      SME: "Patel Pathik J",
      Notes: "Assuming F-22 uses Prog C AFF Expansion Building",
      SpaceCharacterization: "Speedline",
    },
    {
      Program: "F-22",
      Project: "AFF",
      TypeOfWork: "LRP",
      OptionName: "C",
      Building: "New AFF Facility",
      OccupiedArea: "All",
      IdentifierKey: "F-22AFFLRPCNew AFF FacilityAll",
      Flag: "Alt",
      OptionDetails: "New AFF Building for F-22",
      DateStart: 2025,
      DateEnd: 2040,
      Maturity: "N/A",
      CapitalExpenditure: "$175,000,000",
      DRDBKey: ["N/A"],
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
      LMXT: "#A52A2A",
      "F-22": "#5b6be1",
      "Program C": "#FF0000",
      P209: "#A52A2A",
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

    // Define the adjustment amount for each Project
    const adjustments = {
      AFF: -30,
      "AFF Expansion": -60,
      "Design Work Space": -30,
      "General Assembly": -30,
    };

    // Convert the grouped data into an array of new JSON objects
    const convertedData = Object.entries(groupedData).map(
      ([occupiedArea, rows]) => {
        // Create an array of color codes for each row
        const rowColors = rows.map((row) => {
          // Get the base color for the current Program
          const baseColor = colors[row.Program];

          // Get the adjustment amount for the current Project
          const adjustment = adjustments[row.Project];

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
      LMXT: "#A52A2A",
      "F-22": "#5b6be1",
      "Program C": "#FF0000",
      P209: "#008000",
    };

    // Define the areaOpacity for each Project
    const opacities = {
      AFF: 0.5,
      "AFF Expansion": 0.2,
      "Design Work Space": 0.5,
      "General Assembly": 0.5,
    };

    // Define the lineDashStyle for each TypeOfWork
    const lineDashStyles = {
      LRP: [10, 2],
      Firm: null,
      Potential: [2, 2],
    };

    filteredData.forEach((row) => {
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
      const capitalExpenditurePerYear = capitalExpenditure / yearsInDevelopment;

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

    return { rows, series };
  };
  const convertDataForMultipleCharts = (convertedData) => {
    return convertedData.map((groupObj) => {
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

  // Convert the data into the desired format
  const [convertedData, setConvertedData] = useState(convertData(filteredData));
  // Convert filteredData into a format that can be used by RockPile component
  const { rows: chartData, series } = convertDataForChart(filteredData);
  useEffect(() => {
    // Convert the filteredData whenever it changes
    setConvertedData(convertData(filteredData));
    console.log("Converted Data for GANTT: ");
    console.log(convertedData);
    console.log("Converted Multiple RockPile Data: ");
    console.log(convertDataForMultipleCharts(convertedData));
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
            heading.textContent = "Rockpile: " + groupObj.OccupiedArea;

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
              title: "Site Utilization Rock Pile",

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
              isStacked: isStacked,
              lineWidth: 3,
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

            heading.textContent = "GANTT: " + groupObj.OccupiedArea;
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
            <p><span class'font-bold'>DRDB Key:</span> ${item.DRDBKey.join(
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
              // colors: convertedData[i].rowColors
              colors: ["#A52A2A", "#5b6be1", "#FF0000", "#A52A2A"],
            };

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
