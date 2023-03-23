import games from "./games.js";
import { renderCharacter } from "./game.js";

const container = document.getElementById("app");

games.forEach((game) =>
  container.appendChild(renderCharacter(game))
);