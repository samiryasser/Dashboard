import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Headings } from "../../Components/Headings";
import { columns, rows } from "./Data";

export const Contact = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Headings head1="Contacts" head2="List Of Contacts For Future Refrence" />
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};
