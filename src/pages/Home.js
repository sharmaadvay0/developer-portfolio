import React, { Fragment, useContext, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Context } from "../components/Context";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Home = () => {
  const { state, setState } = useContext(Context);

  useEffect(() => {
    if (state.animation) {
      setTimeout(() => {
        setState({ ...state, animation: false });
      }, 2000);
    }
  }, []);

  return (
    <div className="home">
      {state.animation ? (
        <Fragment>
          <div
            className="hello animate__animated animate__fadeIn animate__slow"
            style={{ display: "flex" }}
          >
            <Typography style={{ color: "white", fontSize: 100 }}>
              Hello
            </Typography>
            <Typography
              style={{ color: "white", fontSize: 100, paddingLeft: "20px" }}
              className="animate__animated animate__wobble animate__delay-1s animate__fast"
            >
              👋
            </Typography>
          </div>
          <div className="name animate__animated animate__fadeIn animate__delay-1s">
            <Typography
              style={{ color: "white", fontSize: 50, textAlign: "center" }}
            >
              Welcome to Advay's
            </Typography>
            <Typography
              style={{ color: "white", fontSize: 50, textAlign: "center" }}
            >
              Developer Portfolio!
            </Typography>
          </div>
          <div className="homePageButtons animate__animated animate__fadeIn animate__delay-1s">
            <div className="button1">
              <Button
                style={{ fontSize: 25 }}
                variant="contained"
                color="primary"
              >
                {/* <Link
                  to="/projects"
                  style={{ color: "black", textDecoration: "none" }}
                > */}
                Projects
                {/* </Link> */}
              </Button>
            </div>
            <div className="button2">
              <Button
                style={{ fontSize: 25 }}
                variant="contained"
                color="primary"
              >
                {/* <Link
                  to="/about"
                  style={{ color: "black", textDecoration: "none" }}
                > */}
                About Me
                {/* </Link> */}
              </Button>
            </div>
          </div>
          <div className="scrollDown animate__animated animate__fadeIn animate__delay-1s">
            <Typography style={{ color: "white", fontSize: 20 }}>
              Scroll Down
            </Typography>
          </div>
          <ArrowDownwardIcon
            style={{ color: "white", order: 4 }}
            fontSize="large"
            className="animate__animated animate__fadeIn animate__delay-1s"
          />
        </Fragment>
      ) : (
        <Fragment>
          <div className="hello" style={{ display: "flex" }}>
            <Typography style={{ color: "white", fontSize: 100 }}>
              Hello
            </Typography>
            <Typography
              style={{ color: "white", fontSize: 100, paddingLeft: "20px" }}
              className="animate__animated animate__wobble animate__fast"
            >
              👋
            </Typography>
          </div>
          <div className="name">
            <Typography
              style={{ color: "white", fontSize: 50, textAlign: "center" }}
            >
              Welcome to Advay's
            </Typography>
            <Typography
              style={{ color: "white", fontSize: 50, textAlign: "center" }}
            >
              Developer Portfolio!
            </Typography>
          </div>
          <div className="homePageButtons">
            <div className="button1">
              <Button
                style={{ fontSize: 25 }}
                variant="contained"
                color="primary"
              >
                {/* <Link
                  to="/projects"
                  style={{ color: "black", textDecoration: "none" }}
                > */}
                Projects
                {/* </Link> */}
              </Button>
            </div>
            <div className="button2">
              <Button
                style={{ fontSize: 25 }}
                variant="contained"
                color="primary"
              >
                {/* <Link
                  to="/about"
                  style={{ color: "black", textDecoration: "none" }}
                > */}
                About Me
                {/* </Link> */}
              </Button>
            </div>
          </div>
          <div className="scrollDown">
            <Typography style={{ color: "white", fontSize: 20 }}>
              Scroll Down
            </Typography>
          </div>
          <ArrowDownwardIcon
            style={{ color: "white", order: 4 }}
            fontSize="large"
          />
        </Fragment>
      )}
    </div>
  );
};

export default Home;
