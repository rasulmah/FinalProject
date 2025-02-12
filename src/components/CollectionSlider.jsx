import  'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/scss/colslider.scss";

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';
import CollectionCard from './CollectionCard';

const CollectionSlider = () => {
  console.log("CollectionSlider Loaded");

  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={1}
      loop={false}
      scrollbar={{ draggable: true }} // Make scrollbar visible
      modules={[Scrollbar]}
      className="mySwiper2"
    >
      <SwiperSlide><CollectionCard /></SwiperSlide>
      <SwiperSlide><CollectionCard /></SwiperSlide>
      <SwiperSlide><CollectionCard /></SwiperSlide>
      <SwiperSlide><CollectionCard /></SwiperSlide>
      <SwiperSlide><CollectionCard /></SwiperSlide>
    </Swiper>
  );
};

export default CollectionSlider;