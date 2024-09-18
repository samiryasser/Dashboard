import { Box, Typography, useTheme } from "@mui/material";

export const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} align="center">
        Path Not Found
        <br />
        <br />
        <br />
        Please Choose correct page!
      </Typography>
    </Box>
  );
};
