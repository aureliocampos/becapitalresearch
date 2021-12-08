import style from "./index.module.scss";
import Link from "next/link";

export default function ButtonWithIcon({link, text, icon}) {
  return (
    <Link href={link} passHref>
      <a className={style.button__primaryWithIcon}>
        {text}
        <span className={icon}></span>
      </a>
    </Link>
  )
}