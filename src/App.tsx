import React from 'react'
import { Component as WeatherInfo } from './components/pages/WeatherInfo'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <WeatherInfo />
      <Footer />
    </React.Fragment>
  )
}

export default App
