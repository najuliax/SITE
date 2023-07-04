var map = L.map('map').setView([-23.5505, -46.6333], 13); // Coordenadas do local e zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

L.marker([-25.5377509, -49.255991,17]).addTo(map)
  .bindPopup('Meu Local')
  .openPopup();
Footer
