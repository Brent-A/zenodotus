import React from 'react'
import ReactDOM from 'react-dom'
// import Message from './js/Message'
import Home from './js/Home'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import './css/style.css'

ReactDOM.render(
  <div><Home /><SwaggerUI url="https://petstore.swagger.io/v2/swagger.json"/></div>,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

if(module.hot) // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
