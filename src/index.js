import { addHomePageToDOM } from "./homePage.js";
import { addMenuPageToDOM } from "./menu.js";
import { addAboutPageToDOM } from "./about.js";
import "./styles.css";

addHomePageToDOM();

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");

function emptyTheContentDiv() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

homeBtn.addEventListener("click", (e) => {
  emptyTheContentDiv();
  addHomePageToDOM();
});
menuBtn.addEventListener("click", (e) => {
  emptyTheContentDiv();
  addMenuPageToDOM();
});
aboutBtn.addEventListener("click", (e) => {
  emptyTheContentDiv();
  addAboutPageToDOM();
});
