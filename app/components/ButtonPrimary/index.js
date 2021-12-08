import style from "./index.module.scss";
import Link from "next/link";

export default function ButtonPrimary({
  link, text, target
}) {
  let crossOrigin;

  if (target === true) {
   crossOrigin = {target: '_blank', rel: 'noopener noreferrer'};
  }  
  return (
    <>
      <Link href={link} passHref>
        <a className={style.button__primary} {...crossOrigin}>{text}</a>
      </Link>
    </>
  )
}