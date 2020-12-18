import { Card, Typography } from "@material-ui/core";
import React from "react";
import pfp from "../images/Portrait_Cropped.jpeg";

const About = () => {
  return (
    <div className="about">
      <Card
        style={{
          backgroundColor: "#2a2a2a",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={pfp}
          alt="pfp"
          style={{
            width: "200px",
            marginTop: "2.5%",
            borderRadius: "50%",
          }}
        />
        <Typography style={{ color: "white", fontSize: 40, paddingTop: "1%" }}>
          Advay Sharma
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: 25,
            paddingTop: "1%",
            paddingBottom: "2%",
          }}
        >
          UC San Diego Computer Engineering Student
        </Typography>
      </Card>
      <div style={{ display: "flex" }}>
        <div style={{ order: 1 }}>
          <Typography
            style={{
              color: "white",
              fontSize: 25,
              paddingTop: "1%",
              marginLeft: "15%",
            }}
          >
            About Me
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: 20,
              paddingTop: "1%",
              width: "30%",
              marginLeft: "15%",
            }}
          >
            Hi! I'm Advay. Currently, I am an undergraduate studying Computer
            Engineering at UC San Diego. In my free time, I like to watch TV 📺,
            play video games 🎮, watch sports 🏀 🏈, and play the guitar 🎸.
          </Typography>
        </div>
        <div
          style={{
            order: 2,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            marginRight: "30%",
          }}
        >
          <Typography
            style={{
              color: "white",
              fontSize: 25,
              paddingTop: "1%",
            }}
          >
            Profiles
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: 20,
              paddingTop: "1%",
            }}
          >
            Content
          </Typography>
        </div>
      </div>
      <Typography
        style={{
          color: "white",
          fontSize: 20,
          paddingTop: "2.5%",
        }}
      >
        Tools and Technologies I've used:
      </Typography>
      <ul>
        <li style={{ color: "white", fontSize: 20 }}>AWS</li>
        <li style={{ color: "white", fontSize: 20 }}>Node.js</li>
        <li style={{ color: "white", fontSize: 20 }}>React</li>
        <li style={{ color: "white", fontSize: 20 }}>Express</li>
        <li style={{ color: "white", fontSize: 20 }}>MongoDB</li>
        <li style={{ color: "white", fontSize: 20 }}>Git</li>
        <li style={{ color: "white", fontSize: 20 }}>Apache Kafka</li>
        <li style={{ color: "white", fontSize: 20 }}>MySQL</li>
        <li style={{ color: "white", fontSize: 20 }}>Redux</li>
      </ul>
    </div>
  );
};

export default About;
