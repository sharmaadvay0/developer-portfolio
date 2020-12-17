import React, { Fragment } from "react";
import { AppBar, Button, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import "../App.css";
import { CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#3E78B2" }}>
        <Toolbar>
          <Typography style={{ fontSize: 30 }} className="text">
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Advay Sharma
            </Link>
          </Typography>
          <Button
            style={{
              marginLeft: "30px",
              marginTop: "5px",
              fontSize: 16,
            }}
          >
            <Link
              to="/projects"
              style={{ color: "black", textDecoration: "none" }}
            >
              Projects
            </Link>
          </Button>
          <Button
            style={{
              marginLeft: "30px",
              marginTop: "5px",
              fontSize: 16,
            }}
          >
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About Me
            </Link>
          </Button>
          <div className="socialIcons">
            <div className="leftSocialIcon">
              <SocialIcon
                url="https://www.linkedin.com/in/advaysharma/"
                bgColor="black"
                fgColor="white"
              />
            </div>
            <div>
              <SocialIcon
                url="https://github.com/sharmaadvay0"
                bgColor="black"
                fgColor="white"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
