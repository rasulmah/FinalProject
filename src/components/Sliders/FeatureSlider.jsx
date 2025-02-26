// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/scss/components/sliders/_featureslider.scss'

// import required modules
import {  Autoplay, Pagination } from 'swiper/modules';
import FeatureCard from '../Cards/FeatureCard';

const FeatureSlider = () => {
  return (
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000, // Set loop interval to 3 seconds (3000ms)
          disableOnInteraction: true, // Keep autoplay running even after user interaction
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: { delay: 2000 }
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: { delay: 2000 }
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            loop: false
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        id="FeatureSlider"
      >
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
        
      </Swiper>
  );
};

export default FeatureSlider;

