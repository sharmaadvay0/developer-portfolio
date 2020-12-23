import React, { Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const Project = ({ title, description, githubLink, imgPath, imageFit }) => {
  return (
    <Fragment>
      {imageFit ? (
        <Card
          style={{
            backgroundColor: "#2a2a2a",
            width: "640px",
          }}
        >
          <CardMedia
            image={imgPath}
            title={title}
            style={{ height: "349px" }}
          />
          <CardContent>
            <Typography style={{ color: "white", fontSize: 35 }}>
              {title}
            </Typography>
            <Typography
              style={{ color: "white", fontSize: 17, paddingTop: "2%" }}
            >
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              <a
                href={githubLink}
                style={{ color: "white", textDecoration: "none" }}
              >
                View On GitHub
              </a>
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card
          style={{
            backgroundColor: "#2a2a2a",
            width: "320px",
          }}
        >
          <CardMedia
            image={imgPath}
            title={title}
            style={{ height: "174.5px" }}
          />
          <CardContent>
            <Typography style={{ color: "white", fontSize: 35 }}>
              {title}
            </Typography>
            <Typography
              style={{ color: "white", fontSize: 17, paddingTop: "2%" }}
            >
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              <a
                href={githubLink}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View On GitHub
              </a>
            </Button>
          </CardActions>
        </Card>
      )}
    </Fragment>
  );
};

export default Project;
