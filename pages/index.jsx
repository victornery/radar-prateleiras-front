import React, { useState, useCallback } from "react"
import Map from "../src/components/Map"

import {
  Main,
  InitialView,
  OverLay,
  Welcome,
  Heading,
  HolderBtns,
  Button,
  Social
} from "../src/styles/pages/home"

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
  const [showMap, setShowMap] = useState(false)
  const [isGetLocation, setIsGetLocation] = useState(false)
  const [apiHasLoaded, setApiHasLoaded] = useState(false)

  const handleShowMap =() => setShowMap(true)

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      try {
        setIsGetLocation(true)
        navigator.geolocation.getCurrentPosition(position => {
          const { coords } = position
          const newLocation = {
            center: {
              lat: coords.latitude || coords.lat,
              lng: coords.longitude || coords.lng
            },
            zoom: 15
          }
          setGeo(newLocation)
          handleShowMap()
          setIsGetLocation(false)
        })
      } catch (error) {
        console.log("Error while capture geolocation: ", error)
      }
    }
  }

  const handleApiHasLoaded = (map, maps) => {
    setApiHasLoaded(true)
  }

  return (
    <Main>
      <InitialView hide={showMap}>
        <OverLay hide={showMap} />
        <Welcome hide={showMap}>
          <Heading> Radar Prateleiras </Heading>
          <Heading as="h3">
            Encontre Álcool gel, máscaras e afins na sua região.
          </Heading>
          <Heading as="h3">
            Para começar, aceite compartilhar sua localização.
          </Heading>
          <HolderBtns>
            <Button disable={isGetLocation} onClick={handleGeolocation}>
              {isGetLocation ? "Carregando..." : "Compartilhar Localização"}
            </Button>
            <span>ou</span>
            <Button onClick={handleShowMap}> Buscar manualmente </Button>
          </HolderBtns>
          <Social>
            <a href="https://bit.ly/fale-com-radar" target="_blank" rel="noopener">
              <img src='/whatsapp.svg' alt="Fale Conosco" />
            </a>
            <a href="http://bit.ly/ig-radar-prat" target="_blank" rel="noopener">
              <img src='instagram.svg' alt="Veja nossas redes sociais" />
            </a>
          </Social>
        </Welcome>
      </InitialView>
      <Map
        markers={markers}
        settings={DEFAULT.MAP_SETTINGS}
        geo={geolocationInfos}
        geoDefult={DEFAULT.GEO}
        apiHasLoaded={handleApiHasLoaded}
      />
    </Main>
  )
}

export default Index
