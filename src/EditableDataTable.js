import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const data = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 25,
  },
];

export default function EditableDatatable({ data, setData }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "Program",
        header: "Program",
      },
      {
        accessorKey: "Project",
        header: "Project",
      },
      {
        accessorKey: "TypeOfWork",
        header: "Type of Work",
      },
      {
        accessorKey: "OptionName",
        header: "Option Name",
      },
      {
        accessorKey: "Building",
        header: "Building",
      },
      {
        accessorKey: "OccupiedArea",
        header: "Occupied Area",
      },
      {
        accessorKey: "IdentifierKey",
        header: "Identifier Key",
      },
      {
        accessorKey: "Flag",
        header: "Flag",
      },
      {
        accessorKey: "OptionDetails",
        header: "Option Details",
      },
      {
        accessorKey: "DateStart",
        header: "Date Start",
      },
      {
        accessorKey: "DateEnd",
        header: "Date End",
      },
      {
        accessorKey: "Maturity",
        header: "Maturity",
      },
      {
        accessorKey: "CapitalExpenditure",
        header: "Capital Expenditure",
      },
      {
        accessorKey: "DRDBKey",
        header: "DRDB Key",
      },
      {
        accessorKey: "SME",
        header: "SME",
      },
      {
        accessorKey: "Notes",
        header: "Notes",
      },
      {
        accessorKey: "SpaceCharacterization",
        header: "Space Characterization",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      defaultColumn={{
        minSize: 20, //allow columns to get smaller than default
        maxSize: 9001, //allow columns to get larger than default
        size: 260, //make columns wider by default
      }}
      enableColumnResizing
      enableColumnOrdering
      enableRowNumbers
      enableRowSelection
      enableRowActions
    />
  );
}
