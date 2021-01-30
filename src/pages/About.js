import { Button, Card, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import pfp from "../images/Portrait_Cropped.jpeg";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const landscape = useMediaQuery({ query: "(orientation: landscape)" });
  return (
    <div className="about">
      {landscape ? (
        <Fragment>
          <Card
            style={{
              backgroundColor: "#2a2a2a",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "5%",
                width: "335px",
                paddingTop: "2%",
                paddingBottom: "2%",
              }}
            >
              <img
                src={pfp}
                alt="pfp"
                style={{
                  width: "200px",
                  borderRadius: "50%",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: 40,
                  paddingTop: "1%",
                  textAlign: "center",
                }}
              >
                Advay Sharma
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: 25,
                  paddingTop: "1%",
                }}
              >
                UC San Diego
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                Computer Engineering
              </Typography>
            </div>
            <div style={{ marginLeft: "5%", width: "20%" }}>
              <Typography
                style={{
                  color: "white",
                  fontSize: 30,
                  paddingTop: "1%",
                }}
              >
                About Me
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: 20,
                  paddingTop: "1%",
                }}
              >
                Hi! I'm Advay. Currently, I am an undergraduate studying
                Computer Engineering at UC San Diego. In my free time, I like to
                watch TV 📺, play video games 🎮, watch sports 🏀 🏈, and play
                the guitar 🎸.
              </Typography>
            </div>
          </Card>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "2.5%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "5%",
                width: "335px",
                paddingBottom: "2%",
              }}
            >
              <Typography
                style={{
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                Languages and Technologies
              </Typography>
              <ul>
                <li style={{ color: "white", fontSize: 20 }}>AWS</li>
                <li style={{ color: "white", fontSize: 20 }}>Node.js</li>
                <li style={{ color: "white", fontSize: 20 }}>React</li>
                <li style={{ color: "white", fontSize: 20 }}>React Native</li>
                <li style={{ color: "white", fontSize: 20 }}>Express</li>
                <li style={{ color: "white", fontSize: 20 }}>MongoDB</li>
                <li style={{ color: "white", fontSize: 20 }}>Git</li>
                <li style={{ color: "white", fontSize: 20 }}>GitHub</li>
                <li style={{ color: "white", fontSize: 20 }}>Apache Kafka</li>
                <li style={{ color: "white", fontSize: 20 }}>PostgreSQL</li>
                <li style={{ color: "white", fontSize: 20 }}>Redux</li>
                <li style={{ color: "white", fontSize: 20 }}>Unix</li>
                <li style={{ color: "white", fontSize: 20 }}>Vim</li>
                <li style={{ color: "white", fontSize: 20 }}>LaTeX</li>
                <li style={{ color: "white", fontSize: 20 }}>
                  Google Cloud Platform
                </li>
                <li style={{ color: "white", fontSize: 20 }}>Heroku</li>
                <li style={{ color: "white", fontSize: 20 }}>JUnit</li>
              </ul>
            </div>
            <div
              style={{
                marginLeft: "5%",
                width: "20%",
                display: "flex",
                flexDirection: "column",
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
              <Button
                style={{ fontSize: 20, marginTop: "5%", width: "150px" }}
                variant="contained"
                color="primary"
              >
                <a
                  href="https://www.linkedin.com/in/advaysharma/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  LinkedIn
                </a>
              </Button>
              <Button
                style={{ fontSize: 20, marginTop: "10%", width: "150px" }}
                variant="contained"
                color="primary"
              >
                <a
                  href="https://github.com/sharmaadvay0"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Github
                </a>
              </Button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Card
            style={{
              backgroundColor: "#2a2a2a",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "75%",
                paddingTop: "5%",
                paddingBottom: "2%",
              }}
            >
              <img
                src={pfp}
                alt="pfp"
                style={{
                  width: "200px",
                  borderRadius: "50%",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: 40,
                  paddingTop: "1%",
                  textAlign: "center",
                }}
              >
                Advay Sharma
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: 25,
                  paddingTop: "1%",
                }}
              >
                UC San Diego
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                Computer Engineering
              </Typography>
            </div>
            <div
              style={{
                width: "75%",
                paddingTop: "5%",
                paddingBottom: "5%",
              }}
            >
              <Typography
                style={{
                  color: "white",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                About Me
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: 20,
                  paddingTop: "1%",
                }}
              >
                Hi! I'm Advay. Currently, I am an undergraduate studying
                Computer Engineering at UC San Diego. In my free time, I like to
                watch TV 📺, play video games 🎮, watch sports 🏀 🏈, and play
                the guitar 🎸.
              </Typography>
            </div>
          </Card>
          <div style={{ display: "flex", marginTop: "5%" }}>
            <div
              style={{
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
                  textAlign: "center",
                }}
              >
                Profiles
              </Typography>
              <Button
                style={{ fontSize: 20, marginTop: "5%", width: "150px" }}
                variant="contained"
                color="primary"
              >
                <a
                  href="https://www.linkedin.com/in/advaysharma/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  LinkedIn
                </a>
              </Button>
              <Button
                style={{ fontSize: 20, marginTop: "15%", width: "150px" }}
                variant="contained"
                color="primary"
              >
                <a
                  href="https://github.com/sharmaadvay0"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Github
                </a>
              </Button>
            </div>
          </div>
          <Typography
            style={{
              color: "white",
              fontSize: 20,
              marginTop: "5%",
            }}
          >
            Languages and Technologies
          </Typography>
          <ul>
            <li style={{ color: "white", fontSize: 20 }}>AWS</li>
            <li style={{ color: "white", fontSize: 20 }}>Node.js</li>
            <li style={{ color: "white", fontSize: 20 }}>React</li>
            <li style={{ color: "white", fontSize: 20 }}>React Native</li>
            <li style={{ color: "white", fontSize: 20 }}>Express</li>
            <li style={{ color: "white", fontSize: 20 }}>MongoDB</li>
            <li style={{ color: "white", fontSize: 20 }}>Git</li>
            <li style={{ color: "white", fontSize: 20 }}>GitHub</li>
            <li style={{ color: "white", fontSize: 20 }}>Apache Kafka</li>
            <li style={{ color: "white", fontSize: 20 }}>PostgreSQL</li>
            <li style={{ color: "white", fontSize: 20 }}>Redux</li>
            <li style={{ color: "white", fontSize: 20 }}>Unix</li>
            <li style={{ color: "white", fontSize: 20 }}>Vim</li>
            <li style={{ color: "white", fontSize: 20 }}>LaTeX</li>
            <li style={{ color: "white", fontSize: 20 }}>
              Google Cloud Platform
            </li>
            <li style={{ color: "white", fontSize: 20 }}>Heroku</li>
            <li style={{ color: "white", fontSize: 20 }}>JUnit</li>
          </ul>
        </Fragment>
      )}
    </div>
  );
};

export default About;
