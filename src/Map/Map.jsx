import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './Map.css';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png"

let iconUbication = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [30, 40],
    iconAnchor: [20, 94],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const Map = () => {
  return (
    <div>
      <MapContainer center={[14.553283735222315, -86.6661085176019]} zoom={13} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[14.553283735222315, -86.6661085176019]} icon={iconUbication}>
          <Popup>
            Floristería NolyGifts <br /> Campamento, Olancho, Honduras
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
