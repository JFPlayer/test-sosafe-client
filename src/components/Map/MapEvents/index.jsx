import React, { useEffect } from 'react'
import { useMapEvents } from 'react-leaflet'
import { useDispatch } from 'react-redux'

import { setCurrentLocation } from '../../../redux/locationDucks'
import { setMap } from '../../../redux/global'

const MapEvents = () => {
  const dispatch = useDispatch()


  const map = useMapEvents({
    click: (event) => {
      const { latlng } = event
      map.flyTo(latlng)
      dispatch(setCurrentLocation({ latlng }))
    },
    
    moveend: () => {
      const latlng = map.getCenter()
      dispatch(setCurrentLocation({ latlng }))
    }
  })

  useEffect(() => {
    dispatch(setMap(map))
  }, [])

  return null
}

export default MapEvents
