import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement } from "./utils/elements";
import { getCharacters } from "./utils/api";

const headerElement = createElement("section", {
  className: "header",
  children: [
    createElement("section", {
      innerText: "The Rick and Morty API",
    }),
  ],
});

const characterSection = createElement("section", {
  className: "characters",
});

getCharacters().then((characters) => {
  const characterElements = characters.map(createCharacterElement);
  characterSection.append(...characterElements);
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("input", {
      placeholder: "Search character",
      className: "main__input",
    }),
    characterSection,
  ],
});

const footerElement = createElement("section", {
  className: "footer",
  children: [
    createElement("section", {
      innerText: "Footer",
    }),
  ],
});
document
  .querySelector("#app")
  .append(headerElement, mainElement, footerElement);
