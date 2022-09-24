import React, { useEffect, useState } from "react";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import Loader from "../Loader/Loader";
import "./Wildfire.css";
function Wildfire() {
  const [eventdata, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setisLoading(false);
        });
    };
    getData();
  }, []);
  var data = eventdata.events;
  const center = {
    lat: 17.5369044,
    lon: 78.3844137,
  };
  const zoom = 2;
  if (isLoading === false) {
    return (
      <div className="map">
        <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {data.map((item, index) => {
            if (item.categories[0].id === 8) {
              return (
                <Circle
                  key={index}
                  center={{
                    lat: item.geometries[0].coordinates[0],
                    lon: item.geometries[0].coordinates[1],
                  }}
                  color={"#fb4443"}
                  opacity={0.8}
                  radius={20}
                >
                  <Popup>
                  <div>
                      <ul>
                        <li>{item.categories[0].title}</li>
                        <li>Latitude : {item.geometries[0].coordinates[0]}</li>
                        <li>Longitude : {item.geometries[0].coordinates[1]}</li>
                      </ul>
                    </div>
                  </Popup>
                </Circle>
              );
            } else if (item.categories[0].id === 12) {
              return (
                <Circle
                  center={{
                    lat: item.geometries[0].coordinates[0],
                    lon: item.geometries[0].coordinates[1],
                  }}
                  color={"#7dd71d"}
                  opacity={0.8}
                  radius={20}
                >
                  <Popup>
                  <div>
                      <ul>
                        <li>{item.categories[0].title}</li>
                        <li>Latitude : {item.geometries[0].coordinates[0]}</li>
                        <li>Longitude : {item.geometries[0].coordinates[1]}</li>
                      </ul>
                    </div>
                  </Popup>
                </Circle>
              );
            } else if (item.categories[0].id === 15) {
              return (
                <Circle
                key={index}
                  center={{
                    lat: item.geometries[0].coordinates[0],
                    lon: item.geometries[0].coordinates[1],
                  }}
                  color={"#042483"}
                  opacity={0.8}
                >
                  <Popup>
                    <div>
                      <ul>
                        <li>{item.categories[0].title}</li>
                        <li>Latitude : {item.geometries[0].coordinates[0]}</li>
                        <li>Longitude : {item.geometries[0].coordinates[1]}</li>
                      </ul>
                    </div>
                  </Popup>
                </Circle>
              );
            }
          })}
        </LeafletMap>
        <div className="container-wildfire">
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default Wildfire;
