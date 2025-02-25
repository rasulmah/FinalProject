import 'react'
import '../../assets/scss/_drivercard.scss'

// eslint-disable-next-line react/prop-types
const DriversCard = ({img}) => {
  return (
    <div className='driver-card' style={{backgroundImage: `url(${img})`}}>
    <div className="driver-card-content " >
    <div className='d-flex justify-content-between flex-column align-items-start'>
          <p className="Drivers-Number">63</p>
          <h3 className="Drivers-Name">George Russell</h3>
          <a className='link'>
          <span>Shop George Russell</span>
          </a>
     </div>

    </div>
     </div>
  )
}

export default DriversCard