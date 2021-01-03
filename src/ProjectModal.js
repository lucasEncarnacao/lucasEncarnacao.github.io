import React from "react";
import Slideshow from "./Slideshow";

const ProjectModal = (props) => {
  const { project } = props;

  return (
    <div className="flex flex-col">
      <Slideshow images={project.images} />

      <div className="px-5">
        <h3>{project.name}</h3>
        <h4>Description</h4>
        <p>{project.description}</p>
        <h4>Tech Used</h4>
        <p>{project.techStack}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
