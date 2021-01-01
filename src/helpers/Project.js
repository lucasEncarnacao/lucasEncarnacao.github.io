class Project {
  constructor(
    name,
    images,
    description,
    techStack,
    challenges,
    takeaways,
    projectLink,
    gitHubLink = null
  ) {
    this.name = name;
    this.images = images;
    this.description = description;
    this.techStack = techStack;
    this.challenges = challenges;
    this.takeaways = takeaways;
    this.projectLink = projectLink;
    this.gitHubLink = gitHubLink;
  }
}

export default Project;
