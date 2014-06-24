
function initialize()
{
var mapProp = {
  center:new google.maps.LatLng(-40.934893, 172.972267),
  zoom:11,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
