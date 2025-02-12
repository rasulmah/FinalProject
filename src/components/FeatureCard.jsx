import 'react'
import "../assets/scss/_fcard.scss"

const FeatureCard = () => {
  return (
    <div className='card-container d-flex flex-column justify-content-between align-items-center'>
     <img src="/src/assets/images/usp_merchandise.png" alt="" />
     <h3 className='card-heading'>Official Merchandise</h3>
     <p className='card-text'>The Official Destination for Silver Arrows Merchandise</p>
    </div>
  )
}

export default FeatureCard