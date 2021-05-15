import React from "react";
import { Button, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function SimpleBottomNavigation() {
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
