import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo.svg";
import {
  AppBar,
  Button,
  CssBaseline,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStiles = makeStyles((theme) => ({
  logo: {
    height: "6em",
  },
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  tab: {
    color: "white !important",
    textTransform: "none !important",
    fontSize: "1rem !important",
    fontFamily: "Raleway !important",
    marginRight: "25px !important",
  },
  button: {
    borderRadius: "50px !important",
    textTransform: "none !important",
    background: "yellow !important",
    color: "black !important",
  },
}));

const Header = (props) => {
  const classes = useStiles();
  const [activeTab, setActiveTab] = useState(0);
  const handelTabChange = (e, newValue) => {
    setActiveTab(newValue);
  };

  const theme = useTheme();
  console.log("teme", theme);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <img alt="company logo" className={classes.logo} src={logo} />
            <Tabs
              value={activeTab}
              onChange={handelTabChange}
              sx={{ ml: "auto" }}
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="the revolution" />
              <Tab className={classes.tab} label="contact us" />
              <Tab className={classes.tab} label="about us" />
            </Tabs>
            <Button className={classes.button} variant="contain">
              Free Estimate{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" className={classes.toolBarMargin} />
    </React.Fragment>
  );
};

export default Header;
