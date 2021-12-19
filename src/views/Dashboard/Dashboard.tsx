/**
 *
 * Dashboard gives a quick overview of users financial data.
 * This includes:
 *  Charts outlining the users income, expenses.
 *
 */

import React from "react";
/** Components */

import Card from "@mui/material/Card";
import {
  CardHeader,
  Grid,
  Paper,
  Typography,
  Divider,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { InventorySummary } from "./components";

const Dashboard = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ maxWidth: "1000px", border: "1px solid red", marginTop: "16px" }}
    >
      <Grid xs={5} item>
        <Card variant="outlined">
          <CardHeader title="Inventory" />
          <Divider variant="middle" />
          <CardContent>
            <InventorySummary />
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={7} container item spacing={2}>
        <Grid xs={12} item></Grid>
        <Grid xs={12} item></Grid>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
