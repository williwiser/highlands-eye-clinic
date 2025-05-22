import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import { useEffect } from "react";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY!;

const GoogleMap = () => {
  const [markerRef, marker] = useMarkerRef();
  const coordinates = { lat: -18.968731669869253, lng: 32.673583865507716 };
  useEffect(() => {
    if (!marker) {
      return;
    }
    // do something with marker instance here
  }, [marker]);
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={coordinates}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker ref={markerRef} position={coordinates} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
