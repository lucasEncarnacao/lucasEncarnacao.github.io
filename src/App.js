import React from "react";
import ProjectTile from "./ProjectTile";
import Project from "./helpers/Project";

const App = (props) => {
  let project1 = new Project(
    "Sample Project",
    ["logo192.png", "/gifs/target_star.gif"],
    "desc example",
    "tech example",
    "challenges example",
    "takeaways example",
    "https://github.com/lucasencarnacao",
    "https://github.com/lucasencarnacao"
  );

  return (
    <>
      <ProjectTile project={project1} />
    </>
  );
};

export default App;
