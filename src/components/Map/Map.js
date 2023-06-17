import React from "react"
import GoogleMapReact from "google-map-react"
import "./map.css"
import LocationPin from "./LocationPin"

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Check out our Favorite Trips</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map
