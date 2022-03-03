import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import { HomeScreen } from '../screens/index'

export const RoutesApp = () => {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
            </Routes>
        </Router>
  )
}
