import React from 'react'
import { useSelector } from 'react-redux'

import './SearchResults.scss'


const SearchResults = () => {
  const { markers, zoom } = useSelector(state => state.location)
  const { socket, map } = useSelector(state => state.global)


  const handleClickLocation = (location) => {
    map.flyTo(location.latlng, zoom)
    socket.emit('visitedLocation', location._id)
  }

  return (
    <div className="search-results">
      {markers.map(location => 
        <div 
          key={location._id}
          className="results-item"
          onClick={() => handleClickLocation(location)}
        >
          <div className="results-item_title">
            {location.description}
          </div>
          <span className="results-item_coords">
            {`${location.latlng.lat}, ${location.latlng.lng}`}
          </span>
        </div>
      )}
    </div>
  )
}

export default SearchResults
