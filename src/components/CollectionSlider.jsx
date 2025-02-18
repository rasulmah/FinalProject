import  'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../assets/scss/_colslider.scss";

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';
import CollectionCard from './CollectionCard';

const CollectionSlider = () => {
  console.log("CollectionSlider Loaded");

  return (
    <Swiper
      observeParents={true}
      observer={true}
      slidesPerView={3.2}
      spaceBetween={5}
      loop={false}
      scrollbar={{ draggable: true }} // Make scrollbar visible
      modules={[Scrollbar]}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },

        700: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 2.7,
        },
        1024: {
          slidesPerView: 3.2,
        },

      }}
      className="mySwiper2"
      id='CollectionSlider'
    >
      <SwiperSlide><CollectionCard img="https://shop-int.mercedesamgf1.com/cdn/shop/files/HP_Carousel_4.png?v=1738685047&width=1300" /></SwiperSlide>
      <SwiperSlide><CollectionCard img="https://shop-int.mercedesamgf1.com/cdn/shop/files/HP_Carousel_2.png?v=1738685078&width=1300"/></SwiperSlide>
      <SwiperSlide><CollectionCard img="https://shop-int.mercedesamgf1.com/cdn/shop/files/HP_Carousel_1.png?v=1738685173&width=1300" /></SwiperSlide>
      <SwiperSlide><CollectionCard img="https://shop-int.mercedesamgf1.com/cdn/shop/files/HP_Carousel_3.png?v=1738685218&width=1080" /></SwiperSlide>
      <SwiperSlide><CollectionCard img="https://shop-int.mercedesamgf1.com/cdn/shop/files/HP_Carousel_5.png?v=1738685254&width=1296" /></SwiperSlide>
    </Swiper>
  );
};

export default CollectionSlider;