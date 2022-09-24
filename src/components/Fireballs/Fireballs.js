import React, { useEffect, useState } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Circle,
  Popup,
  Marker,
} from "react-leaflet";
import Loader from "../Loader/Loader";
import "./Fireballs.css";
export default function Fireballs() {
  const [fireball, setFireBall] = useState();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getD = async () => {
      await fetch("https://ssd-api.jpl.nasa.gov/fireball.api")
        .then((res) => res.json())
        .then((result) => {
          setFireBall(result);
          setisLoading(false);
        });
    };
    getD();
  }, []);
  var fire = fireball?.data;
  const center = {
    lat: 17.5369044,
    lon: 78.3844137,
  };
  const zoom = 3;
  if (isLoading === false) {
    return (
      <div className="map">
        <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {fire?.map((item, index) => {
            if (item != null) {
              return (
                <Circle
                  key={index}
                  center={{
                    lat: item[3],
                    lon: item[5],
                  }}
                  color={"#4f617d"}
                  opacity={0.8}
                  radius={20000}
                  fill={true}
                  fillColor={"#4f617d"}
                  fillOpacity={0.8}
                >
                  <Popup>
                    <div className="popup">
                      <ul>
                        <li>Date : {item[0]}</li>
                        <li>Energy : {item[1]}</li>
                        {item[8] == null ? (
                          <div></div>
                        ) : (
                          <li>Velocity : {item[8]}</li>
                        )}

                        <li>Latitude : {item[3]}</li>
                        <li>Longitude : {item[5]}</li>
                      </ul>
                    </div>
                  </Popup>
                </Circle>
              );
            }
          })}
        </LeafletMap>
        <div className="container-fireball"></div>
      </div>
    );
  } else {
    return <Loader />;
  }
}
