import clsx from "clsx";
import Image from "next/image";
/** Components */
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import whiteLogo from "assets/images/white-logo.png";

const Topbar = () => {
  const classes = useStyles();
  return (
    <Toolbar className={clsx(classes.root, classes.backgroundInitial)}>
      <div className={classes.logoContainer}>
        <Image objectFit="contain" layout="fill" alt="logo" src={whiteLogo} />
      </div>
    </Toolbar>
  );
};

export default Topbar;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 999,
    //@ts-ignore
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(0, 8),
    // },
  },
  backgroundInitial: {
    backgroundColor: theme.palette.primary.main,
  },
  backgroundFinal: {
    backgroundColor: theme.palette.background.paper,
  },
  logoContainer: {
    position: "relative",
    height: "100px",
    width: "210px",
  },
}));
