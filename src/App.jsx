import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, styled } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./Components/SideBar";
import { getDesignTokens } from "./Components/Theme";
import { TopBar } from "./Components/TopBar";
import("@mui/material");

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const handleSetTheme = (text) => {
    setMode(text);
    localStorage.setItem("currentMode", text);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          onTheme={handleSetTheme}
        />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
