import React, { useEffect, useRef } from "react";

//LEAFLET
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//STYLES
import { MapContainer } from "./TemperatureMap.styles";
import "./index.css";

//TYPES
interface TemperatureMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const TemperatureMap: React.FC<TemperatureMapProps> = ({
  latitude,
  longitude,
  zoom = 10,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current || !API_KEY) return;

    //Initialize the map
    const map = L.map(mapRef.current).setView([latitude, longitude], zoom);

    //Add OpenStreetMap as base layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    //Add OpenWeatherMap temperature tile layer
    L.tileLayer(
      `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
      {
        attribution:
          'Weather data © <a href="https://openweathermap.org">OpenWeatherMap</a>',
        maxZoom: 18,
      }
    ).addTo(map);

    //Define a custom legend control
    const LegendControl = L.Control.extend({
      options: { position: "bottomright" },

      onAdd: function () {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML = `
          <div class="legend-container">
          <strong>Temperature (°C)</strong>
          <div class="gradient-bar"></div>
          <div class="scale-labels">
            <span>-30°C</span><span>0°C</span><span>30°C</span><span>60°C</span>
          </div>
        </div>
        `;
        return div;
      },
    });

    //Add legend to the map
    const legend = new LegendControl();
    legend.addTo(map);

    return () => {
      map.remove(); //Cleanup map instance on unmount
    };
  }, [latitude, longitude, zoom]);

  return <MapContainer ref={mapRef} />;
};

export default TemperatureMap;
