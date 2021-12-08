import style from "./index.module.scss";

export default function NameSocialMedia({
  name,
  instagram,
  twitter,
  linkedin,
  media
}) {

  const socialmedias = [
    {
      name: 'instagram',
      link: instagram,
      icon: 'icon-instagram'
    },
    {
      name: 'twitter',
      link: twitter,
      icon: 'icon-twitter'
    },
    {
      name: 'linkedin',
      link: linkedin,
      icon: 'icon-linkedin'
    },
  ]

  return (
    <header className={style.analysts__info} data-media={media}>
      <h2 className={style.analysts__name}>{name}</h2>
      <ul className={style.analysts__social_items}>
        {
          socialmedias.map((social) => {
            return(
              <li className={style.analysts__social_item} key={name}>
                <a href={social.link} className={style.analysts__social_link} aria-label={`Link externo para a(o) ${social.name} de ${name}`}>
                  <span className={social.icon}></span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </header>
  )
}
