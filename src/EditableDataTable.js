import React, { useMemo, useState, useEffect, useCallback } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

export default function EditableDatatable({ data, setData, setFilteredData }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "Program",
        header: "Program",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Program Filter" },
        size: 170,
        filterVariant: "multi-select",
      },
      {
        accessorKey: "Project",
        header: "Project",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 170,
        filterVariant: "multi-select",
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Project Filter" },
      },
      {
        accessorKey: "TypeOfWork",
        header: "Type of Work",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 173,
        filterVariant: "multi-select",
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Type of Work" },
      },
      {
        accessorKey: "OptionName",
        header: "Option Name",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 150,
        filterVariant: "multi-select",
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Option Filter" },
      },
      {
        accessorKey: "Building",
        header: "Building",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 160,
        filterVariant: "multi-select",
        muiTableHeadCellFilterTextFieldProps: {
          placeholder: "Building Filter",
        },
      },
      {
        accessorKey: "OccupiedArea",
        header: "Occupied Area",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 180,
        filterVariant: "multi-select",
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Area Filter" },
      },
      // {
      //   accessorKey: "IdentifierKey",
      //   header: "Identifier Key",
      //   muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //     ...getCommonEditTextFieldProps(cell),
      //   }),
      //   muiTableHeadCellFilterTextFieldProps: { placeholder: 'Key Filter' },
      // },
      // {
      //   accessorKey: "Flag",
      //   header: "Flag",
      //   muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //     ...getCommonEditTextFieldProps(cell),
      //   }),
      //   size: 120,
      //   filterVariant: 'multi-select',
      //   muiTableHeadCellFilterTextFieldProps: { placeholder: 'Flag Filter' },
      // },
      // {
      //   accessorKey: "OptionDetails",
      //   header: "Option Details",
      //   muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //     ...getCommonEditTextFieldProps(cell),
      //   }),
      //   size: 200,
      //   muiTableHeadCellFilterTextFieldProps: { placeholder: 'Option Filter' },
      // },
      {
        accessorKey: "DateStart",
        header: "Date Start",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 140,
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Start Date" },
      },
      {
        accessorKey: "DateEnd",
        header: "Date End",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 130,
        muiTableHeadCellFilterTextFieldProps: { placeholder: "End Date" },
      },
      // {
      //   accessorKey: "Maturity",
      //   header: "Maturity",
      //   muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //     ...getCommonEditTextFieldProps(cell),
      //   }),
      //   size: 150,
      //   muiTableHeadCellFilterTextFieldProps: { placeholder: 'Maturity' },
      // },
      {
        accessorKey: "TotalCapitalExpenditure",
        header: "Total Capital Expenditure",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Capital Filter" },
      },
      {
        accessorKey: "Expenditure2023",
        header: "Expenditure 2023",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
        muiTableHeadCellFilterTextFieldProps: {
          placeholder: "2023 Capital Filter",
        },
      },
      {
        accessorKey: "Expenditure2024",
        header: "Expenditure 2024",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
        muiTableHeadCellFilterTextFieldProps: {
          placeholder: "2024 Capital Filter",
        },
      },
      {
        accessorKey: "Expenditure2025",
        header: "Expenditure 2025",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
        muiTableHeadCellFilterTextFieldProps: {
          placeholder: "2025 Capital Filter",
        },
      },
      {
        accessorKey: "Expenditure2026",
        header: "Expenditure 2026",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
        muiTableHeadCellFilterTextFieldProps: {
          placeholder: "2026 Capital Filter",
        },
      },
      {
        accessorKey: "Expenditure2027",
        header: "Expenditure 2027",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
        muiTableHeadCellFilterTextFieldProps: {
          placeholder: "2027 Capital Filter",
        },
      },
      // {
      //   accessorKey: "DRDBKey",
      //   header: "DRDB Key",
      //   muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //     ...getCommonEditTextFieldProps(cell),
      //   }),
      //   size: 160,
      //   muiTableHeadCellFilterTextFieldProps: { placeholder: 'DRDB Filter' },
      // },
      {
        accessorKey: "SME",
        header: "SME",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 150,
        filterVariant: "multi-select",
        muiTableHeadCellFilterTextFieldProps: { placeholder: "SME Filter" },
      },
      {
        accessorKey: "Notes",
        header: "Notes",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Notes" },
      },
      {
        accessorKey: "SpaceCharacterization",
        header: "Space Characterization",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
        filterVariant: "multi-select",
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Space Filter" },
      },
    ],
    []
  );

  const [validationErrors, setValidationErrors] = useState({});
  const [newData, setNewData] = useState(data);
  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          let isValid = false;
          if (
            cell.column.id === "Project" ||
            cell.column.id === "Program" ||
            cell.column.id === "TypeOfWork"
          ) {
            isValid = event.target.value.trim() !== "";
          }
          if (!isValid) {
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      newData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setNewData([...newData]);
      setData([...newData]);
      setFilteredData([...newData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleExportRows = (rows) => {
    setFilteredData(rows.map((row) => row.original));
    setNewData(rows.map((row) => row.original));
    console.log(rows);
  };

  const resetData = () => {
    setFilteredData(data);
    setNewData(data);
    window.location.reload();
  };

  //optionally, you can manage the row selection state yourself
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes...
    // console.info({ rowSelection });
  }, [rowSelection]);

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      defaultColumn={{
        minSize: 20,
        maxSize: 900,
      }}
      enableColumnResizing
      enableColumnOrdering
      enableRowSelection
      // enableRowActions
      //editingMode="modal" //default
      enableFacetedValues
      initialState={{
        density: "compact",
        showColumnFilters: true,
        columnVisibility: {
          Project: false,
          TypeOfWork: false,
          Expenditure2023: false,
          Expenditure2024: false,
          Expenditure2025: false,
          Expenditure2026: false,
          Expenditure2027: false,
        },
        pagination: { pageSize: 25 }
      }}
      onEditingRowSave={handleSaveRowEdits}
      onEditingRowCancel={handleCancelRowEdits}
      onRowSelectionChange={setRowSelection} //connect internal row selection state to your own
      state={{ rowSelection }} //pass our managed row selection state to the table to use
      renderTopToolbarCustomActions={({ table }) => (
        <Box
          sx={{ display: "flex", gap: "1rem", p: "0.5rem", flexWrap: "wrap" }}
        >
          <Button
            color="primary"
            onClick={resetData}
            startIcon={<DownloadForOfflineIcon />}
            variant="contained"
          >
            Reset Graphs
          </Button>
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //render all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<DownloadForOfflineIcon />}
            variant="contained"
          >
            Render Filtered Rows
          </Button>
          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            //only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<DownloadForOfflineIcon />}
            variant="contained"
          >
            Render Selected Graphs
          </Button>
        </Box>
      )}
      muiTableBodyProps={{
        sx: {
          //stripe the rows, make odd rows a darker color
          "& tr:nth-of-type(odd)": {
            backgroundColor: "#fafafa",
          },
        },
      }}
    />
  );
}
