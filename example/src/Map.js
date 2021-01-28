import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { createUseStyles } from "react-jss";
import { FuzzyLayer, FuzzyPolygon } from "leaflet-fuzzy";

const useStyles = createUseStyles((theme) => ({
  map: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
}));

const Map = (props) => {
  const classes = useStyles(props);

  const features = props.data.features;

  const data = features.map((feature) => {
    if (
      !feature.geometry ||
      !feature.geometry.type ||
      feature.geometry.type !== "Polygon"
    ) {
      return undefined;
    }
    return {
      positions: feature.geometry.coordinates.map((cgroup) =>
        cgroup.map((c) => ({ lat: c[1], lng: c[0] })),
      ),
      properties: feature.properties,
    };
  });
  console.log(data);
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      // onMouseMove={(e) => console.log(e)}
    >
      <MapContainer
        className={classes.map}
        center={[35, -100]}
        zoom={5}
        zoomControl={false}
      >
        {/* <GeoJSON data={}></GeoJSON> */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: US National Park Service"
          minZoom={2}
          maxZoom={10}
        />

        {/* the below uses of FuzzyPolygon and FuzzyLayer are equivalent */}

        {/* <FuzzyPolygon
          positions={data[0].positions}
          properties={data[0].properties}
        ></FuzzyPolygon>
        <FuzzyPolygon
          positions={data[1].positions}
          properties={data[1].properties}
        ></FuzzyPolygon> */}

        <FuzzyLayer data={data}></FuzzyLayer>
      </MapContainer>
    </div>
  );
};

export default Map;
