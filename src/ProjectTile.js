import React, { useState } from "react";
import Modal from "./Modal";
import ProjectModal from "./ProjectModal";

const ProjectTile = (props) => {
  const [showingModal, setShowingModal] = useState(false);
  const [imageClasses, setImageClasses] = useState(
    "transform transition-all duration-500 object-contain z-10 m-auto"
  );
  const [divClasses, setDivClasses] = useState(
    "absolute flex justify-center items-center inset-0 z-20 invisible"
  );
  const { project } = props;
  let gitHubItem = null;
  let modal = null;

  const showModal = (event) => {
    setShowingModal(true);
  };

  const closeModal = (event) => {
    setShowingModal(false);
  };

  const imageHoverEnter = (event) => {
    setImageClasses(imageClasses + " scale-110");
    setDivClasses(divClasses.replaceAll(" invisible", ""));
  };

  const imageHoverExit = (event) => {
    setImageClasses(imageClasses.replaceAll(" scale-110", ""));
    setDivClasses(divClasses + " invisible");
  };

  if (project.gitHubLink !== null) {
    gitHubItem = (
      <a href={project.gitHubLink} target="blank">
        <img
          className="w-8 h-8"
          src="/icons/github_icon.png"
          alt={`${project.name} gitHub link`}
        />
      </a>
    );
  } else {
    gitHubItem = <div className="w-8 h-8" />;
  }

  if (showingModal) {
    modal = (
      <Modal closeClick={closeModal}>
        <ProjectModal project={project} />
      </Modal>
    );
  }

  return (
    <>
      {modal}
      <div className="flex flex-col border border-black">
        <div
          className="flex relative h-full overflow-hidden cursor-pointer bg-gray-600"
          onClick={showModal}
          onMouseEnter={imageHoverEnter}
          onMouseLeave={imageHoverExit}
        >
          <img
            className={imageClasses}
            src={project.images[1]}
            alt={`${project.name} image`}
          />
          <div className={divClasses}>
            <div className="absolute bg-red-300 opacity-30 inset-0" />
            <h5 className="bg-blue-300 p-2">Learn More</h5>
          </div>
        </div>

        <div className="flex space-x-4 p-4">
          <p className="flex-auto text-center">{project.name}</p>
          {gitHubItem}
          <a href={project.projectLink} target="blank">
            <img
              className="w-8 h-8"
              src="/icons/external_link_icon.png"
              alt={`${project.name} project link`}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectTile;
