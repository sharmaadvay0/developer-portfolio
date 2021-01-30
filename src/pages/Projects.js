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
          title="ACM Visualization"
          description="ACM Visualization is a full-stack web application that shows event analytics for ACM, an organization within UC San Diego. This application displays a heatmap and line chart for event attendance, a bar graph for mean and median ACM points of attendees, and a pie chart for the distribution of events for ACM sub-organizations."
          githubLink="https://github.com/acmucsd/sp-cerulean"
          imgPath="/images/acm_visualization.png"
          techUsed="Used: JavaScript, PostgreSQL, Express, React, Node.js, Git, Heroku"
          imageFit={imageFit}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2.5%",
        }}
      >
        <Project
          title="Course Planner"
          description="Course Planner is a full-stack web application that helps students create and store their college course plans. It includes an encrypted login and registration system, a dashboard for viewing saved plans, and an interface for creating and editing a plan. While editing a plan, the user can optionally add a fifth year and summer courses. The website also gives warnings or errors based on the number of units the student is taking per quarter."
          githubLink="https://github.com/Course-Planner-UCSD/CoursePlanner"
          imgPath="/images/coursePlanner.jpg"
          techUsed="Used: JavaScript, MongoDB, Express, React, Node.js, Redux, Git"
          imageFit={imageFit}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2.5%",
          marginBottom: "3%",
        }}
      >
        <Project
          title="MCHS Events"
          description="MCHS Events is an iOS app that displays Moreau Catholic High School's events. It displayed these events in a daily and weekly view."
          githubLink=""
          imgPath=""
          techUsed="Used: Swift, PHP, JavaScript"
          imageFit={imageFit}
        />
      </div>
    </Fragment>
  );
};

export default Projects;
