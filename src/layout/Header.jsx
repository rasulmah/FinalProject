import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className='d-flex justify-content-between align-items-center p-5' width={100} >
     <img src='https://shop-int.mercedesamgf1.com/cdn/shop/files/logo.png?v=1674137725&width=180' style={{"objectFit":"contain"}} />
     <p className='text-center'>Mercedes Benz Shop</p>
   </Container>
  )
}

export default Header