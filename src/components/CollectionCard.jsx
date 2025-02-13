import 'react'
import "../assets/scss/_colcard.scss"

// eslint-disable-next-line react/prop-types
const CollectionCard = ({img}) => {
     return (
     <a className='card' style={{backgroundImage: `url(${img})`}}>
          <div className="card-content" >
               <h4>Mechanics</h4>
               <p>shop collection</p>
          </div>
     </a>
       
     );
   };
   
   export default CollectionCard;
   