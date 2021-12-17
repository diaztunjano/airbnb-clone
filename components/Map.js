import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  // Transforming the searchResults to serve in mapbox.
  const coords = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const [location, setLocation] = useState({});

  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/davedayst/ckxapd5en3kb414p5pv6jedkc"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="pin"
              onClick={() => setLocation(result)}
              className="cursor-pointer animate-bounce text-2xl"
            >
              📍
            </p>
          </Marker>
          {/* Popup showing when clicking in pin */}
          {location.long === result.long ? (
            <Popup
              onClose={() => setLocation({})}
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
