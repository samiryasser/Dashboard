import { Stack } from "@mui/material";
import { Card } from "./Card";
export const Row1 = () => {
  const localData = [
    {
      icon: "Email",
      title: "12,361",
      subTitle: "Emails Sent",
      increase: "+14%",
      scheme: "category10",
    },
    {
      icon: "PointOfSale",
      title: "431,225",
      subTitle: "Sales obtained",
      increase: "+21%",
      scheme: "accent",
    },
    {
      icon: "PersonAdd",
      title: "32,441",
      subTitle: "New Clients",
      increase: "+5%",
      scheme: "dark2",
    },
    {
      icon: "Traffic",
      title: "1,325,134",
      subTitle: "Traffic Received",
      increase: "+5%",
      scheme: "paired",
    },
  ];
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      {localData.map((item, index) => {
        return (
          <Card
            key={item.icon}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
            index={index + 1}
            increase={item.increase}
            scheme={item.scheme}
          />
        );
      })}
    </Stack>
  );
};
