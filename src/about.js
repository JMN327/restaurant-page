export function addAboutPageToDOM() {
  const content = document.querySelector("#content");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "About";

/*   const restaurantDescription = document.createElement("div"); */
  /*     restaurantDescription.classList.add("restaurant-description");
    restaurantDescription.textContent = `Max Quordlepleen is your host
    for an evening of fine food, fine
    wine, and a floorshow featuring the
    universe as we know it boiling away
    into the cosmic void.
    
    Dining opens from 06:30`; */

  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.classList.add("image-one");
  banner.appendChild(title);
  /*     banner.appendChild(restaurantDescription); */

  const slogan1 = document.createElement("div");
  slogan1.classList.add("slogan");
  slogan1.textContent = `Max Quordlepleen is your host
    for an evening of fine food, fine
    wine, and a floorshow featuring the
    universe as we know it boiling away
    into the cosmic void.`;

  const slogan2 = document.createElement("div");
  slogan2.classList.add("slogan");
  slogan2.textContent = `Dining opens from 06:30 Mon-Sat    Contact: Galactic HYPER-PO Box 23401-AZDV`;

  content.appendChild(banner);
  content.appendChild(slogan1);
  content.appendChild(slogan2);
}

/*   
  <div class="banner image-one">
    <div class="title">About</div>
    <div class="restaurant-description">
        Max Quordlepleen is your host <br>
        for an evening of fine food, fine <br>
        wine, and a floorshow featuring the <br>
        universe as we know it boiling away <br>
        into the cosmic void. <br>
        <br>
        Dining opens from 06:30
    </div>
  </div>
   */
