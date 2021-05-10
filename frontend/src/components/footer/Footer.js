import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const Footer = () => (
    <footer className="footer">
      <Grid container>
        <Grid item xs={6} style={{ alignSelf: "center" }}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Grid>
        <Grid item xs={6}>
          <Button color="primary" size="small" variant="contained">
            Contact
          </Button>
        </Grid>
      </Grid>
    </footer>
  );

  return <Footer />;
}
