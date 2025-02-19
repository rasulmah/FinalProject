import  'react'
import '../assets/scss/_singleProductSmall.scss'


const SingleProductSm = () => {
  return (
    <div className='product-container d-flex justify-content-between align-items-end flex-column'>
     <div className="product-img"></div>
     <div className="info-container">
          <h3 className="title">
          2024 Team Baseball Cap Black
          </h3>
          <div className="info-body d-flex justify-content-between align-items-center">
               <p className='price'>500AZN</p>
               <p className="rating">5ulduz</p>
          </div>
     </div>
    </div>
  )
}

export default SingleProductSm