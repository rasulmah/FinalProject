// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../assets/scss/_home.scss'
import FeatureSlider from '../components/FeatureSlider'
import MagneticButton from '../components/MagneticButton'
import SectionHeader from '../components/SectionHeader'
import CollectionSlider from '../components/CollectionSlider'
import DriversSlider from '../components/DriversSlider'
/* import CollectionSlider from '../components/CollectionSlider' */



const Home = () => {
  return (
  <>
    <div className='hero-main-section'>
      <section className='hero-main'>
        <div className="first-section"> 
        </div>
      </section>
    </div>

    <div className="hero-text d-flex justify-content-between align-items-center flex-column">
      <div className="hero-content d-flex justify-content-between align-items-center flex-column">
      <p className='kicker'>adidas x Mercedes-AMG F1</p>
      <h2 className='title'>The Race Begins</h2>
      </div>
      <MagneticButton className="d-flex" href="www.google.com" text="Shop Now"></MagneticButton>
    </div>
  
    <section className='second-section d-flex justify-content-center align-items-center'>
        <FeatureSlider />
    </section>

    <div className="sections">

    <section className="collections d-flex justify-content-between align-items-center flex-column">
      <div className="section-header">
        <SectionHeader h1="New 2025" h2="New Collections" p="Grab the latest collections from Official Team Merchandise">
        </SectionHeader>
      </div>

      <div className="section-body">
        <CollectionSlider></CollectionSlider>
      </div>

      <MagneticButton text="Shop Fanwear" href="www.google.com"></MagneticButton>
    </section>


    <section className="drivers d-flex justify-content-between align-items-center flex-column">
      <div className="section-header">
        <SectionHeader h1="Drivers" h2="The Drivers' Collections" p="Kimi or George superfan? Look no further than the Driver Collections to show your support for our boys">
        </SectionHeader>
      </div>

      <div className="drivers-body">
        <DriversSlider></DriversSlider>
      </div>

    </section>




    </div>

    
  </>
    
  )
}

export default Home