import React, { useState } from "react";
import Image from "next/image";

import CachMachine from "../../../media/images/cash_machine.png";
import CapaBlogPost from "../../../media/images/capa-ativos.jpg";

import style from "./index.module.scss"
import ButtonSecondary from "../ButtonSecondary";
import NameSocialMedia from "../NameSocialMedia";

export default function CardAnalyst({
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
    </article>
  )
}

// <section 
// className={isActive ? 'analyst-featured__content active': 'analyst-featured__content'}
// >
//   <div className="analyst-featured__open">
//     <hr/><span className="icon-arrow-bottom"></span>
//   </div>
//   <aside className="analyst-featured__wallet">
//     <h2 className="analyst-featured__title">Carteiras Assinadas</h2>
//     <div className="analyst-featured__items">
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//         <Image 
//           src={CachMachine} 
//           alt="carteira 1" 
//           width={360}
//           height={360}
//           layout="responsive"
//         />
//         </figure>
//         <section className="analyst-featured__description">
//           <header className="analyst-featured__description--header">
//             <h2 className="analyst-featured__description-title">Cash Machine</h2>
//             <h3 className="analyst-featured__description-price">10,99</h3>
//           </header>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat aliquet nisl, vel convallis metus venenatis sed. Sed quis feugiat ipsum, eu interdum purus. Aenean finibus diam in ligula scelerisque sollicitudin. 
//           </div>
//           <footer className="analyst-featured__description--footer">
//             <a className="button button__secondary--gray">Saiba mais</a>
//             <button className="button button__primary">Comprar agora</button>
//           </footer>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//         <Image 
//           src={CachMachine} 
//           alt="carteira 1" 
//           width={360}
//           height={360}
//           layout="responsive"
//         />
//         </figure>
//         <section className="analyst-featured__description">
//           <header className="analyst-featured__description--header">
//             <h2 className="analyst-featured__description-title">Cash Machine</h2>
//             <h3 className="analyst-featured__description-price">10,99</h3>
//           </header>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat aliquet nisl, vel convallis metus venenatis sed. Sed quis feugiat ipsum, eu interdum purus. Aenean finibus diam in ligula scelerisque sollicitudin. 
//           </div>
//           <footer className="analyst-featured__description--footer">
//             <a className="button button__secondary--gray">Saiba mais</a>
//             <button className="button button__primary">Comprar agora</button>
//           </footer>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//         <Image 
//           src={CachMachine} 
//           alt="carteira 1" 
//           width={360}
//           height={360}
//           layout="responsive"
//         />
//         </figure>
//         <section className="analyst-featured__description">
//           <header className="analyst-featured__description--header">
//             <h2 className="analyst-featured__description-title">Cash Machine</h2>
//             <h3 className="analyst-featured__description-price">10,99</h3>
//           </header>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat aliquet nisl, vel convallis metus venenatis sed. Sed quis feugiat ipsum, eu interdum purus. Aenean finibus diam in ligula scelerisque sollicitudin. 
//           </div>
//           <footer className="analyst-featured__description--footer">
//             <a className="button button__secondary--gray">Saiba mais</a>
//             <button className="button button__primary">Comprar agora</button>
//           </footer>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//         <Image 
//           src={CachMachine} 
//           alt="carteira 1" 
//           width={360}
//           height={360}
//           layout="responsive"
//         />
//         </figure>
//         <section className="analyst-featured__description">
//           <header className="analyst-featured__description--header">
//             <h2 className="analyst-featured__description-title">Cash Machine</h2>
//             <h3 className="analyst-featured__description-price">10,99</h3>
//           </header>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat aliquet nisl, vel convallis metus venenatis sed. Sed quis feugiat ipsum, eu interdum purus. Aenean finibus diam in ligula scelerisque sollicitudin. 
//           </div>
//           <footer className="analyst-featured__description--footer">
//             <a className="button button__secondary--gray">Saiba mais</a>
//             <button className="button button__primary">Comprar agora</button>
//           </footer>
//         </section>
//       </article>
//      </div>
//   </aside>
//   <aside className="analyst-featured__blog">
//   <h2 className="analyst-featured__title">Meus Artigos</h2>
//     <div className="analyst-featured__items">
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//           <Image 
//             src={CapaBlogPost} 
//             alt="carteira 1" 
//             width={170}
//             height={170}
//             layout="responsive"
//           />
//         </figure>
//         <section className="analyst-featured__description">
//           <h2 className="analyst-featured__description--title">Cash Machine</h2>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. 
//           </div>
//           <ul className="blog-tag__items">
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Análise Técnica
//             </li>
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Macroeconomia
//             </li>
//           </ul>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//           <Image 
//             src={CapaBlogPost} 
//             alt="carteira 1" 
//             width={170}
//             height={170}
//             layout="responsive"
//           />
//         </figure>
//         <section className="analyst-featured__description">
//           <h2 className="analyst-featured__description--title">Cash Machine</h2>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. 
//           </div>
//           <ul className="blog-tag__items">
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Análise Técnica
//             </li>
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Macroeconomia
//             </li>
//           </ul>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//           <Image 
//             src={CapaBlogPost} 
//             alt="carteira 1" 
//             width={170}
//             height={170}
//             layout="responsive"
//           />
//         </figure>
//         <section className="analyst-featured__description">
//           <h2 className="analyst-featured__description--title">Cash Machine</h2>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. 
//           </div>
//           <ul className="blog-tag__items">
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Análise Técnica
//             </li>
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Macroeconomia
//             </li>
//           </ul>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//           <Image 
//             src={CapaBlogPost} 
//             alt="carteira 1" 
//             width={170}
//             height={170}
//             layout="responsive"
//           />
//         </figure>
//         <section className="analyst-featured__description">
//           <h2 className="analyst-featured__description--title">Cash Machine</h2>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. 
//           </div>
//           <ul className="blog-tag__items">
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Análise Técnica
//             </li>
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Macroeconomia
//             </li>
//           </ul>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//           <Image 
//             src={CapaBlogPost} 
//             alt="carteira 1" 
//             width={170}
//             height={170}
//             layout="responsive"
//           />
//         </figure>
//         <section className="analyst-featured__description">
//           <h2 className="analyst-featured__description--title">Cash Machine</h2>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. 
//           </div>
//           <ul className="blog-tag__items">
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Análise Técnica
//             </li>
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Macroeconomia
//             </li>
//           </ul>
//         </section>
//       </article>
//       <article className="analyst-featured__item">
//         <figure className="analyst-featured__figure">
//           <Image 
//             src={CapaBlogPost} 
//             alt="carteira 1" 
//             width={170}
//             height={170}
//             layout="responsive"
//           />
//         </figure>
//         <section className="analyst-featured__description">
//           <h2 className="analyst-featured__description--title">Cash Machine</h2>
//           <div className="analyst-featured__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. 
//           </div>
//           <ul className="blog-tag__items">
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Análise Técnica
//             </li>
//             <li className="blog-tag__item">
//               <span className="blog-tag__circle"></span>Macroeconomia
//             </li>
//           </ul>
//         </section>
//       </article>
//     </div>
//   </aside>

//   <div className="analyst-featured__open">
//     <hr/><button 
//     className="button button__secondary--gray"
//     onClick={featuredContentToggleState}
//     onKeyDown={featuredContentToggleState}
//     >Ver menos</button>
//   </div>
// </section>