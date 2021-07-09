import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import './SearchBar.scss'

import { getLocations, getKeywords } from '../../redux/locationDucks'

const SearchBar = () => {
  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()
  const { keywords } = useSelector(state => state.location)

  
  useEffect(() => {
    dispatch(getKeywords())
    
  }, [])

  const onSubmit = data => {
    dispatch(getLocations(data.keyword))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="search-bar"
    >
      <input
        {...register('keyword')}
        type="text"
        autoComplete="off"
        list='keywordsList'
      />

      <datalist id="keywordsList">
        {keywords.map(keyword => 
          <option key={keyword} value={keyword} />
        )}
      </datalist>

      <button>
        BUSCAR
      </button>
    </form>
  )
}

export default SearchBar
