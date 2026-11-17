
// importを追加していく
import {LeafletMap, TileLayer, Marker, Popup, Icon} from 'leaflet';

const map = new LeafletMap('map').
setView([35.70582201603388, 139.75198656294702], 18);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = new Marker([35.70582201603388, 139.75198656294702]).addTo(map);
marker.bindPopup('<b>Rail to Dream</b><br>Signal.').openPopup();

// クリック位置の緯度経度表示
const popup = new Popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

//アイコン
const whiteIcon = new Icon({
  iconUrl: 'images/ico.png',
  shadowUrl: 'images/ico_shadow.png',

iconSize:     [40, 40], // size of the icon
shadowSize:   [40, 40], // size of the shadow
iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
shadowAnchor: [20, 40],  // the same for the shadow
popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
});

new Marker([35.706591, 139.753368], {icon: whiteIcon}).addTo(map).bindPopup('Hello!').openPopup();