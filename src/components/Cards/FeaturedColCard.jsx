import 'react'

import '../../assets/scss/components/cards/_featuredColCard.scss'

const FeaturedColCard = () => {
  return (
    <div className='featured-card-container d-flex flex-column align-items-left justify-content-end'>
      <div className="t-body d-flex flex-column align-items-left justify-content-center ">
        <h3 className="category category-heading">Caps & Hats</h3>
        <p className="category-subtext">
        The iconic Mercedes-AMG F1 Team Cap is the best way to complete an outfit
        </p>
        <a className='shp-text d-flex'>
          <p>Shop</p> 
          <p className='category'>Caps & Hats</p>
        </a>
      </div>
      
    </div>
  )
}

export default FeaturedColCard