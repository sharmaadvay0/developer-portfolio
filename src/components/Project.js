import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const Project = ({ title, description, githubLink, imgPath }) => {
  return (
    <Card
      style={{
        backgroundColor: "#2a2a2a",
        width: "33%",
        marginRight: "50px",
      }}
    >
      <CardContent>
        <Typography style={{ color: "white" }}>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
