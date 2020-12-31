import React from "react";

const ProjectTile = (props) => {
  const { name, gitHubLink, projectLink } = props;
  let gitHubItem = null;

  if (gitHubLink !== undefined) {
    gitHubItem = (
      <a href={gitHubLink} target="blank">
        <img
          className="w-8 h-8"
          src="/icons/github_icon.png"
          alt={`${name} gitHub link`}
        />
      </a>
    );
  }

  return (
    <div className="flex flex-col bg-purple-500 border border-black">
      <img
        className="border border-black"
        src="logo192.png"
        alt={`${name} image`}
      />
      <div className="flex space-x-4 p-4">
        <p className="flex-auto text-center">{name}</p>
        {gitHubItem}
        <a href={projectLink} target="blank">
          <img
            className="w-8 h-8"
            src="/icons/external_link_icon.png"
            alt={`${name} project link`}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;