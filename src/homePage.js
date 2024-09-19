// content.js
export const content = document.querySelector("#content");

const restaurantName = document.createElement("div");
restaurantName.classList.add("restaurant-name");
restaurantName.textContent = "Milliways";

const restaurantDescription = document.createElement("div");
restaurantDescription.classList.add("restaurant-description");
restaurantDescription.textContent = "the restaurant at the end of the universe";

const banner = document.createElement("div");
banner.classList.add("banner");
banner.classList.add("image-two");
banner.appendChild(restaurantName);
banner.appendChild(restaurantDescription);

const slogan = document.createElement("div");
slogan.classList.add("slogan");
slogan.textContent =
  "If you've done six impossible things this morning, why not round it off with breakfast at Milliways, the restaurant at the end of the universe?";

content.appendChild(banner);
content.appendChild(slogan);

/* <div class="banner">
<div class="restaurant-name">
    Milliways
</div>
<div class="restaurant-description">the restaurant at the end of the universe</div>
</div>
<div class="slogan">
<div>If you've done six impossible things this morning, why not round it off with breakfast at Milliways, the restaurant at the end of the universe?</div>
</div>
*/