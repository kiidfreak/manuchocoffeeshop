var mobileOpenButton = document.getElementsByClassName("menu-icon_image");
var mainNav = document.getElementsByClassName("mainnav");
var mainNavMenu = document.getElementsByClassName("mainnav_menu");
var mainNavOpen = false;
var searchBox = document.getElementById("input-locations-search");
var searchTerm = "";
var locationHeader = document.getElementsByClassName("section-locations-header")[0];
var infowindow;
var activeOfferModal;

var currentTabInRestaurant = '';

var menuModal = document.getElementsByClassName("menu-section-modal")[0];

// main nav
function toggleNav() {
  if (mainNavOpen) {
    mainNavMenu[0].style.display = "none";
    mainNav[0].style.height = "76px";
    mobileOpenButton[0].classList.remove("menu-icon_close");
    mobileOpenButton[0].classList.add("menu-icon_open");
    mainNavOpen = false;
  } else {
    mainNavMenu[0].style.display = "grid";
    mainNavMenu[0].style.gap = "2em";
    mainNav[0].style.height = "100%";
    mobileOpenButton[0].classList.remove("menu-icon_open");
    mobileOpenButton[0].classList.add("menu-icon_close");
    mainNavOpen = true;
  }

}


// catch all functions dependent on resize
function onWindowResize() {
  if (window.innerWidth > 768) {
    // if i don't do this, the mainNav still has an inline 'display property'
    // and it overrides the media query set in css
    // so i had to set this to go in tandem with the media query
    if (mainNavOpen) {
      // close it
      toggleNav();
      mainNavMenu[0].style.display = null;
    };
    if (!mainNavOpen) {
      mainNavMenu[0].style.display = null;
    };
  }

  if (document.getElementById("restaurant-section-list") || document.getElementById("restaurant-section-map")) {
    if (window.innerWidth > 649) {
      document.getElementById("restaurant-section-map").style.display = "block";
      document.getElementById("restaurant-section-list").style.display = "block";
    } else if (window.innerWidth < 650) {
      if (currentTabInRestaurant == 'list' ) {
        document.getElementById("btn-list-tab").click();
      } else {
        document.getElementById("btn-map-tab").click();
        document.getElementById("btn-map-tab").click();
      }
    }
  }

  // offers page set active offer
  if (window.innerWidth > 649) { 
    if (!activeOfferModal) { //todo: test
      var offers = document.getElementsByClassName('offer-list-items');
      if (offers[0]) {
        offers[0].click();
      }
    }
  } else { // close all offer modals on small screen
    activeOfferModal = null;
    removeOfferModalsCoreFunc();
  }
}

// map/list tab in restaurant.html
function switchTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  if (tabName == 'restaurant-section-map') {
    currentTabInRestaurant = 'map';
  } else {
    currentTabInRestaurant = 'list';
  }
}


// modals
function openModal(modalId, el) {
  if (infowindow) {
    infowindow.close(); // always set flag after opening/closing
    infowindow.opened = false;
  }

  el = el || null;
  if (el) {
    modalId = 'modal-' + el.getAttribute('Data-BK-ID');
  }

  document.getElementById('restaurant-modal-mask').style.display = 'flex';
  document.getElementsByClassName("content-grid")[0].style.overflow = 'hidden';
  if(modalId) {
    document.getElementsByClassName(modalId)[0].style.display = 'block';
  }
}

function openOfferModal(modalId) {
  if (window.innerWidth < 650) {
    document.getElementById('offer-modal-mask').style.display = 'flex';
    document.getElementsByClassName(modalId)[0].style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else { //set active item on list
    // by removing the current active one..
    var offerListItems = document.getElementsByClassName('offer-list-items');
    for (let i = 0; i < offerListItems.length; i++) {
      offerListItems[i].classList.remove('active');
    }
    // ..and adding new active one
    var listItemId = 'offer-list-item-' + modalId;
    document.getElementById(listItemId).classList.add('active');

    // remove the current modals from the menu
    setTimeout(() => {
      removeOfferModalsCoreFunc();
    }, 0);
    setTimeout(() => {
      document.getElementById('offer-modal-mask').style.display = 'flex';
      document.getElementsByClassName(modalId)[0].style.display = 'block';
    }, 0);
    // ...then put the correct one

    activeOfferModal = modalId;
  }
}


function removeModal(e, el) {
  if(el == e.target) {
    // put your code here
    document.getElementById('restaurant-modal-mask').style.display = 'none';
    var modals = document.getElementsByClassName('venue');
    
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = 'none';
    }  
  }
}

function removeMenuModal(e, el) { //todo: combine this and above
  if(el == e.target) {
    document.body.style.overflow = 'initial';
    // put your code here
    document.getElementById('menu-modal-mask').style.display = 'none';
    var modals = document.getElementsByClassName('menu-detail');
    
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = 'none';
    }  
  }

function scrollToBottomOfModal() {
  menuModal.scrollTop = menuModal.scrollHeight;
}

function removeOfferModal(e, el) { //todo: combine this and above
  document.body.style.overflow = 'initial';
  if(el == e.target) {
    // put your code here
    removeOfferModalsCoreFunc();
  }
}
function removeOfferModalsCoreFunc() {
  var offerModalMask = document.getElementById('offer-modal-mask');
  if (offerModalMask) {
    offerModalMask.style.display = 'none';
    var modals = document.getElementsByClassName('offer-section-modal');
    
    if(modals.length) { //todo: test
      for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
      }  
    }

  }
}

// offers in main page
function gotoOffer(offerId) {
  var anchor = document.createElement('a');
  anchor.setAttribute('href',"offers.html" + "?offerId=" + offerId);
  anchor.click();
}




window.addEventListener('load', function(){

  // todo: when you add search locations feature
  // if (searchBox) {
  //   searchBox.addEventListener('input', searchTermChanged);
  // }

  window.onresize = onWindowResize;
  
  // set default tab in restaurant.html on small devices
  if (window.innerWidth < 650) {
    if (document.getElementsByClassName("defaultOpen")[0]) {
      document.getElementsByClassName("defaultOpen")[0].click();
    }
  }

  // set default offer in offers.html on large devices
  if (window.innerWidth > 649) {
    var defaultOfferListItem = document.getElementsByClassName('defaultOfferOpen')[0];
    if(defaultOfferListItem) {
      defaultOfferListItem.click();
    }
  }
});