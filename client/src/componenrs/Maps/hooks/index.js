import React, { useState, useRef, useEffect } from "react";
import maplibre from "maplibre-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

const useMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(85.324);
  const [lat, setLat] = useState(27.7172);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    console.log("Not current map so " + mapContainer.current);
    map.current = new maplibre.Map({
      container: mapContainer.current,
      style:
        "https://api.baato.io/api/v1/styles/retro?key=bpk.RbCFuyprceXfPDgW7kxOENj-7iX968-ZRiYMv4nw9cwM",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(draw);
  });
  const draw = new MapboxDraw({
    displayControlsDefault: false,
    color: "red",
    controls: {
      polygon: true,
      trash: true,
    },
    defaultMode: "draw_polygon",
  });

  if (map.current) {
    map.current.on("draw.create", updateArea);

    map.current.on("draw.delete", updateArea);

    map.current.on("draw.update", updateArea);
  }

  function updateArea() {
    console.log("Should Print");
    const data = draw.getAll();
    console.log(data);
    return data;
  }

  return {
    mapContainer,
    map,
    lng,
    lat,
    zoom,
    setLat,
    setLng,
    setZoom,
  };
};

export default useMap;