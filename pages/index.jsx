import React, { useState } from "react"

import Menu from "../src/components/Menu"
import Map from "../src/components/Map"
import Main from "../src/styles/pages/home"

import { useData } from "../src/context/dataContext"

const mapKey = process.env.GOOGLE_MAPS_API_KEY

const markers = [
  {
    id: 0,
    name: "Extrafarma",
    tel: "(85) 99136-5347",
    logo: "",
    address: "R. Frederico Borges, 830",
    neighborhood: "Varjota",
    coords: {
      lat: -3.7362449,
      lng: -38.4893041
    },
    officeHour: {
      open: "07:00",
      close: "23:00",
      isFullyOpened: false
    },
    products: [
      {
        id: 0,
        name: "Álcool Gel",
        category: "Higiene"
      }
    ]
  },
  {
    id: 1,
    name: "Extrafarma2",
    tel: "(85) 99136-5347",
    logo: "",
    address: "R. Frederico Borges, 830",
    neighborhood: "Varjota",
    coords: {
      lat: -3.7322555,
      lng: -38.4823333
    },
    officeHour: {
      open: "07:00",
      close: "23:00",
      isFullyOpened: false
    },
    products: [
      {
        id: 0,
        name: "Álcool Gel",
        category: "Higiene"
      }
    ]
  }
]

const DEFAULT = {
  MAP_SETTINGS: {
    mapKey
  },
  GEO: {
    accepted: null,
    center: {
      lat: -3.71839,
      lng: -38.5434
    }
  }
}

const Index = () => {
  // Our custom hook to get context values
  const { data, loadingData } = useData()
  const [geolocationInfos, setGeo] = useState(DEFAULT.GEO)

  return (
    <Main>
      <Map markers={markers} settings={DEFAULT.MAP_SETTINGS} geo={geolocationInfos} />
    </Main>
  )
}

export default Index
