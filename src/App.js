import React from "react";
import ProjectTile from "./ProjectTile";
import beatMachine from "./projects/beatMachine";
import bestQuest from "./projects/bestQuest";
import giraffeSpot from "./projects/giraffeSpot";
import targetStar from "./projects/targetStar";
import reRoute from "./projects/reRoute";

const App = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      <ProjectTile project={beatMachine} />
      <ProjectTile project={bestQuest} />
      <ProjectTile project={giraffeSpot} />
      <ProjectTile project={targetStar} />
      <ProjectTile project={reRoute} />
    </div>
  );
};

export default App;
