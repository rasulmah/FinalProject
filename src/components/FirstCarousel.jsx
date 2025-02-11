import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FirstCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/src/assets/images/MAPF1_RP_TEAM_BASEBALL_CAP_BLACK_BACK.jpeg" alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
};

export default FirstCarousel