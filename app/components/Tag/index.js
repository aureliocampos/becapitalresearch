
import style from "./index.module.scss"

export default function tag({tags}) {
  return (
    <ul className={style.postTag__items}>
      {
       tags.map((tag) => {

        return(
          <li className={style.postTag__item} key={tag}>
            <span className={style.postTag__circle}></span>{tag}
          </li>
        )
       }) 
      }
    </ul>
  )
}