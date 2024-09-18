import { DownloadOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { LineChart } from "../../Components/LineChart";
import { Transactions } from "./data";

export const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={1.5}>
      <Paper sx={{ maxWidth: "900px", flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mt={1}
              mb={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineChart isDashboard={true} />
      </Paper>
      <Box
        sx={{
          maxHeight: "380px",
          minWidth: "250px",
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        <Box sx={{ height: "400px", overflow: "auto" }}>
          {Transactions.map((item) => {
            return (
              <Paper
                key={item.date}
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box p={1.2}>
                  <Typography varian="body1" fontWeight="600">
                    {item.txId}
                  </Typography>
                  <Typography varian="body2">{item.user}</Typography>
                </Box>
                <Typography varian="body1">{item.date}</Typography>
                <Typography
                  borderRadius={1.4}
                  variant="body2"
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                >
                  {item.cost}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
};
