import { Box } from "@mui/material";
import { Header } from "./header";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { Row3 } from "./Row3";

export const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};
