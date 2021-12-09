import CardAnalyst from "../../components/CardAnalystDetailed";

export default function SectionAnalystPortfolios({ items }) {

  return(
    <section className="section analysts__section">
      <div className="section__container analysts__items">
        {items.edges.map(({ node }) => {
            const {
              analistaId, title, slug, excerpt, featuredImage
            } = node;

            return (
              <CardAnalyst
                key={analistaId}
                name={title}
                slug={slug}
                excerpt={excerpt}
                image={featuredImage.node.sourceUrl}
                altText={featuredImage.node.altText} />
            );
          }) }
          
      </div>
    </section>
  )
}