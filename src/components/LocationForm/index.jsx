import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import './LocationForm.scss'

import { createLocation } from '../../redux/locationDucks'

const LocationForm = () => {
  const { register, handleSubmit, setValue } = useForm()

  const { currentLocation } = useSelector(state => state.location)
  const dispatch = useDispatch()

  useEffect(() => {
    setValue('latlng.lat', currentLocation.latlng.lat)
    setValue('latlng.lng', currentLocation.latlng.lng)
    setValue('description', currentLocation.description)
  }, [currentLocation])


  const onSubmit = data => {
    dispatch(createLocation(data))
  }

  const handleChange = event => {
    const { value, name } = event.target
    
    if(value.match(/\de\-/)) {
      setValue(name, parseFloat(value).toFixed(15))
    }
  }

  return (
    <form
      className="location-form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
    > 
      <div className="location-form_inputs-container">
        <input
          className="location-form_input-coord"
          {...register('latlng.lat')}
          required
          min={-90}
          max={90}
          type="number"
          step='0.000000000000001'
        />
        <input
          className="location-form_input-coord"
          {...register('latlng.lng')}
          required
          min={-90}
          max={90}
          type="number"
          step={0.000000000000001}
        />
      </div>
      <input
        className="location-form_input-descrip"
        {...register('description')}
        required
      />
      <button className="location-form_btn">
        CREAR
      </button>
      
      
    </form>
  )
}

export default LocationForm
