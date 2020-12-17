import React from "react";
import { Typography } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home">
      <div className="hello">
        <Typography style={{ color: "white", fontSize: 100 }}>
          Hello 👋
        </Typography>
      </div>
      <div className="name">
        <Typography style={{ color: "white", fontSize: 50 }}>
          Welcome to Advay's
        </Typography>
        <Typography style={{ color: "white", fontSize: 50 }}>
          Developer Portfolio!
        </Typography>
      </div>
    </div>
  );
};

export default Home;
