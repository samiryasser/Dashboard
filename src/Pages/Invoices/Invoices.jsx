import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Headings } from "../../Components/Headings";
import { columns, rows } from "./Data";

export const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Headings head1="Invoices" head2="List Of Invoice Balance" />
      <DataGrid
        checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};
