

const nairobi = { lat: -1.264689133557676, lng: 36.799824382397496 };

// const loc_nextgen = { lat: -1.3147433056910072, lng: 36.84445042024243 };
// const loc_lavington = { lat: -1.276470236163254, lng: 36.77065115471676 };
// const loc_tworivers = { lat: -1.2038768588141864, lng: 36.79432530026703 };
// const loc_trm = { lat: -1.211428281533768, lng: 36.88942569970553 };
// const loc_thehubkaren = { lat: -1.3199427493968556, lng: 36.70420992280812 };

const loc_nextgen = { lat: -1.3233241, lng: 36.8441071 };
const loc_lavington = { lat: -1.2790727, lng: 36.7707028 };
const loc_tworivers = { lat: -1.210862, lng: 36.794696 };
const loc_trm = { lat: -1.2196397, lng: 36.8885104 };
const loc_thehubkaren = { lat: -1.3199626, lng: 36.7042125 };

var map;
let bk_trm;
let bk_lavington;
let bk_tworivers;
let bk_nextgen;
let bk_thehubkaren;
var markers = [];

function initMap() {
  google.maps.InfoWindow.prototype.opened = false;
  google.maps.InfoWindow.prototype.markerId = "";

  map = new google.maps.Map(document.getElementById("map"), {
    center: nairobi,
    zoom: 10,
    minZoom: 5,
    maxZoom: 18,
    zoomControl: true,
    disableDefaultUI: true,
    restriction: {
      latLngBounds: {
        east: 45,
        north: 5.5,
        south: -7,
        west: 32
      },
      strictBounds: true
    },
    // gestureHandling: "greedy",
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#502314"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5ebdc"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5ebdc"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#198737"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ff8732"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5ebdc"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5ebdc"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]
  });


  bk_thehubkaren = new google.maps.Marker({
    position: loc_thehubkaren,
    map: map,
    icon: "assets/img/bk_map_marker2-sm.png",
    bkName: "The Hub, Karen",
    markerId: "bk-thehubkaren",
    sampleImage: "assets/img/burgerking_thehub_karen1.jpg",
    sampleImage2: "assets/img/burgerking_thehub_karen2.jpg",
    mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Burger+King&destination_place_id=ChIJvw3yKmUbLxgRHM8_3EPnVk0"
  });
  markers.push(bk_thehubkaren);

  bk_nextgen = new google.maps.Marker({
    position: loc_nextgen,
    map: map,
    icon: "assets/img/bk_map_marker2-sm.png",
    bkName: "Nextgen",
    markerId: "bk-nextgen",
    sampleImage: "assets/img/burgerking_nextgen1.jpg",
    sampleImage2: "assets/img/burgerking_nextgen2.jpg",
    sampleImage3: "assets/img/burgerking_nextgen3.jpg",
    mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Burger+King&destination_place_id=ChIJ5eviV74RLxgRf5ZBFoMoX3E",
  });
  markers.push(bk_nextgen)

  bk_tworivers = new google.maps.Marker({
    position: loc_tworivers,
    map: map,
    icon: "assets/img/bk_map_marker2-sm.png",
    bkName: "Two Rivers",
    markerId: "bk-tworivers",
    sampleImage: "assets/img/burgerking_tworivers1.jpg",
    sampleImage2: "assets/img/burgerking_tworivers2.jpg",
    sampleImage3: "assets/img/burgerking_tworivers3.jpg",
    mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Burger+King&destination_place_id=ChIJ0ZRJJVs9LxgRDvQGL_XJ50A",
  });
  markers.push(bk_tworivers);

  bk_lavington = new google.maps.Marker({
    position: loc_lavington,
    map: map,
    icon: "assets/img/bk_map_marker2-sm.png",
    bkName: "Shell Lavington",
    markerId: "bk-lavington",
    sampleImage: "assets/img/burgerking_lavington1.jpg",
    sampleImage2: "assets/img/burgerking_lavington2.jpg",
    sampleImage3: "assets/img/burgerking_lavington3.jpg",
    mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Burger+King&destination_place_id=ChIJ_QJ7MH8ZLxgRfiWanShmWM4",
  });
  markers.push(bk_lavington);

  bk_trm = new google.maps.Marker({
    position: loc_trm,
    map: map,
    icon: "assets/img/bk_map_marker2-sm.png",
    bkName: "TRM",
    markerId: "bk-trm",
    sampleImage: "assets/img/burgerking_trm1.jpg",
    sampleImage2: "assets/img/burgerking_trm2.jpg",
    mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Burger+King&destination_place_id=ChIJLyjGsHgVLxgReknecvaSTlE",
  });
  markers.push(bk_trm);
 

    // notes
  // infoWindow = new google.maps.InfoWindow; //static infoWindow for all your markers
  // google.maps.event.addDomListener(window, 'load', function() {
  //  //create your markers here
  //  google.maps.event.addListener(marker, 'click', function() {
  //              infoWindow.open(map1, marker); //take care with case-sensitiveness
  //         });
  // });

  var contentString = '<div id="info-content">'+
  `<h3 id="infowindow-title" onclick="openModal('', this)">Burger King</h3>`+
  '<img id="infowindow-img1" />'+
  '<img id="infowindow-img2" />'+
  '<img id="infowindow-img3" />'+
  '</div>'
  infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  
  // google.maps.event.addListenerOnce(map, 'idle', function(){
  //   // do something only the first time the map is loaded
  //   console.log('map idle');

  // });

  for (let i = 0; i < markers.length; i++) {
    google.maps.event.addListener(markers[i], 'click',  function(args) {
      
      map.setCenter(markers[i].getPosition());
      
      if (infowindow.opened) {
        infowindow.close(); // always set flag after opening/closing
        infowindow.opened = false;
        map.setZoom(10);
        if (infowindow.markerId != markers[i].markerId) {
          map.setZoom(11);
          infowindow.open(map, markers[i]);
          infowindow.opened = true;
          infowindow.markerId = markers[i].markerId;
        }
      } else {
        map.setZoom(11);
        infowindow.open(map, markers[i]);
        infowindow.opened = true;
        infowindow.markerId = markers[i].markerId;
      }

      setTimeout(() => {
        document.getElementById("infowindow-title").innerHTML = "Burger King - " + markers[i].bkName;
        document.getElementById("infowindow-title").setAttribute("Data-BK-ID", markers[i].markerId);
        document.getElementById("infowindow-img1").src = markers[i].sampleImage;
        document.getElementById("infowindow-img2").src = markers[i].sampleImage2;

        if (markers[i].sampleImage3) {
          document.getElementById("infowindow-img3").src = markers[i].sampleImage3;
          document.getElementById("infowindow-img3").style.display = 'block';

        } else {
          document.getElementById("infowindow-img3").style.display = 'none';
        }
      }, 0);
    });

    markers[i].addListener('mouseover', function() {
      markers[i].setIcon("assets/img/bk_map_marker4-sm.png");
    });
    
    // assuming you also want to hide the infowindow when user mouses-out
    markers[i].addListener('mouseout', function() {
      markers[i].setIcon("assets/img/bk_map_marker2-sm.png");
    });
  }

  google.maps.event.addListener(map, "click", function(event) {
    infowindow.close();
    infowindow.opened = false;
    map.setZoom(10);
    for (let i = 0; i < markers.length; i++) {
      markers[i].setIcon("assets/img/bk_map_marker2-sm.png");
    }
  });

  var listItems = document.getElementsByClassName('restaurant-list-items-title');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", listItemHoverOn, false);
    listItems[i].addEventListener("mouseout", listItemHoverOff, false);
  }

  // var showonmapButtons = document.getElementsByClassName('btn-showonmap');
  // for (let i = 0; i < showonmapButtons.length; i++) {
  //   showonmapButtons[i].addEventListener('click', function (){

  //   });
  // }
}
function showOnMap(bk_name) {
  // clear all selected items first
  for (let i = 0; i < markers.length; i++) {
    markers[i].setIcon("assets/img/bk_map_marker2-sm.png");
  }
  var marker = eval(bk_name);
  if (window.innerWidth < 650) {
    // if on mobile, switch to map tab first
    document.getElementById("btn-map-tab").click();
  }
  setTimeout(() => {
    map.setCenter(marker.position);
    map.setZoom(11);
    marker.setIcon("assets/img/bk_map_marker4-sm.png");
  }, 0);
}

function listItemHoverOn() {
  var el = this;
  var listBkId = el.getAttribute('data-bk-id');
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].markerId == listBkId) {
      markers[i].setIcon("assets/img/bk_map_marker4-sm.png");
    }
  }
}
function listItemHoverOff() {
  var el = this;
  var listBkId = el.getAttribute('data-bk-id');
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].markerId == listBkId) {
      markers[i].setIcon("assets/img/bk_map_marker2-sm.png");
    }
  }
}
