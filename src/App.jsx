import React, { Component } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Technology from './components/Technology'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/news" element={<News/>} />
          <Route exact path="/tech" element={<Technology/>} />
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}
