import React from "react";  
import Layout from "../app/Layout";
import BannerWithSlide from "../app/modules/BannerWithSlide";
import SectionInvestorProfile from "../app/modules/SectionInvestorsProfile"
import SectionSlideProducts from "../app/modules/SectionSlideProducts";
import BannerHomeImage from "../media/images/banner-home.png";
import swingTrade from "../media/images/carteira-mensal.png"

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
          <h2 className="section__title">Somos a BeCapital Research</h2>
          <p className="section__text">Se você <strong>investe ou quer investir</strong> seu dinheiro, por que fazer isso sozinho? A BeCapital Research é uma Casa de Análise onde são produzidas recomendações de investimentos. Dedicamos nossos dias a ler, interpretar e analisar a economia e as empresas. <strong>Nosso objetivo é te ajudar a transformar ideias em dinheiro.</strong></p>
        </div>
      </section>
      <SectionInvestorProfile/>
      <SectionSlideProducts productsForSlides={productsResearch} />
    </Layout>
  )
}