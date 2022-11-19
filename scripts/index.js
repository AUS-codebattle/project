let get_map = () => {
  const API_KEY = "AIzaSyBHSdN2dJgD3y3MYwsToMwbZyJpszOdXX4";
  const map = document.getElementById("map");
  var location = {};
  navigator.geolocation.getCurrentPosition(
    () =>
      (location = {
        x: position.coords.latitude,
        y: position.location.longitude,
      })
  );
  map.src = `https://www.google.com/maps/embed/v1/MAP_MODE?key=${API_KEY}&q=government+hospital+near+Sharjah&center=${location.x}, ${location.y}`;
};
