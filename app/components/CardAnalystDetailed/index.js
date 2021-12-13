import React, { useState } from "react";
import Image from "next/image";

import style from "./index.module.scss"
import ButtonSecondary from "../ButtonSecondary";
import NameSocialMedia from "../NameSocialMedia";
import SectionAnalystPorfolio from "../../modules/SectionAnalystPortfolio";

export default function CardAnalyst({
  analistaId,
  name,
  excerpt,
  image,
  altText,
}) {

  const [ isActive, setActive ] = useState(false)
  
  const featuredContentToggleState = () => {
    setActive(!isActive);
  };

  return (
    <article className={style.analysts__item}>
      <figure className={style.analysts__figure}>
        <Image 
          src={image} 
          alt={altText} 
          width={411}
          height={292}
          layout="responsive"
          priority
        />
      </figure>
      <NameSocialMedia
        media="mobile"
        name={name}
        instagram="#instagram-paulo-paiva"
        twitter="#twitter-paulo-paiva"
        linkedin="#linkedin-paulo-paiva"
      />
      <section className={style.analysts__description}>
        <NameSocialMedia
          media="desktop"
          name={name}
          instagram="#instagram-paulo-paiva"
          twitter="#twitter-paulo-paiva"
          linkedin="#linkedin-paulo-paiva"
        />
        <div className={style.analysts__excerpt} dangerouslySetInnerHTML={{ __html: excerpt }}/>
        <div className={style.analysts__button}>
          <ButtonSecondary 
            isButton 
            changeColor={isActive ? "gray" : ""}
            events={() => featuredContentToggleState()}
            onKeyDown={() => featuredContentToggleState()}
            >
            {isActive ? "ver menos" : "ver mais"}
          </ButtonSecondary>
        </div>
      </section>
      <section className={isActive ? `${style.analystFeatured__content} ${style.active}`: `${style.analystFeatured__content}`}>
        <SectionAnalystPorfolio>
          <div className={style.analystFeatured__open}>
            <hr/>
            <div className={style.analystFeatured__open_button}>
              <ButtonSecondary 
                isButton 
                changeColor="gray"
                events={() => featuredContentToggleState()}
                onKeyDown={() => featuredContentToggleState()}
                >
                ver menos
              </ButtonSecondary>
            </div>
          </div>
        </SectionAnalystPorfolio>
      </section>
    </article>
  )
}