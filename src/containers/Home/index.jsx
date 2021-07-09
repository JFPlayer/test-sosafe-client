import React from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'

import SearchBar from '../../components/SearchBar'
import SearchResults from '../../components/SearchResults'


const Home = () => {
  

  return (
    <div className="home">
      <SearchBar />
      <SearchResults />
      <Link to="/control-panel" className="home_link">
        Editar/Crear
      </Link>
    </div>
  )
}

export default Home
