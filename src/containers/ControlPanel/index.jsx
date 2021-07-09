import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import './ControlPanel.scss'

import LocationForm from '../../components/LocationForm'

import { getLocations, resetMarkets } from '../../redux/locationDucks'

const ControlPanel = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    //get all locations
    dispatch(getLocations())
    
    return () => {
      //all locations are only visible in the control panel
      dispatch(resetMarkets())
    }
  }, [])

  return (
    <div className="control-panel">
      <LocationForm/>
      <Link to="/" className="control-panel_link">
        Volver atras
      </Link>
    </div>
  )
}

export default ControlPanel
