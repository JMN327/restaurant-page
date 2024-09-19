import cowImage from "./media/cow.png";
import burgerImage from "./media/burger.png";
import drinkImage from "./media/drink.png";

export function addMenuPageToDOM() {
  const content = document.querySelector("#content");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Menu";

  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.classList.add("image-three");
  banner.appendChild(title);
  content.appendChild(banner);

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");

  const itemNameArray = [
    "Ameglian Major Cow",
    "Algolian Zylatburger",
    "Pan Galactic Gargle Blaster",
  ];
  const imgSrcArray = [cowImage, burgerImage, drinkImage];
  const imgAltArray = [
    "Ameglian Major Cow",
    "Algolian Zylatburger",
    "Pan Galactic Gargle Blaster",
  ];
  const imgBlurbArray = [
    "One example of a race of artificially created, sentient creatures which were bred to want to be eaten",
    "a kind of meatburger made from the most unpleasant parts of a creature well known for its total lack of any pleasant parts",
    "similar to having your brains smashed out by a slice of lemon wrapped round a large gold brick",
  ];

  for (let i = 0; i < 3; i++) {
    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = itemNameArray[i];
    menuItems.appendChild(itemName);
  }

  for (let i = 0; i < 3; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    const img = document.createElement("img");
    img.setAttribute("src", imgSrcArray[i]);
    img.setAttribute("alt", imgAltArray[i]);
    const itemBlurb = document.createElement("div");
    itemBlurb.classList.add("item-blurb");
    itemBlurb.textContent = imgBlurbArray[i];
    item.appendChild(img);
    item.appendChild(itemBlurb);
    menuItems.appendChild(item);
  }

  content.appendChild(menuItems);

}

/*
<div class="banner image-three">
    <div class="title">Menu</div>
</div>
<div class="menu-items">
    <div class="item-name">Ameglian Major Cow</div>
    <div class="item-name">Algolian Zylatburger</div>
    <div class="item-name">Pan Galactic Gargle Blaster</div>
    <div class="item">
        <img src="media/cow.png" alt="Ameglian Major Cow" />
        <div class="item-blurb">One example of a race of artificially created, sentient creatures which were bred to want to be eaten</div>
    </div>
    <div class="item">
        <img src="media/burger.png" alt="Algolian Zylatburger" />
        <div class="item-blurb">a kind of meatburger made from the most unpleasant parts of a creature well known for its total lack of any pleasant parts</div>
    </div>
    <div class="item">
        <img src="media/drink.png" alt="Pan Galactic Gargle Blaster" />
        <div class="item-blurb">similar to having your brains smashed out by a slice of lemon wrapped round a large gold brick</div>
    </div>
</div> 
*/
