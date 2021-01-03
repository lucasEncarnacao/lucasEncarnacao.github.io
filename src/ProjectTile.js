import React, { useState } from "react";
import Modal from "./Modal";
import ProjectModal from "./ProjectModal";

const ProjectTile = (props) => {
  const [showingModal, setShowingModal] = useState(false);
  const { project } = props;
  let gitHubItem = null;
  let modal = null;

  const showModal = (event) => {
    setShowingModal(true);
  };

  const closeModal = (event) => {
    setShowingModal(false);
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
      <div className="flex flex-col bg-purple-500 border border-black">
        <img
          className="border border-black"
          src={project.images[0]}
          alt={`${project.name} image`}
          onClick={showModal}
        />
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
