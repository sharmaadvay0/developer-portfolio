import { Typography } from "@material-ui/core";
import React from "react";
import pfp from "../images/Portrait_Cropped.jpeg";
const About = () => {
  return (
    <div className="about">
      <Typography
        style={{ color: "white", fontSize: 50, order: 1, paddingTop: "2.5%" }}
      >
        About Me
      </Typography>
      <img
        src={pfp}
        alt="pfp"
        style={{ order: 2, width: "300px", paddingTop: "2.5%" }}
      />
    </div>
  );
};

export default About;
