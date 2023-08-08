document.addEventListener("DOMContentLoaded", function () {
  const locBtn = document.querySelector(".loc");
  const cityInp = document.querySelector(".city-input");
  const message = document.querySelector(".message");
  const search = document.querySelector(".search");
  let map;

  const initialLatitude = 51.5074;
  const initialLongitude = -0.1278;

  showMap(initialLatitude, initialLongitude);

  locBtn.addEventListener("click", function () {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            const address = `${data.address.city}/${data.address.suburb}/${data.address.postcode}`;
            cityInp.value = address;
            showMap(latitude, longitude);
          })
          .catch((error) => {
            console.error("Error fetching location:", error);
            message.textContent = "Failed to fetch location data.";
          });
      });
    } else {
      message.textContent = "Geolocation is not available on this device.";
    }
  });

  search.addEventListener("click", function () {
    const address = cityInp.value;
    if (address) {
      const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const latitude = data[0].lat;
            const longitude = data[0].lon;
            showMap(latitude, longitude);
          } else {
            message.textContent = "Location not found.";
          }
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
          message.textContent = "Failed to fetch location data.";
        });
    }
  });

  function showMap(latitude, longitude) {
    if (!map) {
      map = L.map("map").setView([latitude, longitude], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    } else {
      map.setView([latitude, longitude], 13);
    }

    L.marker([latitude, longitude]).addTo(map);
  }
});
