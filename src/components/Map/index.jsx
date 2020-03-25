import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from '../Marker'

import { Container } from './styles'

const Map = ({ settings, geo, markers }) => {
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: settings.mapKey,
          language: 'pt',
          region: 'br'
        }}
        defaultCenter={geo.center}
        center={geo.center}
        defaultZoom={13}
        //Todo Listen API Loaded
        yesIWantToUseGoogleMapApiInternals
      >
        {markers.map((item, index) => (
          <Marker
            lat={item.coords.lat}
            lng={item.coords.lng}
            key={index}
            data={item}
          />
        ))}
      </GoogleMapReact>
    </Container>
  )
}

export default Map
