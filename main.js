import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { getCharacters } from "./utils/api";
import { debounce } from "./utils/timer";

// getCharacters("").then((characters) => {
//   const characterElements = characters.map(createCharacterElement);
//   characterSection.append(...characterElements);
// });

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

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("input", {
      placeholder: "Search character",
      className: "main__input",
      oninput: debounce((event) => {
        removeAllChildren(characterSection);
        const search = event.target.value;
        getCharacters(search).then((characters) => {
          const characterElements = characters.map(createCharacterElement);
          characterSection.append(...characterElements);
        });
      }, 300),
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
