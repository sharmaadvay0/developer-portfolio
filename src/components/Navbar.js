import React, { Fragment } from "react";
import { AppBar, Button, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import "../App.css";
import { CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const landscape = useMediaQuery({ query: "(orientation: landscape)" });
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="sticky" style={{ backgroundColor: "#3E78B2" }}>
        <Toolbar>
          <Typography style={{ fontSize: 30, color: "black" }} className="text">
            {/* <Link to="/" style={{ color: "black", textDecoration: "none" }}> */}
            Advay Sharma
            {/* </Link> */}
          </Typography>
          <Button
            style={{
              marginLeft: "30px",
              marginTop: "5px",
              fontSize: 16,
            }}
          >
            {/* <Link
              to="/projects"
              style={{ color: "black", textDecoration: "none" }}
            > */}
            Projects
            {/* </Link> */}
          </Button>
          <Button
            style={{
              marginLeft: "30px",
              marginTop: "5px",
              fontSize: 16,
            }}
          >
            {/* <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            > */}
            About Me
            {/* </Link> */}
          </Button>
          {landscape && (
            <div className="socialIcons">
              <div className="leftSocialIcon">
                <SocialIcon
                  url="https://www.linkedin.com/in/advaysharma/"
                  bgColor="#181818"
                  fgColor="white"
                />
              </div>
              <div>
                <SocialIcon
                  url="https://github.com/sharmaadvay0"
                  bgColor="#181818"
                  fgColor="white"
                />
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
