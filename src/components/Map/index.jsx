import React, { useState, useEffect, memo } from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from '../Marker'

import { Container } from './styles'

const Map = ({ settings, geo, geoDefult, markers, apiHasLoaded }) => {
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: settings.mapKey,
          language: 'pt',
          region: 'br'
        }}
        defaultCenter={geoDefult.center}
        center={geo.center}
        zoom={geo.zoom || 13}
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
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

export default memo(Map)
