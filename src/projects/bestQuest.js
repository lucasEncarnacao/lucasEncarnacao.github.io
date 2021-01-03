import Project from "../helpers/Project";

const bestQuest = new Project(
  "Best Quest",
  ["logo192.png", "/gifs/target_star.gif"],
  "Launch Academy Capstone Project - Mobile-friendly scavenger hunt app meant to be played with friends. Disappointed with current apps on the market, I wanted to create my own ideal scavenger hunt app I could use with my friends. Incorporating Google Maps API, users can create and venture on scavenger hunts around their area by following clues and riddles to the next destination. When they think they've arrived at the correct location, the app will check their distance to the correct location and show the next clue if they are close enough. Websocket connections via lobbies allow multiple players to play simultaneously and sync their screens.",
  "React.js / Ruby on Rails / Material-UI / Google Maps API / Action Cable / JWT Tokens",
  "https://best-quest.herokuapp.com/",
  "https://github.com/lucasEncarnacao/best-quest"
);

export default bestQuest;
