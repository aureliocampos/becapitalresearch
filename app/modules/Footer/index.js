
import style from "./index.module.scss";
import SectionNewsletter from "../FixedNewsletter";

export default function Footer() {
  return(
    <>
    <SectionNewsletter />
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <h2 className={style.footer__title}>Disclaimer</h2>
        <div className={style.footer__text}>
          <p>Os relatórios e conteúdos da BeCapital Research são elaborados por analistas independentes, que expressam suas opiniões técnicas e pessoais com base em informações públicas, de fontes consideradas fidedignas. Sendo assim, a BeCapital Research e seus analistas não se responsabilizam pela veracidade das informações do conteúdo. Os analistas cumprem as regras, diretrizes e procedimentos estabelecidos pela Comissão de Valores Mobiliários em sua Resolução n.º 20.</p>
          <p>O conteúdo da BeCapital Research não representa, de forma alguma, oferta de negociação de valores mobiliários e/ou outros instrumentos financeiros. As decisões de investimentos e estratégias financeiras são de responsabilidade do leitor.</p>
          <p>Todo investimento possui riscos, em maior ou menor grau. Retornos passados não são garantia de rentabilidade futura.</p>
          <p>É vedada a reprodução e distribuição, parcial ou total, do material sem prévia e expressa autorização da BeCapital Research, uma vez que é de uso exclusivo do destinatário.</p>
        </div>
      </div>
    </footer>
    </>
  )
}