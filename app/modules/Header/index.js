import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import logoResearch from "../../../media/images/logo-research.svg";
import ButtonWithIcon from '../../components/ButtonWithIcon';
import style from "./index.module.scss";

export default function Header() {

  const [ isActive, setActive ] = useState(false)

  const toggleClass = () => {
    setActive(!isActive);
    
  };

  return (
    <>
    <header className={style.header}>

      <div className={style.header__content}>
        <a href="#" className={style.header__logo} aria-label="Link para o Home do Becapital Research">
          <Image 
            src={logoResearch} 
            alt="Logo Becapital Research" 
            layout="responsive"
            width="160"
            height="40"
            />
        </a>
        <button 
          className={style.mobileMenu} 
          onClick={toggleClass} 
          onKeyDown={toggleClass}
          aria-label="Botão menu responsivo"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={isActive ? `${style.header__menu} ${style.active}`: `${style.header__menu}`}>
          <button 
            className={isActive ? `${style.mobileMenu} ${style.active}`: `${style.mobileMenu}`}
            onClick={toggleClass} 
            onKeyDown={toggleClass}
            aria-label="Botão menu responsivo"
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={style.header__menu_nav}>
            <ul className={style.header__menu_items}>
              <li className={style.header__menu_item}>
                <Link href="/analistas/">Analistas</Link>
              </li>
              <li className={style.header__menu_item}>
                <Link href="/blog/">Blog</Link>
              </li>
              <li className={style.header__menu_item}>
                <ButtonWithIcon link="#irpaaratele" text="Telegram" icon="icon-youtube"/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}
