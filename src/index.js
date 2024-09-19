import { addHomePageToDOM } from "./homePage.js";
import { addMenuPageToDOM } from "./menu.js";
import "./styles.css";

addHomePageToDOM();

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");

const content = document.querySelector("#content");

function emptyTheContentDiv() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

homeBtn.addEventListener("click", (e) => {
    emptyTheContentDiv()
    addHomePageToDOM()
});
menuBtn.addEventListener("click", (e) => {
    emptyTheContentDiv()
    addMenuPageToDOM()
});
