import Image from "next/image";
import becapitalWhite from "../../../media/images/logo-becapital-simples-white.svg"

import style from "./index.module.scss";

export default function SectionNewsletter() {
  
  const socialMedia = [
    {
      name: 'Instagram',
      icon: 'icon-instagram',
      link: '#'
    },
    {
      name: 'Youtube',
      icon: 'icon-youtube',
      link: '#'
    },
    {
      name: 'Twitter',
      icon: 'icon-twitter',
      link: '#'
    },
    {
      name: 'Linkedin',
      icon: 'icon-linkedin',
      link: '#'
    },
  ]

  return(
    <section className={`${style.section} ${style.sectionNewsletter}`}>
      <div className={style.section__container}>
        <div className={style.newsletter__form}>
          <h2 className={style.form__title}>Cadastre seu e-mail para receber nossa <strong>BeNews</strong></h2>
        </div>
        <div className={style.newsletter__social}>
          <h2 className={style.social__title}>Nos acompanhe nas redes sociais:</h2>
          <ul className={style.social__items}>
            {socialMedia.map((social) => {
              return (
                <li className={style.social__item} key={social.name}>
                  <a href={social.link} className={style.social__link} aria-label={`Link externo para o ${social.name} Becapital`}>
                    <span className={social.icon}></span>
                  </a>
                </li>
              )
            })}
          </ul>
          <div className={style.companyLogo}>
            <Image 
              src={becapitalWhite} 
              alt="Logo da empresa Becapital" 
              layout="responsive" 
              width="181"
              height="30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}