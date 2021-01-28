import React from "react";
import { Polygon } from "react-leaflet";
import FuzzyLayer from "./FuzzyLayer";
import FuzzyPolygon from "./FuzzyPolygon";

export const FuzzyPoly = (props) => {
  return (
    <Polygon
      stroke={false}
      positions={props.positions}
      color={"blue"}
      uncertainty={props.uncertainty}
    ></Polygon>
  );
};

export { FuzzyLayer, FuzzyPolygon };
