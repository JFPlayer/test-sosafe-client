import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useSelector, useDispatch } from 'react-redux'

import './Map.scss'
import 'leaflet/dist/leaflet.css'

import MapEvents from './MapEvents'
import IconMarker from './IconMarker'

import { setCurrentLocation } from '../../redux/locationDucks'

const Map = () => {
  const { markers, currentLocation, zoom } = useSelector(state => state.location)
  const { socket } = useSelector(state => state.global)
  const dispatch = useDispatch()

  const eventMarker = {
    click: (event) => {
      const { latlng } = event

      const locationFound = markers.find(location => {
        const { lat, lng } = location.latlng
        if(lat == latlng.lat && lng == latlng.lng) return true
      })

      if(locationFound) {
        dispatch(setCurrentLocation({
          latlng: locationFound.latlng,
          description: locationFound.description
        }))
        socket.emit('visitedLocation', locationFound._id)
      }
    }
  }

  return (
    <MapContainer
      center={currentLocation.latlng} 
      zoom={zoom}
    >
      <TileLayer
        attribution={`&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapEvents/>

      {markers.map(location => 
        <Marker 
          key={location._id} 
          position={location.latlng}
          eventHandlers={eventMarker}
          icon={IconMarker}
        >
          <Popup>
            {location.description}
          </Popup>
        </Marker>
      )}

    </MapContainer>
  )
}

export default Map
