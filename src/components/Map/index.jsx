import React, { useEffect } from 'react'
import L from 'leaflet'
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  ZoomControl
} from 'react-leaflet'

import { Container, Info, Title, Tel, Address, OfficeHour } from './styles'

const Map = ({ geo, markers }) => {
  const { center, zoom } = geo
  const position = [center.lat, center.lng]

  // Aproach to load the Custom Icon
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'marker.svg',
      shadowUrl: 'marker.svg'
    })
  }, [])

  return (
    <Container>
      <LeafletMap center={position} zoomControl={false} zoom={zoom}>
        <ZoomControl position="bottomleft" />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {markers.map((item, index) => (
          <Marker key={index} position={[item.coords.lat, item.coords.lng]}>
            <Popup>
              <Info>
                <Title> {item.name} </Title>
                <Tel>
                  <strong> Telefone: </strong>
                  {item.tel}
                </Tel>
                <Address>
                  <strong> Endereço: </strong>
                  {item.address}
                </Address>
                <OfficeHour>
                  <strong> Horário de Fncionamento: </strong>
                  {item.officeHour.open} - {item.officeHour.close}
                </OfficeHour>
              </Info>
            </Popup>
          </Marker>
        ))}
      </LeafletMap>
    </Container>
  )
}

export default Map
