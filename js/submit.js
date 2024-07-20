document.getElementById("get-location").addEventListener("click", function () {
  const locationStatus = document.getElementById("location-status");
  const locationInput = document.getElementById("location");

  locationStatus.textContent = "Fetching location...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Using OpenStreetMap's Nominatim API for reverse geocoding
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.display_name) {
              locationInput.value = data.display_name;
              locationStatus.textContent = "Location fetched successfully!";
            } else {
              locationInput.value = `${latitude}, ${longitude}`;
              locationStatus.textContent =
                "Exact address not found. Coordinates used instead.";
            }
          })
          .catch((error) => {
            console.error("Error fetching location name:", error);
            locationInput.value = `${latitude}, ${longitude}`;
            locationStatus.textContent =
              "Could not fetch exact location. Coordinates used instead.";
          });
      },
      function (error) {
        console.error("Geolocation error:", error);
        locationStatus.textContent = "Unable to retrieve your location.";
      }
    );
  } else {
    locationStatus.textContent =
      "Geolocation is not supported by this browser.";
  }
});
