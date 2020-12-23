import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import Project from "../components/Project";

const Projects = () => {
  const imageFit = useMediaQuery({ query: "(min-width: 700px)" });

  //images should be 1280 × 698
  //ideally, image format should be jpg
  //images should be stored in public/images folder

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <Project
          title="Course Planner"
          description="This project helps students create and store their college course plans. It includes an encrypted login and registration system, a dashboard for viewing saved plans, and an interface for creating and editing a plan. While editing a plan, the user can optionally add a fifth year and summer courses. The website also gives warnings or errors based on the number of units the student is taking per quarter."
          githubLink="https://github.com/Course-Planner-UCSD/CoursePlanner"
          imgPath="/images/coursePlanner.jpg"
          techUsed="Used: JavaScript, MongoDB, Express, React, Node.js, Redux, Git"
          imageFit={imageFit}
        />
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2.5%",
        }}
      >
        <Project
          title=""
          description=""
          githubLink=""
          imgPath="/images/"
          techUsed=""
          imageFit={imageFit}
        />
      </div> */}
    </Fragment>
  );
};

export default Projects;
