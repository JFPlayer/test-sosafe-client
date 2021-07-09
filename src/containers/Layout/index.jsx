import React, { useState } from 'react'

import './Layout.scss'

import Map from '../../components/Map'

const Layout = ({ children }) => {
  const [panelActive, setPanelActive] = useState(true)

  return (
    <main 
      className={`layout ${panelActive ? '' : 'disabled'}`}
    >
      <aside className="layout_panel">
        {children}
        <button 
          className="panel_btn-drop-down"
          onClick={() => setPanelActive(!panelActive)}
        >
          {'<'}
        </button>
      </aside>
      <div className="layout_map">
        <Map />
      </div>
    </main>
  )
}

export default Layout
