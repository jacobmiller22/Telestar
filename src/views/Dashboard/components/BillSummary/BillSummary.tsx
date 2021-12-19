/**
 *
 * This is a component of the Dashboard. It is responsible for displaying the bill summary.
 *
 * The component is responsible for showing authenticated content to only authenticated users.
 *
 */
import _ from "lodash";
import { MONTHS } from "consts";
import useAuth from "hooks/Auth/useAuth";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoRounded";

const bills = [
  {
    name: "Spotify",
    amount: "4.99",
    date: new Date(),
    frequency: "monthly",
    estimated: false,
  },
  {
    name: "Appalachian Power",
    amount: "50.00",
    date: new Date(),
    frequency: "monthly",
    estimated: true,
  },
];

const BillSummary = () => {
  /** The renderBills component requires authenticated information */
  const renderBills = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated || !bills) {
      return null;
    }

    const underlineStyles = { textDecoration: "underline" };
    return _.map(bills, ({ name, amount, date, frequency, estimated }, i) => {
      return (
        <Card
          sx={{ marginBottom: "8px", padding: "8px" }}
          key={`bill-summary-bill-${i}`}
        >
          <Grid container alignItems="center">
            <Grid item>
              <Typography align="center">
                {MONTHS[date.getMonth()].short}.
              </Typography>
              <Typography align="center">{date.getDay()}</Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginInline: "8px" }}
            />
            <Grid item>
              <Typography gutterBottom={false}>{name}</Typography>
            </Grid>
            <div style={{ flexGrow: 1 }}></div>
            <Grid item>
              <Typography align="right" sx={estimated ? underlineStyles : {}}>
                ${amount}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      );
    });
  };

  return (
    <Card variant="outlined">
      <CardHeader title="Upcoming Bills" />
      <Divider variant="middle" />
      <CardContent>{renderBills()}</CardContent>
      <Divider variant="middle" />
      <CardActions>
        {/* <Button>View Bills</Button> */}
        <div style={{ flexGrow: 1 }}></div>
        <Button>Track a Bill</Button>
        <Tooltip
          arrow
          placement="top-end"
          title="Underlined amounts are estimates. Estimates are calculated using previously recorded statements."
        >
          <InfoIcon color="primary" />
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default BillSummary;
