import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About'
import Footer from './Footer'
import Info from './Info'
import Interests from './Interests'

import './index.css'

function Card (){
  return(
    <div className='card'>

      <Info />

      <About />

      <Interests />

      <Footer />
      
      <h1>hhjjjkjij</h1>

    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Card />
)
