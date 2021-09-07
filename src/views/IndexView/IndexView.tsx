/** Components */
import { Hero } from "./components";
import { Grid, Divider, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextBlob } from "components/atoms";
import {
  TextImageBlob,
  ActionIconBlob,
  CommentCard,
} from "components/molecules";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HelpIcon from "@material-ui/icons/Help";
import img1 from "assets/images/img-1.png";
import img2 from "assets/images/img-2.png";
import img3 from "assets/images/img-3.png";

const IndexView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <Hero />
      </div>

      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignContent="center"
        >
          <TextBlob
            align="center"
            variant="h3"
            title="We're The Telecom Company That Scares The Big Guys"
            subtitle="Telestar is the all-in-one unified communication and collaboration solution that combines a feature-rich cloud-based phone system with web and video conferencing, file sharing & backup, and so much more! Telestar goes where you go, with the desktop and mobile apps that keep you seamlessly connected."
          />
          <div>Video</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <TextBlob
            align="center"
            variant="h2"
            title="Everything you can do with Telestar"
          />
          <TextImageBlob
            textBlobProps={{
              variant: "h4",
              title:
                "Talk to anyone through phone, text, video, email, and instant messaging.",
              subtitle:
                "Get more value out of your phone. Simplify your business communications with a single product that does what you need, when you need it.",
            }}
            img={img1}
          />
          <TextImageBlob
            reverse
            textBlobProps={{
              variant: "h4",
              title: "Streamline workflows with Contact Center",
              subtitle:
                "With Telestar Contact Center, you can differentiate from the competition where it matters most – the customer experience.",
            }}
            img={img2}
          />
          <TextImageBlob
            textBlobProps={{
              variant: "h4",
              title:
                "Achieve more by integrating Microsoft Teams with your phone system.",
              subtitle:
                "Now you can connect with teams and customers all in one place.",
            }}
            img={img3}
          />
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <ActionIconBlob
            icon={<LocalOfferIcon />}
            title="SEE OUR PRICING"
            body="Whether you’re a solopreneur or a team of 100, Telestar has you covered with its powerful all-in-one solution."
            actionProps={{
              children: "Pricing",
              variant: "contained",
              color: "primary",
            }}
          />
          <ActionIconBlob
            icon={<HelpIcon />}
            title="NEED HELP?"
            body="Not all business are the same. Let us come to you and create a customized solution for your business today."
            actionProps={{
              children: "Schedule",
              variant: "contained",
              color: "primary",
            }}
          />
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <CommentCard>
                  Telestar is our go-to for all things business phone, sms, and
                  conferencing. We were unhappy with some of their competitors
                  because service was unrelieable, and the admin panels were
                  clunky. Telestar is constantly updating their systems, and
                  customer service is top-notch. It's an added bonus too that
                  the cost is less than what we were paying before - for more
                  features. We highly recommend Telestar and the entire team!
                </CommentCard>
              </Grid>
              <Grid item xs={4}>
                <CommentCard>
                  After switching from a competitor to Telestar, we actually
                  started receiving more calls, booked more appointments, and
                  have increased our revenue. Customer service is outstanding. I
                  highly recommend you having a conversation with Telestar if
                  you own a service based business.
                </CommentCard>
              </Grid>
              <Grid item xs={4}>
                <CommentCard>
                  If you are looking for a phone provider that gets things done,
                  Keith Miller and Telestar are your must use! We have been
                  using Telestar for several years now for our extremely busy
                  insurance agency. With 3 locations in Virginia, having our
                  phones on point is critical. Having switched from a “larger
                  company” due to poor customer service and phone issues, Keith
                  is committed to that not being a problem with for his clients.
                  Huge thanks for Telestar for keeping us in communication with
                  our clients.
                </CommentCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IndexView;

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },
  container: {
    paddingTop: "75px",
  },
  hero: {
    backgroundColor: theme.palette.primary.main,
  },
}));
