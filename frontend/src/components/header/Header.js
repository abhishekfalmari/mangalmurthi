import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    width: 1170,
    margin: "auto",
  },
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1",
  },

  AppBar: {
    backgroundColor: "orange",
    backgroundSize: "cover",
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },

  avatar: {
    height: "100%",
    borderRadius: 0,
    width: "130px",
  },

  loginButton: {
    background: "blue",
    color: "#fff",
    borderRadius: "25px",
    margin: "0px 15px",

    "&:hover": {
      background: "#e91e63",
      boxShadow: "0px 2px 10px #888888",
    },
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState();
  const [open, setOpen] = useState(false);

  const handleMenu = (event) => {
    setOpen(true);
    setAnchorEl({ anchorEl: event.currentTarget });
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl({ anchorEl: null });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid sm={4} xs={4}>
              <div style={{ display: "flex" }}>
                <div onClick={handleMenu}>
                  <Button color="inherit" className={classes.buttonFontSize}>
                    Home
                  </Button>
                  <ArrowDropDownIcon
                    style={{ verticalAlign: "middle", marginLeft: "-10px" }}
                  />
                </div>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
                <div onClick={handleMenu}>
                  <Button color="inherit" className={classes.buttonFontSize}>
                    Products
                  </Button>
                  <ArrowDropDownIcon
                    style={{ verticalAlign: "middle", marginLeft: "-5px" }}
                  />
                </div>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            </Grid>
            <Grid
              sm={4}
              xs={4}
              style={{ textAlign: "-webkit-center" }}
              className={classes.grow}
            >
              {/* <Button className={[classes.mainLogo]}> */}
              <Avatar
                src="assets/images/logo/mangalmurthi.png"
                className={classes.avatar}
              />
              {/* </Button> */}
            </Grid>
            <Grid sm={4} xs={4} style={{ textAlignLast: "end" }}>
              <Button
                color="inherit"
                className={[classes.buttonFontSize, classes.loginButton]}
              >
                Sign up
              </Button>
              <Button
                color="inherit"
                className={[classes.buttonFontSize, classes.loginButton]}
              >
                Login
              </Button>
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Header;
