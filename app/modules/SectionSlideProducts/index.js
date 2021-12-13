import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination"
import 'swiper/css';

import SwiperCore, {
  Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

import CardProducts from '../../components/CardProducts';

import style from "./index.module.scss";

export default function SectionSlideProducts({ productsForSlides }) {
  
  return (
    <section className={style.slideProducts__section}>
      <div className={style.slideProducts__container}>
        <h2 className={style.slideProducts__title}>Free to Be</h2>
        <p className={style.slideProducts__subtitle}>Baixe grátis nossos produtos e materiais de investimentos</p>
        <Swiper
          className={style.slideProducts__swiper}
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
    </section>
  )
}