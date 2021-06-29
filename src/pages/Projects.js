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
          title="Your Clear Way"
          description="Currently working in a team of 8 in Triton Software Engineering for a non-profit organization to develop a mobile application that helps users greenify their homes through gamification. "
          imgPath=""
          githubLink="https://github.com/TritonSE/YCW-Green-Home-Application"
          techUsed="Using: React Native, AWS Amplify, AWS Lambda, AWS AppSync, AWS DynamoDB, AWS Cognito"
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
          title="Gratitude"
          description="Worked in a team of four on a iOS app that enables users to post about their mood. The application used Google Cloud NLP to determine a mood percentage and provide analytics such as mood percentage over time."
          imgPath="/images/Gratitude.png"
          githubLink="https://github.com/sharmaadvay0/Gratitude"
          techUsed="Used: Swift, Python, Flask, SwiftUI, Google Cloud Natural Language API, Google Cloud Firestore"
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
          title="Community"
          description="Worked in a team of four on a full-stack web application that enables users to add reports for issues present in their local community."
          githubLink="https://github.com/Hackathon-Squad/Community"
          imgPath="/images/community.png"
          techUsed="JavaScript, Mapbox, Google Cloud Firestore, Google Cloud Storage, Express, React, Node.js"
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
          title="ACM Visualization"
          description="ACM Visualization is a full-stack web application that shows event analytics for ACM, an organization within UC San Diego. This application displays a heatmap and line chart for event attendance, a bar graph for mean and median ACM points of attendees, and a pie chart for the distribution of events for ACM sub-organizations."
          githubLink="https://github.com/acmucsd/sp-cerulean"
          imgPath="/images/acm_visualization.png"
          techUsed="JavaScript, PostgreSQL, Express, React, Node.js, Heroku"
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
          title="Course Planner"
          description="Course Planner is a full-stack web application that helps students create and store their college course plans. It includes an encrypted login and registration system, a dashboard for viewing saved plans, and an interface for creating and editing a plan. While editing a plan, the user can optionally add a fifth year and summer courses. The website also gives warnings or errors based on the number of units the student is taking per quarter."
          githubLink="https://github.com/Course-Planner-UCSD/CoursePlanner"
          imgPath="/images/coursePlanner.jpg"
          techUsed="JavaScript, MongoDB, Express, React, Node.js, Redux"
          imageFit={imageFit}
        />
      </div>
    </Fragment>
  );
};

export default Projects;
