class Project {
  constructor(
    name,
    images,
    description,
    techStack,
    projectLink,
    gitHubLink = null
  ) {
    this.name = name;
    this.images = images;
    this.description = description;
    this.techStack = techStack;
    this.projectLink = projectLink;
    this.gitHubLink = gitHubLink;
  }
}

export default Project;
