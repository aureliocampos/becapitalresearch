import CardInverstorProfile from "../../components/CardInvestorsProfile"
import style from "./index.module.scss";

export default function SectionInvestorProfile() {
  const profiles = [
    { 
      title: 'Oportunista',
      icon: '<span class="icon-oportunista"><span class="path1"></span><span class="path2"></span></span>',
      text: 'Quer tirar proveito das ineficiências do mercado no curto prazo e embolsar lucros através de operações rápidas e especulativas.',
      link: '#'
    },
    { 
      title: 'Tático',
      icon: '<span class="icon-tatico"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span></span>',
      text: 'Sabe que a maior parte do resultado vem da alocação estratégica, mas está constantemente buscando operações com potencial para trazer retornos adicionais para a carteira.',
      link: '#'
    },
    { 
      title: 'Estratégico',
      icon: '<span class="icon-estrategico"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>',
      text: 'Posiciona-se para o longo prazo, buscando segurança e bons retornos através da alocação diversificada e focada em qualidade.',
      link: '#'
    }
  ]
  return (
    <section className={`section ${style.section__investorProfile}`}>
      <div className={style.section__container}>
        <h2 className={style.section__title}>Quem é você nos investimentos?</h2>
        <p className={style.section__subtitle}>A maneira como você lida com risco e dinheiro define o seu perfil comportamental. Saber quem você é alinha expectativa X resultado em cada carteira escolhida.</p>
        <div className={style.investorProfile__items}>
          {profiles.map(({
            title,
            icon,
            text,
            link
          }) => 
            <CardInverstorProfile
              key={title}
              title={title}
              icon={icon}
              text={text}
              link={link}
            />
          )}
        </div>
      </div>
    </section>
  )
}
