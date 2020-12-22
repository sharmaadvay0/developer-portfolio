import { Card, CardContent, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <Card
          style={{
            backgroundColor: "#2a2a2a",
            width: "33%",
            marginRight: "50px",
          }}
        >
          <CardContent>
            <Typography style={{ color: "white" }}>Project</Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            backgroundColor: "#2a2a2a",
            width: "33%",
          }}
        >
          <CardContent>
            <Typography style={{ color: "white" }}>Project</Typography>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <Card
          style={{
            backgroundColor: "#2a2a2a",
            width: "33%",
            marginRight: "50px",
          }}
        >
          <CardContent>
            <Typography style={{ color: "white" }}>Project</Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            backgroundColor: "#2a2a2a",
            width: "33%",
          }}
        >
          <CardContent>
            <Typography style={{ color: "white" }}>Project</Typography>
          </CardContent>
        </Card>
      </div>
    </Fragment>
  );
};

export default Projects;
