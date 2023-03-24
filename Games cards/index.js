import games from "./games.js";
import { renderCharacter } from "./game.js";

const container = document.getElementById("app");
const carousel = document.createElement("div");
carousel.setAttribute("id", "carousel");

games.forEach((game) => carousel.appendChild(renderCharacter(game)));

container.appendChild(carousel);

