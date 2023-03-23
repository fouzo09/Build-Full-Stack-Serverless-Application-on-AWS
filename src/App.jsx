import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBook from './views/AddBook'
import Home from './views/Home'

function App() {
  return (
        <div>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="share-document" element={ <AddBook/> } />
          </Routes>
        </div>
  )
}

export default App