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
        size: 150,
      },
      {
        accessorKey: "Project",
        header: "Project",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 150, 
      },
      {
        accessorKey: "TypeOfWork",
        header: "Type of Work",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 170, 
      },
      {
        accessorKey: "OptionName",
        header: "Option Name",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 170,
      },
      {
        accessorKey: "Building",
        header: "Building",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 140,
      },
      {
        accessorKey: "OccupiedArea",
        header: "Occupied Area",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 180,
      },
      {
        accessorKey: "IdentifierKey",
        header: "Identifier Key",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "Flag",
        header: "Flag",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 100,
      },
      {
        accessorKey: "OptionDetails",
        header: "Option Details",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "DateStart",
        header: "Date Start",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 140,
      },
      {
        accessorKey: "DateEnd",
        header: "Date End",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 130,
      },
      {
        accessorKey: "Maturity",
        header: "Maturity",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 150,
      },
      {
        accessorKey: "CapitalExpenditure",
        header: "Capital Expenditure",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 200,
      },
      {
        accessorKey: "DRDBKey",
        header: "DRDB Key",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "SME",
        header: "SME",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 150,
      },
      {
        accessorKey: "Notes",
        header: "Notes",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "SpaceCharacterization",
        header: "Space Characterization",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        size: 250,
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
      setFilteredData([...newData])
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleExportRows = (rows) => {
    setFilteredData(rows.map((row) => row.original));
    setNewData(rows.map((row) => row.original));
    console.log(rows)
  };

  const resetData = () => {
    setFilteredData(data)
    setNewData(data)
  }

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
        minSize: 20, //allow columns to get smaller than default
        maxSize: 900, //allow columns to get larger than default
      }}
      enableColumnResizing
      enableColumnOrdering
      enableRowSelection
      enableRowActions
      enableEditing
      editingMode="modal" //default
      initialState={{ density: 'compact' }}
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
            onClick={() => resetData}
            startIcon={<DownloadForOfflineIcon />}
            variant="contained"
          >
            Reset Graphs
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
    />
  );
}
