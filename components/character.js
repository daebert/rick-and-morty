import "./character.css";
import { createElement } from "../utils/elements";

export function createCharacterElement({
  id,
  image,
  name,
  status,
  species,
  origin,
}) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
      createElement("a", {
        href: `/details.html?id=${id}`,
        children: [createElement("img", { src: image })],
      }),
    ],
  });
}
