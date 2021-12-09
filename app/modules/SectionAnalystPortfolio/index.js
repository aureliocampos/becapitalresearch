import CardBlogSimple from "../../components/CardBlogSimple";
import CardWallet from "../../components/CardWallet";
import ButtonSecondary from "../../components/ButtonSecondary";
import { Children } from "react";
import style from "./index.module.scss"

export default function SectionAnalystPorfolio({children}) {
  const wallet = {
    name: "Cash Machine",
    price: "10,99",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat aliquet nisl, vel convallis metus venenatis sed. Sed quis feugiat ipsum, eu interdum purus. Aenean finibus diam in ligula scelerisque sollicitudin.",
    linkKnowMore: "#linksaibamais",
    linkBuyNow: "#compraragora",
  }

  return (
    <>
    <div className={style.analystFeatured__open}>
        <hr/><span className="icon-arrow-bottom"></span>
      </div>
      <aside className={style.analystFeatured__wallet}>
        <h2 className={style.analystFeatured__title}>Carteiras Assinadas</h2>
        <div className={style.analystFeatured__items}>
          <CardWallet walletInformation={wallet} />
          <CardWallet walletInformation={wallet} />
          <CardWallet walletInformation={wallet} />
          <CardWallet walletInformation={wallet} />
          
        </div>
      </aside>
      <aside className={style.analystFeatured__blog}>
        <h2 className={style.analystFeatured__title}>Meus Artigos</h2>
        <div className={style.analystFeatured__items}>
          <CardBlogSimple />
          <CardBlogSimple />
          <CardBlogSimple />
        </div>
      </aside>
      {children}
    </>
  )
}