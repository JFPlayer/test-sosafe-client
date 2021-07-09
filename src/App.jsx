import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'

import './sass/index.scss'

//redux store
import store from './redux/store'

//containers
import Layout from './containers/Layout'
import Home from './containers/Home'
import ControlPanel from './containers/ControlPanel'

import { setSocket } from './redux/global'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io()
    dispatch(setSocket(socket))
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/control-panel' component={ControlPanel}/>
          </Switch>
        </BrowserRouter>
      </Layout>
    </Provider>
  )
}

export default App
