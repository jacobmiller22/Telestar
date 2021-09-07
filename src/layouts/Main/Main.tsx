/** Components */
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Topbar } from "./components";

const Main = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.topbar}>
        <Topbar />
      </div>
      <Divider variant="middle" />
      <main>{children}</main>
    </div>
  );
};

export default Main;

const useStyles = makeStyles((theme) => ({
  topbar: {
    backgroundColor: theme.palette.primary.main,
  },
}));
