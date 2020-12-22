import React, { Fragment } from "react";
import Project from "../components/Project";

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
        <Project title="test" description="" githubLink="" imgPath="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <Project title="test2" description="" githubLink="" imgPath="" />
        <Project title="test3" description="" githubLink="" imgPath="" />
      </div>
    </Fragment>
  );
};

export default Projects;
