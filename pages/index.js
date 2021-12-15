import React from "react";
import Image from "next/image";

import Layout from "../app/Layout";
import BannerWithSlide from "../app/modules/BannerWithSlide";
import SectionInvestorProfile from "../app/modules/SectionInvestorsProfile"
import SectionSlideProducts from "../app/modules/SectionSlideProducts";
import BannerHomeImage from "../media/images/banner-swing-trade.jpg";
import swingTrade from "../media/images/carteira-mensal.png"
import iconListCheck from "../media/images/icon-list-check.png";
import CapaBlogPost from "../media/images/capa-ativos.jpg";

import CardPostSimple from "../app/components/CardPostSimple";
import CardMarketIndicator from "../app/components/CardMarketIndicator";

export default function Index() {

  const bannerImages = [
    { src: BannerHomeImage, alt: "banner home 1" },
    { src: BannerHomeImage, alt: "banner home 2" },
  ]

  const productsResearch = [
    {
      image: swingTrade,
      title: "Swing Trade 1",
      text: "Quer tirar proveito das ineficiências do mercado no curto prazo e embolsar lucros através de operações rápidas e especulativas.",
      link: "#tradelink"
    },
    {
      image: swingTrade,
      title: "Swing Trade 2",
      text: "Quer tirar proveito das ineficiências do mercado no curto prazo e embolsar lucros através de operações rápidas e especulativas.",
      link: "#tradelink"
    },
    {
      image: swingTrade,
      title: "Swing Trade 3",
      text: "Quer tirar proveito das ineficiências do mercado no curto prazo e embolsar lucros através de operações rápidas e especulativas.",
      link: "#tradelink"
    },
    {
      image: swingTrade,
      title: "Swing Trade 4",
      text: "Quer tirar proveito das ineficiências do mercado no curto prazo e embolsar lucros através de operações rápidas e especulativas.",
      link: "#tradelink"
    },
    {
      image: swingTrade,
      title: "Swing Trade 5",
      text: "Quer tirar proveito das ineficiências do mercado no curto prazo e embolsar lucros através de operações rápidas e especulativas.",
      link: "#tradelink"
    },
  ]


  return(
    <Layout>
      <BannerWithSlide slideImages={bannerImages} />
      <section className="section section__about">
        <div className="section__container">
          <h2 className="section__title section__title_mod1">Somos a BeCapital Research</h2>
          <p className="section__text">Se você <strong>investe ou quer investir</strong> seu dinheiro, por que fazer isso sozinho? A BeCapital Research é uma Casa de Análise onde são produzidas recomendações de investimentos. Dedicamos nossos dias a ler, interpretar e analisar a economia e as empresas. <strong>Nosso objetivo é te ajudar a transformar ideias em dinheiro.</strong></p>
          <ul className="section__about__items">
            <li className="section__about__item">
              <Image src={iconListCheck} alt="list icon" width={36} height={36}/>
              <h3 className="section__about__title">Relatório de Recomendações</h3>
            </li>
            <li className="section__about__item">
              <Image src={iconListCheck} alt="list icon" width={36} height={36}/>
              <h3 className="section__about__title">Material Didático</h3>
            </li>
            <li className="section__about__item">
              <Image src={iconListCheck} alt="list icon" width={36} height={36}/>
              <h3 className="section__about__title">Grupo exclusivo no Telegram</h3>
            </li>
            <li className="section__about__item">
              <Image src={iconListCheck} alt="list icon" width={36} height={36}/>
              <h3 className="section__about__title">Live exclusiva de dúvidas</h3>
            </li>
            <li className="section__about__item">
              <Image src={iconListCheck} alt="list icon" width={36} height={36}/>
              <h3 className="section__about__title">Live com convidados</h3>
            </li>
            <li className="section__about__item">
              <Image src={iconListCheck} alt="list icon" width={36} height={36}/>
              <h3 className="section__about__title">Garantia de satisfação</h3>
            </li>
          </ul>
        </div>
      </section>
      <SectionInvestorProfile/>
      <SectionSlideProducts productsForSlides={productsResearch} />
      <section className="section section__blog-featured">
        <div className="section__container">
          <h2 className="section__title">Últimos Artigos</h2>
          <div className="blog-featured__posts">
            <CardPostSimple 
              image={CapaBlogPost}
              title="Risco sob duas perspectivas"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum feugiat elementum. "
            />
            
          </div>
        </div>
      </section>
      <section className="section section__market-indicators">
        <div className="section__container">
          <h2 className="section__title">Indicadores do Mercado</h2>
          <div className="market-indicators__grid">
            <CardMarketIndicator />
            <CardMarketIndicator isNegative={true} />
            <CardMarketIndicator />
            <CardMarketIndicator isNegative={true} />
          </div>
        </div>
      </section>
    </Layout>
  )
}