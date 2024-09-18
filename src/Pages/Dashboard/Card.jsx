import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { data1, data2, data3, data4 } from "./data";
export const Card = ({ icon, title, subTitle, increase, index, scheme }) => {
  console.log(scheme);
  const theme = useTheme();
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <Stack direction="column" gap={1}>
        {icon === "Email" && (
          <Email
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        )}
        {icon === "PointOfSale" && (
          <PointOfSale
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        )}
        {icon === "PersonAdd" && (
          <PersonAdd
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        )}
        {icon === "Traffic" && (
          <Traffic
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        )}
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          {subTitle}
        </Typography>
      </Stack>
      <Stack direction="column" alignItems={"center"}>
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          <Box sx={{ height: "70px", width: "70px" }}>
            <ResponsivePie
              data={
                index == 1
                  ? data1
                  : index == 2
                  ? data2
                  : index == 3
                  ? data3
                  : data4
              }
              margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.5}
              theme={{
                background: theme.palette.background.paper,
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: "#dddddd",
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: theme.palette.text.primary,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#fff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={{ scheme: scheme }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              enableArcLabels={false}
              enableArcLinkLabels={false}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
            />
          </Box>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          {increase}
        </Typography>
      </Stack>
    </Paper>
  );
};
