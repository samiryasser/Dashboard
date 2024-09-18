import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { Headings } from "../../Components/Headings";

export const Header = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Headings
        head1="Dashboard"
        head2="Welcome to your dashboard"
        isDashboard={true}
      />
      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{ padding: "3px 8px", textTransform: "capitalize" }}
          variant="contained"
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
    </Stack>
  );
};
