import SectionAllAnalysts from "../app/modules/SectionAllAnalysts";
import Layout from "../app/Layout";

import { getAllAnalysts } from "../api/getAnalysts";

export default function Analistas({ allAnalysts}) {
  return (
    <>
      <Layout>
        <SectionAllAnalysts items={allAnalysts} />
      </Layout>
    </>
  )
}


export async function getServerSideProps() {
  const allAnalysts = await getAllAnalysts();

  return {
    props: {
      allAnalysts
    },
  }
}