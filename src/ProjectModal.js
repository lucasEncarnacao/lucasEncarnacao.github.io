import React from "react";
import Slideshow from "./Slideshow";

const ProjectModal = (props) => {
  const { project } = props;

  return (
    <div className="flex flex-col">
      <Slideshow images={project.images} />

      <div className="px-5">
        <h4>Description</h4>
        <p>{project.description}</p>
        <h4>Tech Stack</h4>
        <p>{project.techStack}</p>
        <h4>Challenges</h4>
        <p>{project.challenges}</p>
        <h4>Takeaways</h4>
        <p>{project.takeaways}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
