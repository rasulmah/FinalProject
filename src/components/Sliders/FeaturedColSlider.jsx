import  'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import {  Navigation, Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/scss/components/sliders/_featuredcolSlider.scss' 
import SingleProductSm from '../Cards/SingleProductSm';
import SwiperNavButtons from '../Buttons/SwiperNavButtons';


const TrendingSlider = () => {
  return (
    <>
    <Swiper 
        slidesPerView="auto"
        spaceBetween={5}
        navigation={true} modules={[Navigation, Pagination]}
        className="mySwiper5 "
        id="FeaturedColSlider"
      >
          <SwiperNavButtons></SwiperNavButtons>
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
        

      </Swiper></>
  )
}

export default TrendingSlider