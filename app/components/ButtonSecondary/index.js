import style from "./index.module.scss";
import Link from "next/link";

export default function ButtonSecondary({
  link, children, target, isButton, changeColor, events

}) {
  let crossOrigin, classNameChange;

  if (target === true) {
   crossOrigin = {target: '_blank', rel: 'noopener noreferrer'};
  }  

  if (changeColor === 'gray') {
    classNameChange = `${style.button__secondary_gray}`
  } else {
    classNameChange = `${style.button__secondary}`
  }


  return (
    <>
    {
      isButton
      ? <button className={classNameChange} onClick={events}>{children}</button>
      : <Link href={link} passHref>
        <a className={classNameChange} {...crossOrigin}>{children}</a>
      </Link>
    }
    </>
  )
}