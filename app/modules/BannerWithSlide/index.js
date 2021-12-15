import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import SwiperCore, {
   Navigation
} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import style from "./index.module.scss"

SwiperCore.use([Navigation]);

export default function BannerWithSlide({ slideImages }) {
  return(
    <section className={style.bannerWithSlide__section}>
      <div className={style.bannerWithSlide__container}>
        <div className={style.bannerWithSlide__container_swiper}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          className={style.bannerWithSlide__swiper}
        >
          {slideImages.map( (image, index) => {
            return(
              <SwiperSlide key={index}>
                <Image src={image.src} alt={image.alt} className={style.bannerWithSlide__image}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
      </div>
    </section>
  )
}