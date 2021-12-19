/**
 *
 * This is a component of the Dashboard. It is responsible for displaying the goal summary.
 *
 * The component is responsible for showing authenticated content to only authenticated users.
 *
 */
import useAuth from "hooks/Auth/useAuth";

/** Components */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import NormalBar from "components/Vis/NormalBar";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";

const GoalSummary = () => {
  const renderGoals = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated || !goals) {
      return null;
    }

    return (
      <NormalBar data={goals} keys={["goal", "current"]} y_label="Dollars" />
    );
  };

  return (
    <Card variant="outlined">
      <CardHeader title="Goal Summary" />
      <Divider variant="middle" />
      <CardContent>{renderGoals()}</CardContent>
      <Divider variant="middle" />
      <CardActions>
        <div style={{ flexGrow: 1 }} />
        <Button>View Goals</Button>
      </CardActions>
    </Card>
  );
};

export default GoalSummary;

const goals = [
  {
    name: "Emergency Fund",
    goal: 4000,
    current: 2400,
  },
  {
    name: "Income",
    goal: 3000,
    current: 1398,
  },
  {
    name: "Roth IRA Contributions",
    goal: 6000,
    current: 0,
  },
];
