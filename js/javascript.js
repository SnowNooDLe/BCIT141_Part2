function initMap() {
  // The location of NZMUsicLive
  var NZMUsicLive = {lat: -43.5368, lng: 172.6399};
  // The map, centered at NZMUsicLive
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 19, center: NZMUsicLive});
  // The marker, positioned at NZMUsicLive
  var marker = new google.maps.Marker({position: NZMUsicLive, map: map});
}
