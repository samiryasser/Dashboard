import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Headings } from "../../Components/Headings";
import { rows } from "./Data";

export const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              padding: "5px",
              width: "99px",
              borderradius: "3px",
              color: "white",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access === "Manager" && <SecurityOutlined fontSize="small" />}
            {access === "User" && <LockOpenOutlined fontSize="small" />}
            <Typography sx={{ fontSize: "13px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Headings head1="Team" head2="Managing the team members" />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};
