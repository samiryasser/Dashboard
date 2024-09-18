import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { BarChart } from "../../Components/Bar";
import { Geo } from "../../Components/Geo";
import PieChart from "../../Components/PieChart";

export const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" mt={2} flexWrap={"wrap"} gap={1.5}>
      <Paper sx={{ width: "28%", minWidth: "350px", flexGrow: "1" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={"600"}
        >
          Campaign
        </Typography>
        <PieChart isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          {" "}
          Include extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "350px", flexGrow: "1" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Saled Quantity
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "350px", flexGrow: "1" }}>
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};
