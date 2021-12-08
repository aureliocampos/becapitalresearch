import style from "./index.module.scss";

export default function ButtonWithIcon({link, text, icon}) {
  return (
    <a href={link} className={style.button__primaryWithIcon}>
      {text}
      <span className={icon}></span>
    </a>
  )
}