/*
function initMap() {
  // The location of LCBH_01
  var LCBH_01 = {lat: 44.969692, lng: -124.017267};
  // The map, centered at LCBH_01
  var map = new google.maps.Map(
      document.getElementById('LincolnCityBeachHouse_1'), {zoom: 4, center: LCBH_01});
  // The marker, positioned at LCBH_01
  var marker = new google.maps.Marker({position: LCBH_01, map: map});
}
*/

function initMap() {
  // The location of BeachHouse01
  var BH_01 = {lat: 44.97539, lng: -124.01633};
  // The map, centered at BeachHouse01
  var map = new google.maps.Map(
      document.getElementById('BeachHouse_1'), {zoom: 6, center: BH_01});
  // The marker, positioned at BeachHouse01
  var marker = new google.maps.Marker({position: BH_01, map: map});


  var BH_02 = {lat: 44.97539, lng: -124.01633};
  // The map, centered at BeachHouse02
  var map = new google.maps.Map(
      document.getElementById('BeachHouse_2'), {zoom: 6, center: BH_02});
  // The marker, positioned at BeachHouse02
  var marker = new google.maps.Marker({position: BH_02, map: map});


  var BH_03 = {lat: 44.97539, lng: -124.01633};
  // The map, centered at BeachHouse03
  var map = new google.maps.Map(
      document.getElementById('BeachHouse_3'), {zoom: 6, center: BH_03});
  // The marker, positioned at BeachHouse03
  var marker = new google.maps.Marker({position: BH_03, map: map});

  var OAC = {lat: -33.8779, lng: 151.0972};
  // The map, centered at Sydney AU
  var map = new google.maps.Map(
      document.getElementById('OAC'), {zoom: 6, center: OAC});
  // The marker, centered at Sydney AU
  var marker = new google.maps.Marker({position: OAC, map: map});


}

