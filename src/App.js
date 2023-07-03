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

    // Convert the grouped data into an array of new JSON objects
    const convertedData = Object.entries(groupedData).map(
      ([occupiedArea, rows]) => ({
        OccupiedArea: occupiedArea,
        rows: rows,
      })
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
  

  // Convert the data into the desired format
  const [convertedData, setConvertedData] = useState(convertData(filteredData));
  // Convert filteredData into a format that can be used by RockPile component
  const { rows: chartData, series } = convertDataForChart(filteredData);
  useEffect(() => {
    // Convert the filteredData whenever it changes
    setConvertedData(convertData(filteredData));
    // setConvertedChartData(convertDataForChart(filteredData));
  }, [filteredData]);

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
        <RockPile data={chartData} isStacked={isStacked} series={series} />
        <Typography variant="h3" gutterBottom style={{ fontWeight: "bold" }}>
          Gantt Chart
        </Typography>
        <GanttRenderer filteredData={convertedData} />
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
