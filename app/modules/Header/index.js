import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import logoResearch from "../../../media/images/logo-research.svg";

import style from "./index.module.scss";

export default function Header() {

  const [ isActive, setActive ] = useState(false)

  const toggleClass = () => {
    setActive(!isActive);
    document.querySelector('.header').classList.toggle('active');
  };

  return (
    <>
    <header className={style.header}>

      <h1 className={style.h1}>Home</h1>

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
          className='mobile-menu' 
          onClick={toggleClass} 
          onKeyDown={toggleClass}
          aria-label="Botão menu responsivo"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={isActive ? 'header__menu active': 'header__menu'}>
          <button 
            className={isActive ? 'mobile-menu active': 'mobile-menu'}
            onClick={toggleClass} 
            onKeyDown={toggleClass}
            aria-label="Botão menu responsivo"
          >
            <span />
            <span />
            <span />
          </button>
          <nav className="header__menu_nav">
            <ul className="header__menu_items">
              <li className="header__menu_item">
                <Link href="/analistas/">Analistas</Link>
              </li>
              <li className="header__menu_item">
                <Link href="/blog/">Blog</Link>
              </li>
              <li className="header__menu_item">
                <a href="#telegram" className="button button__primary--with-icon">
                  Telegram
                  <span className="icon-youtube"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}
