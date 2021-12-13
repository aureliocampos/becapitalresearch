import ButtonSecondary from "../ButtonSecondary";
import style from "./index.module.scss";

export default function CardInverstorProfile({
  title,
  icon,
  text,
  link
}) {
  
  return(
    <aside className={style.investorProfile__item} key={title}>
      <div className={style.investorProfile__icon} dangerouslySetInnerHTML={{__html: `${icon}`}} />
      <h2 className={style.investorProfile__title}>{title}</h2>
      <p className={style.investorProfile__text}>{text}</p>
      <div className={style.investorProfile__button}>
        <ButtonSecondary link={link}>
          Saiba mais
        </ButtonSecondary>
      </div>
    </aside>
  )
}