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
 

  return (
    <div className="h-[500px] w-11/12 md:w-10/12 mx-auto rounded-2xl z-10">
      {/* <h4 className="text-[var(--secondary)] mt-3  text-center font-semibold mb-2 uppercase">
       Company Location
      </h4> */}
   
      <MapContainer

        zoom={15}
        style={{ height: "100%", width: "100%" ,zIndex: 0}}
      >

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0340352474544!2d90.3700158!3d23.8692741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c32cbb436c33%3A0xeec8ec9a2f394640!2sHouse%2037%2C%20Rd%201A%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1695299999999!5m2!1sen!2sbd"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>




        
        {/* <Marker position={position} icon={icon}>
          <Popup>Dhaka, Uttara Sector 15</Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}
