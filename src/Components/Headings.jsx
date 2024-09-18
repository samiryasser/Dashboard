import { Box, Typography, useTheme } from "@mui/material";

export const Headings = ({ head1, head2, isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 1 : 3}>
      <Typography
        variant="h5"
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
      >
        {head1}
      </Typography>
      <Typography variant="body1">{head2}</Typography>
    </Box>
  );
};
