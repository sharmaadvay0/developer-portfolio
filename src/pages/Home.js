import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hello">
        <Typography style={{ color: "white", fontSize: 100 }}>
          Hello 👋
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
          <Button style={{ fontSize: 25 }} variant="contained" color="primary">
            <Link
              to="/projects"
              style={{ color: "black", textDecoration: "none" }}
            >
              Projects
            </Link>
          </Button>
        </div>
        <div className="button2">
          <Button style={{ fontSize: 25 }} variant="contained" color="primary">
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
