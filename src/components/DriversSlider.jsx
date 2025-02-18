import  'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import '../assets/scss/_driverslider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import DriversCard from './DriversCard';

const DriversSlider = () => {
  return (
     <>
     <Swiper
     slidesPerView={4}
     spaceBetween={30}
     pagination={{
       clickable: true,
     }}
     breakpoints={{
       300: {
         slidesPerView: 1,
         spaceBetween: 5,
       },
       850: {
         slidesPerView: 2,
         spaceBetween: 5,
       },
       1024: {
         slidesPerView: 2,
         spaceBetween: 5,
       },
     }}
     modules={[Pagination]}
     className="mySwiper3"
     id="DriversSlider">
       <SwiperSlide><DriversCard img="https://shop-int.mercedesamgf1.com/cdn/shop/files/03022025_GEORGE_MF1_Collateral25__03022025_GEORGE__MF1_Collateral25_Set_5_INFORMAL_EDITORIAL_-_SESSION_2_200507.jpg?v=1738785221&width=1920"></DriversCard>
       </SwiperSlide>
       <SwiperSlide><DriversCard img="https://shop-int.mercedesamgf1.com/cdn/shop/files/02022025_Kimi__MF1_Collateral25_Set_5_INFORMAL_EDITORIAL_-_SESSION_2_200554_v2.jpg?v=1738776295&width=1920"></DriversCard></SwiperSlide>
     </Swiper>
   </>
  )
}

export default DriversSlider