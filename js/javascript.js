function initMap() {
  // The location of Uluru
  var uluru = {lat: -43.5368, lng: 172.6399};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 19, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
