import { useState } from "react";
import Image from "next/image";
import axios from "axios";

/** Components */
import {
  Grid,
  Container,
  Typography,
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
  colors,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "components/atoms";
import heroImg from "assets/images/hero-img.png";

const Hero = () => {
  const classes = useStyles();

  const [state, setState] = useState<string>("");
  const [values, setValues] = useState({
    email: "",
  });

  const onChange = (e) => {
    if (state !== "success") setState("");
    setValues({ ...values, email: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setState("submitting");
    const res = await axios.post("/api/airtable", values);
    setState(res.status == 200 ? "success" : "error");
    setValues({ email: "" });
    setTimeout(() => setState(""), 5000);
  };

  const renderMessage = () => {
    if (state === "submitting") return <>Submitting</>;

    if (state === "error")
      return (
        <>There has been an error whilist subscribing. Please try again later</>
      );
    if (state === "success")
      return <>Successfully Subscribed. Thank you for your input.</>;
    return (
      <>
        We help small businesses communicate better everyday with our all in one
        communications platform. Work better. From wherever.
      </>
    );
  };

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.root} alignItems="center">
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Typography variant="h3">Rethinking Communications</Typography>
            <Typography variant="h4">With Telestar</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">{renderMessage()}</Typography>
          </Grid>
          <Grid item xs={12}>
            <form className={classes.inputContainer} onSubmit={onSubmit}>
              <FormControl
                fullWidth
                variant="outlined"
                className={classes.formControl}
              >
                <OutlinedInput
                  onChange={onChange}
                  value={values.email}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={onSubmit}>
                        <Icon
                          fontIconClass="fas fa-paper-plane"
                          fontIconColor={colors.indigo[900]}
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Enter your email"
                />
              </FormControl>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Image alt="hero" src={heroImg} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: "85vh",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    // border: "1px solid black",
    borderRadius: "6px",
  },
  formControl: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiInputBase-root": {
      color: theme.palette.primary.dark,
    },
    "& .MuiInputAdornment-root i": {
      color: `${theme.palette.primary.dark} !important`,
    },
  },
}));
