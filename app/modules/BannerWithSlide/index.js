import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';


export default function BannerWithSlide({ slideImages }) {
  return(
    <section className="bannerWithSlide__section">
      <div className="bannerWithSlide__container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
      >
        {slideImages.map( (image, index) => {
          return(
            <SwiperSlide key={index}>
              <Image src={image.src} alt={image.alt}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    </section>
  )
}