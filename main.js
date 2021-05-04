import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement } from "./utils/elements";

const headerElement = createElement("section", {
  className: "header",
  children: [
    createElement("section", {
      innerText: "The Rick and Morty API",
      className: "header",
    }),
  ],
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("input", { placeholder: "Enter name" }),
    createElement("section", {
      className: "characters",
      children: [
        createCharacterElement({
          imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          name: "Rick Sanchez",
          status: "alive",
          species: "Human",
          origin: {
            name: "Earth",
          },
        }),
      ],
    }),
    createElement("section", {
      innerText: "Footer",
      className: "footer",
    }),
  ],
});

document.querySelector("#app").append(headerElement, mainElement);
