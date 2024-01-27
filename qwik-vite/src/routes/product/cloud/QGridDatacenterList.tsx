/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import { Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#b4e1d9",
      main: "#1b9c84",
      dark: "#07523e",
      contrastText: "#e1f3f0",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function GridDatacenterList({ data }: { data: string[] }) {
  const [dense, useDense] = useState(false);
  const [secondary, useSecondary] = useState(false);

  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Datacenter List
      </Typography>
      <Demo>
        <List dense={dense}>
          {data?.map((datacenter: any, index: number) => {
            return (
              <ListItem key={index}>
                <ListItemText
                  sx={{
                    color: theme.palette.primary.main,
                    display: "inline",
                    fontWeight: "bold",
                    mx: 0.5,
                    fontSize: 14,
                  }}
                  primary={datacenter}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            );
          })}
        </List>
      </Demo>
    </Grid>
  );
}

export const QGridDatacenterList = qwikify$(GridDatacenterList);
