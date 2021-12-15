import Image from "next/image";

import style from "./index.module.scss";

export default function CardPostSimple({
  title,
  text,
  image
}) {

  return (
    <article className={style.cardPostSimple__item}>
      <figure className={style.cardPostSimple__figure}>
        <Image 
          src={image.src} 
          alt={title} 
          width={150}
          height={150}
          layout="responsive"
          priority
        />
      </figure>
      <section className={style.cardPostSimple__description}>
        <h2 className={style.cardPostSimple__description_title}>{title}</h2>
        <div className={style.cardPostSimple__description_text}>{text}</div>
      </section>
    </article>
  )
}