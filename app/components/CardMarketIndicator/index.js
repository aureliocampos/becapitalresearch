import Image from "next/image"


import arrowUp from "../../../media/images/arrow-dash-up.png"
import arrowDown from "../../../media/images/arrow-dash-down.png"

import style from "./index.module.scss";

export default function CardMarketIndicator({ isNegative }) {
  
  return(
    <div className={style.CardMarketIndicator__container}>
      <h3 className={style.CardMarketIndicator__title}>IBOV</h3>
      <p className={style.CardMarketIndicator__price}><span>R$</span>5,50</p>
      <div className={style.CardMarketIndicator__percent} 
        data-indicator={ isNegative ? "negative" : "positive"}
      >
        <Image src={isNegative ? arrowDown : arrowUp} alt="percent" /> 
        <p className={style.CardMarketIndicator__percent_value}>+0,46%</p>
      </div>
    </div>
  )
}