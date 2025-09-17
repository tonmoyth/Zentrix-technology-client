import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  // Approximate coordinates for Uttara Sector 15
  const position = [23.8759, 90.3795];

  return (
    <div className="h-[500px] w-11/12 md:w-10/12 mx-auto my-20 z-10">
      <h4 className="text-[var(--secondary)] mt-3  text-center font-semibold mb-2 uppercase">
       Company Location
      </h4>
   
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%" ,zIndex: 0}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        <Marker position={position} icon={icon}>
          <Popup>Dhaka, Uttara Sector 15</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
