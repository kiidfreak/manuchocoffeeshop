var menuItems = [
  {
    "id": 1,
    "name": "Americano Coffee",
    "priceBase": 120,
    "priceCombo": 140,
    "description": "Our Americano is not just black coffee. It is essentially an espresso shot diluted with water",
    "fileName": "Americano.png"
  },
  {
    "id": 2,
    "name": "Nescafe Coffee",
    "priceBase": 320,
    "priceCombo": 350,
    "description": "Our Americano is not just black coffee. It is essentially an espresso shot diluted with water",
    "fileName": "Americano.png"
  },
  {
    "id": 3,
    "name": "Starbucks Coffee",
    "priceBase": 430,
    "priceCombo": 500,
  
    "description": "Our Americano is not just black coffee. It is essentially an espresso shot diluted with water",
    "fileName": "Americano.png"
  }
 ]
var templateArr = [];

var menuItemName = 'Whopper';
var sectFolder = 'beef_meals/';
var fileName = '1_whopper.png';

var priceTemplate = "";
var descriptionTemplate = "";
var additionalDescription = "";
var toyImageTemplate = `
<div class="menu-modal-section-toyimg">
  <img id="menu-modal-toy-img" src="assets/img/toys/`+ 'ZAG_heroez_miraculous.png"' +` />
</div>
`;
var finalTemplate = "";



var count = 0;
var toyImgCycleInterval;


