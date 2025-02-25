import  'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/scss/_trendingSlider.scss' 
import SingleProductSm from '../Cards/SingleProductSm';


const TrendingSlider = () => {
  return (
    <>
    <Swiper
        slidesPerView={5}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper4"
        id="trendingSlider"
      >
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
        <SwiperSlide><SingleProductSm></SingleProductSm></SwiperSlide>
      </Swiper></>
  )
}

export default TrendingSlider