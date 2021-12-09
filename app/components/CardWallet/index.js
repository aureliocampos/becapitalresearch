
import Image from "next/image"

import CachMachine from "../../../media/images/cash_machine.png";
import ButtonSecondary from "../ButtonSecondary";
// import CapaBlogPost from "../../../media/images/capa-ativos.jpg";
import style from "./index.module.scss";

export default function CardWallet({walletInformation}) {

  const {
    name,
    price,
    text,
    linkKnowMore,
    linkBuyNow
   } = walletInformation
  return(
    <article className={style.walletFeatured__item}>
      <figure className={style.walletFeatured__figure}>
      <Image 
        src={CachMachine} 
        alt="carteira 1" 
        width={360}
        height={360}
        layout="responsive"
      />
      </figure>
      <section className={style.walletFeatured__description}>
        <header className={style.walletFeatured__description_header}>
          <h2 className={style.walletFeatured__description_title}>{name}</h2>
          <h3 className={style.walletFeatured__description_price}>{price}</h3>
        </header>
        <div className={style.walletFeatured__description_text}>{text}</div>
        <footer className={style.walletFeatured__description_footer}>
          <ButtonSecondary link={linkKnowMore} changeColor="gray">Saiba mais</ButtonSecondary>
          <ButtonSecondary link={linkBuyNow} isButton >Comprar agora</ButtonSecondary>
        </footer>
      </section>
    </article>
  )
}