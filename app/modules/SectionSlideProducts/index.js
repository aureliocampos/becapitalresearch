import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination"
import 'swiper/css';
import 'swiper/css/navigation';

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

import CardProducts from '../../components/CardProducts';

import style from "./index.module.scss";

export default function SectionSlideProducts({ productsForSlides }) {
  
  return (
    <section className={style.slideProducts__section}>
      <div className={style.slideProducts__container}>
        <h2 className={style.slideProducts__title}>Free to Be</h2>
        <p className={style.slideProducts__subtitle}>Baixe grátis nossos produtos e materiais de investimentos</p>
        <div className={style.slideProducts__container_swiper}>
          <Swiper
            className={style.slideProducts__swiper}
            navigation={true}
            spaceBetween={30}
            slidesPerView={2}
            initialSlide={2}
            centeredSlides={true}
            breakpoints={{
              '1024': {
                "slidesPerView": 3,
                "spaceBetween": 30
              }
            }}
          >
            {productsForSlides.map((item,index) => {
            return (
              <SwiperSlide key={index}>
                <CardProducts productInfomations={item} />
              </SwiperSlide>
            )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}