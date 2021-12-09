import Image from "next/image";

import CapaBlogPost from "../../../media/images/capa-ativos.jpg";
import Tag from "../Tag";
import style from "./index.module.scss";

export default function CardBlogSimple() {
  const tags = ['Análise Técnica', 'Macroeconomia']

  return (
    <article className={style.cardBlogSimple__item}>
      <figure className={style.cardBlogSimple__figure}>
        <Image 
          src={CapaBlogPost} 
          alt="carteira 1" 
          width={170}
          height={170}
          layout="responsive"
        />
      </figure>
      <section className={style.cardBlogSimple__description}>
        <h2 className={style.cardBlogSimple__description_title}>Cash Machine</h2>
        <div className={style.cardBlogSimple__description_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. 
        </div>
        <Tag tags={tags} />
      </section>
    </article>
  )
}