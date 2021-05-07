import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./utils/elements.js";
import { getCharacter } from "./utils/api.js";
import { createCharacterDetails } from "./components/CharacterDetails.js";

const params = new URLSearchParams(location.search);
const characterId = params.get("id");

getCharacter(characterId).then((response) => {
  const characterDetailsElement = createCharacterDetails(response);
  mainElement.append(characterDetailsElement);
});

const mainElement = createElement("main", {
  className: styles.main,
});

document.querySelector("#app").append(mainElement);
