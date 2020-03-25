import React, { useState } from 'react'

import MarkerIcon from '../MarkerIcon'

import {
  Holder,
  IconHolder,
  Info,
  Title,
  Tel,
  Address,
  OfficeHour
} from './styles'

const Marker = ({ data }) => {
  const { name, tel, address, officeHour } = data
  const [itemOpened, setItemOpened] = useState(false)

  const handleOpenInfo = () => {
    setItemOpened(!itemOpened)
  }

  return (
    <Holder>
      <IconHolder onClick={handleOpenInfo}>
        <MarkerIcon />
      </IconHolder>
      <Info isOpen={itemOpened}>
        <Title> {name} </Title>
        <Tel>
          <strong> Telefone: </strong>
          {tel}
        </Tel>
        <Address>
          <strong> Endereço: </strong>
          {address}
        </Address>
        <OfficeHour>
          <strong> Horário de Fncionamento: </strong>
          {officeHour.open} - {officeHour.close}
        </OfficeHour>
      </Info>
    </Holder>
  )
}

export default Marker
