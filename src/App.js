import React, { useState, useEffect } from "react";
import { Typography, Container, Box } from "@mui/material";
import EditableDataTable from "./EditableDataTable";
import GanttChart from "./GanttChart";
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
  const [testData, setTestData] = useState([
    {
      OccupiedArea: "Levels 1-5",
      rows: [
        {
          Program: "LMXT",
          Project: "Design Work Space",
          TypeOfWork: "LRP",
          OptionName: "A",
          Building: "L-10",
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
      ],
    },
    {
      OccupiedArea: "Bay 2",
      rows: [
        {
          Program: "F-22",
          Project: "AFF",
          TypeOfWork: "Potential",
          OptionName: "A",
          Building: "L-64",
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
      ],
    },
  ]);

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

  // Convert the data into the desired format
  const [convertedData, setConvertedData] = useState(convertData(filteredData));
  useEffect(() => {
    // Convert the filteredData whenever it changes
    setConvertedData(convertData(filteredData));
  }, [filteredData]);

  return (
    <div>
      <Container>
        {/* <GanttChart data={filteredData} /> */}
        <GanttRenderer filteredData={convertedData} />
        <Box padding="20px"></Box>
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
