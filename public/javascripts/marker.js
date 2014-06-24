



// Initialize the map and the custom overlay.

function initialize() {
  var mapOptions = {
    zoom: 16,
     zoomControl: true,
     streetViewControl:false,
     mapTypeControl:false,
    center: new google.maps.LatLng(-40.912031, 173.059975),
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var swBound = new google.maps.LatLng(-41.162803, 172.472802);
  var neBound = new google.maps.LatLng(-40.714129, 173.331795);

  var bounds = new google.maps.LatLngBounds(swBound, neBound);
  // The photograph is courtesy of the U.S. Geological Survey.
  var srcImage = 'images/map_copy.png';

  // The custom USGSOverlay object contains the USGS image,
  // the bounds of the image, and a reference to the map.

  





//marker co-ordinates
 var bombers = new google.maps.LatLng(-40.912031, 173.059975);
  var shakers = new google.maps.LatLng(-40.914707, 173.057014);
  var deathfall = new google.maps.LatLng(-40.912323, 173.061263);
  var silly = new google.maps.LatLng(-40.988784, 173.005386);
  var DynomiteX4 = new google.maps.LatLng(-40.914972, 173.059550);
  var iconBase = 'images/';

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="first-heading">Bombers</h1>'+
      '<div id="bodyContent">'+
      '<p>Shes a silly jump (only for the brave boys, only for the brave)</P> '+
      '<p>(Marked by MaxXi)</p>'+
      '<a href="#Bomb-Template"><p>Bombers-Gallery</p></a>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
      maxHeight: 60
  });

  var marker = new google.maps.Marker({
      position: bombers,
      map: map,
      title: 'Bombers',
      icon: iconBase + 'bomb4X.png'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });



//Bombers Info



//Shakers


  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="first-heading">Shakers</h1>'+
      '<div id="bodyContent">'+
      '<p>Easy Jump, Deep Waters'+
      '<br> (Wharf jump for all levels!)</P> '+
      '<p>(Marked by MaxXi)</p>'+
      '</div>'+
      '</div>';

  var infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
      maxWidth: 200,
      maxHeight: 60
  });

  var marker2 = new google.maps.Marker({
      position: shakers,
      map: map,
      title: 'Shakers',
      icon: iconBase + 'dynamite1X.png'
  });
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  });


//Death Fall

  var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="first-heading">Death Fall</h1>'+
      '<div id="bodyContent">'+
      '<p>Swim out to the island, climb the hill and find a crazy jump into rocky waters.</P> '+
      '<p>(Pro or Kamikaze only!)</P> '+
      '<p>(Marked by MaxXi)</p>'+
      '<a href="#Bomb-Template"><p>Bombers-Gallery</p></a>'+
      '</div>'+
      '</div>';

  var infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
      maxWidth: 200,
      maxHeight: 60
  });

  var marker3 = new google.maps.Marker({
      position: deathfall,
      map: map,
      title: 'DeathFall',
      icon: iconBase + 'missile1X.png'
  });
  google.maps.event.addListener(marker3, 'click', function() {
    infowindow3.open(map,marker3);
  });

  //Silly

    var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="first-heading">Dynomite!</h1>'+
      '<div id="bodyContent">'+
      '<p>Its DynomiteX4!!</P> '+
      '<p>(Pro or Kamikaze only!)</P> '+
      '<p>(Marked by MaxXimus)</p>'+
      '<a href="#Bomb-Template"><p>Bombers-Gallery</p></a>'+
      '</div>'+
      '</div>';

  var infowindow4 = new google.maps.InfoWindow({
      content: contentString4,
      maxWidth: 200,
      maxHeight: 60
  });

  var marker4 = new google.maps.Marker({
      position: silly,
      map: map,
      title: 'Silly',
      icon: iconBase + 'missile1X.png'
  });
  google.maps.event.addListener(marker4, 'click', function() {
    infowindow4.open(map,marker4);
  });
}




/** @constructor */
function USGSOverlay(bounds, image, map) {

  // Initialize all properties.
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;


  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay.
  this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
USGSOverlay.prototype.onAdd = function() {

  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  // Create the img element and attach it to the div.
  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.position = 'absolute';
  div.appendChild(img);

  this.div_ = div;

  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};

USGSOverlay.prototype.draw = function() {

  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();

  // Retrieve the south-west and north-east coordinates of this overlay
  // in LatLngs and convert them to pixel coordinates.
  // We'll use these coordinates to resize the div.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  // Resize the image's div to fit the indicated dimensions.
  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
};

// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
USGSOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};


google.maps.event.addDomListener(window, 'load', initialize);





