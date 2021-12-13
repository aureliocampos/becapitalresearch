import Image from "next/image"
import ButtonSecondary from "../ButtonSecondary"

import style from "./index.module.scss";

export default function CardProducts({ productInfomations }) {
  
  const {
    image,
    title,
    text,
    link
  } = productInfomations
  
  return(
    <article className={style.cardProduct__article}>
      <figure className={style.cardProduct__figure}>
        <Image 
          src={image} 
          alt="asdas" 
          className={style.cardProduct__image}
          layout="responsive"
        />
      </figure>
      <h2 className={style.cardProduct__title}>{title}</h2>
      <p className={style.cardProduct__text}>{text}</p>
      <div className={style.cardProduct__button}>
        <ButtonSecondary link={link}>
          Saiba mais
        </ButtonSecondary>
      </div>
    </article>
  )
}