for (let i = 0; i < menuItems.length; i++) {
  // console.log(menuItems[i]);
  if(menuItems[i].fileName != 'file name') {
    fileName = menuItems[i].fileName;
  }
  menuItemName = menuItems[i].name;

  if (menuItems[i].sectId == 'beef' || menuItems[i].sectId == 'chicken') {
   additionalDescription =  `<p class="menu-modal-section-extra-description">* Combo meal comes with large fries and a soda</p>`;
  }
  if (menuItems[i].id == 22 || menuItems[i].id == 23 || menuItems[i].id == 24) {
   additionalDescription =  `<p class="menu-modal-section-extra-description" style="color:#198737;">*Available toys below:</p>`;
  }

  descriptionTemplate = `
  <div class="menu-modal-section-description">
    <p>`+ menuItems[i].description +`</p>
    `
    + additionalDescription
  +`</div>
  `
  additionalDescription = '';

  switch(menuItems[i].sectId) {
    case 'beef':
      sectFolder = 'beef_meals/';
      // priceTemplate = comboMealPriceTemplate + sandwichOnlyPriceTemplate;
      priceTemplate = 
      `
      <span class="menu-item-type">`+ 'Combo Meal' +`</span>
      <span class="menu-item-price">Ksh. `+ menuItems[i].priceCombo +`</span>
      `
      +`
      <span class="menu-item-type">`+ 'Sandwich Only' +`</span>
      <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
      `
      break;  
    case 'chicken':
      sectFolder = 'chicken_meals/';
      priceTemplate = 
      `
      <span class="menu-item-type">`+ 'Combo Meal' +`</span>
      <span class="menu-item-price">Ksh. `+ menuItems[i].priceCombo +`</span>
      `
      +`
      <span class="menu-item-type">`+ 'Sandwich Only' +`</span>
      <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
      `
      break;
    case 'dessert':
      sectFolder = 'dessert/';
      if (menuItems[i].id == 37) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Flavors' +`</span>
        <span class="menu-item-price">`+ 'Oreo, KitKat' +`</span>
        `
      } else if (menuItems[i].id == 44) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Small' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceSmall +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Medium' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceMedium +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Large' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceLarge +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Flavors' +`</span>
        <span class="menu-item-price">`+ 'Chocolate, Vanilla, Strawberry' +`</span>
        `
      } else if (menuItems[i].id == 47) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Flavors' +`</span>
        <span class="menu-item-price">`+ 'Caramel, Chocolate' +`</span>
        `
      } else if(menuItems[i].id == 40) {
        priceTemplate = `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Flavors' +`</span>
        <span class="menu-item-price">`+ 'Coke, Sprite, Fanta Orange/Passion' +`</span>
        `
      } else {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
      }
      break;
    case 'kids': 
      sectFolder = 'kids_menu/';
      if (menuItems[i].id == 22) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Bundle Contains' +`</span>
        <span class="menu-item-price">`+ 'Hamburger, Drink, Small Fries, 1 Toy' +`</span>
        `
      } else if (menuItems[i].id == 23) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Bundle Contains' +`</span>
        <span class="menu-item-price">`+ 'Cheeseburger, Drink, Small Fries, 1 Toy' +`</span>
        `

      } else if (menuItems[i].id == 24) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Bundle Contains' +`</span>
        <span class="menu-item-price">`+ '4 Chicken Nuggets, Drink, Small Fries, 1 BBQ dip, 1 Toy' +`</span>
        `
      } else if (menuItems[i].id == 28) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Bundle Contains' +`</span>
        <span class="menu-item-price">`+ '1 Hamburger, Small Fries' +`</span>
        `
      } else {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
      }
      break;
    case 'snacks': 
      sectFolder = 'snacks/';
      if (menuItems[i].id == 31) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ '4 pcs' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].price4pcs +`</span>
        `;
      }
      if (menuItems[i].id == 15 || menuItems[i].id == 19 || menuItems[i].id == 29 || menuItems[i].id == 31) {
        priceTemplate += 
        `
        <span class="menu-item-type">`+ '6 pcs' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].price6pcs +`</span>
        `
        +`
        <span class="menu-item-type">`+ '9 pcs' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].price9pcs +`</span>
        `;
      }
      if (menuItems[i].id == 15 || menuItems[i].id == 19) {
        priceTemplate += 
        `
        <span class="menu-item-type">`+ '12 pcs' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].price12pcs +`</span>
        `;
      } else if (menuItems[i].id == 27) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Small' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceSmall +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Medium' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceMedium +`</span>
        `
        +`
        <span class="menu-item-type">`+ 'Large' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceLarge +`</span>
        `;
      } else if (menuItems[i].id != 29 && menuItems[i].id != 31) {
        priceTemplate = 
        `
        <span class="menu-item-type">`+ 'Price' +`</span>
        <span class="menu-item-price">Ksh. `+ menuItems[i].priceBase +`</span>
        `
      }
    break;  
  }

  finalTemplate = `
    <img src="assets/img/menu/`+ sectFolder + fileName +`" alt="">
    <div class="menu-modal-title-container">
      <h1 class="menu-modal-title">
        `+ menuItemName
          +`
      </h1>
    </div>
    <div class="menu-modal-section-price">`
    + priceTemplate
    +`
    </div>
    `
    + descriptionTemplate;

    if (menuItems[i].id == 22 || menuItems[i].id == 23 || menuItems[i].id == 24) {
      finalTemplate += toyImageTemplate;
    }
  
    templateArr[menuItems[i].id] = finalTemplate;

    // special templates (hot drinks)
    if (menuItems[i].id == 49) {
      sectFolder = 'dessert/';
      fileName = 'hot_drinks.png';
      menuItemName = 'Hot Drinks';
      priceTemplate = 
      `
      <span class="menu-item-type">`+ '' +`</span>
      <span class="menu-item-price-single-title">`+ "Single" +`</span>
      <span class="menu-item-price-double-title">`+ "Double" + `</span>
      `
      +`
      <span class="menu-item-type">`+ 'Latte' +`</span>
      <span class="menu-item-price-single">Ksh. `+ "200" +`</span>
      <span class="menu-item-price-double">Ksh. `+ "240" +`</span>
      `
      +`
      <span class="menu-item-type">`+ 'Espresso' +`</span>
      <span class="menu-item-price-single">Ksh. `+ "140" +`</span>
      <span class="menu-item-price-double">Ksh. `+ "170" +`</span>
      `
      +`
      <span class="menu-item-type">`+ 'Capuccino' +`</span>
      <span class="menu-item-price-single">Ksh. `+ "200" +`</span>
      <span class="menu-item-price-double">Ksh. `+ "240" +`</span>
      `
      +`
      <span class="menu-item-type">`+ 'White Tea' +`</span>
      <span class="menu-item-price-single">Ksh. `+ "190" +`</span>
      `
      +`
      <span class="menu-item-type">`+ 'Hot Chocolate' +`</span>
      <span class="menu-item-price-single">Ksh. `+ "230" +`</span>
      `
      templateArr[49] = 
      `
      <img src="assets/img/menu/`+ sectFolder + fileName +`" alt="">
      <div class="menu-modal-title-container">
        <h1 class="menu-modal-title">
          `+ menuItemName
            +`
        </h1>
      </div>
      <div class="menu-modal-section-price menu-modal-hotdrinks">`
      + priceTemplate
      +`
      </div>
      `
      + descriptionTemplate;
    }

    // clear all:
    sectFolder = '';
    fileName = '';
    menuItemName = ''
    priceTemplate = '';
    finalTemplate = '';
    descriptionTemplate = '';

  }


function openMenuModal(id) { //todo: dynamic this, combine with above and below
  document.body.style.overflow = 'hidden'; // todo: i'm not reverting this in removeModl(), so what gives
  document.getElementById('menu-modal-mask').style.display = 'flex';
  menuModal = document.getElementsByClassName('menu-section-modal')[0];
  if (menuModal) {
    var wrapper = document.getElementsByClassName('menu-modal-wrapper')[0];
    
    if (id) {
      wrapper.innerHTML = templateArr[id];
    } else {
      wrapper.innerHTML = finalTemplate;
    }
    menuModal.style.display = 'block';
    scrollToBottomOfModal();

    if (id == 22 || id == 23 || id == 24) { // only junior meals
      toyImgCycleInterval = setInterval(toyImgCycle, 2000);
    }
  }
}
