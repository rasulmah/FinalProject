// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../assets/scss/_home.scss'
import FirstCarousel from '../components/FirstCarousel'


const Home = () => {
  return (
    <div className='hero-main-section'>
    <section className='hero-main'>
      <div className="first-section">
        
      </div>
      <div className="second-section">
      <FirstCarousel></FirstCarousel>
      </div>
      
    </section>
  </div>
  )
}

export default Home