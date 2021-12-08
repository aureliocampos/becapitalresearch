import { fetchAPI } from "./api";

// Becapital Research - Analistas
export async function getAllAnalysts() {
  const data = await fetchAPI(`
    {
      analistas(where: {status: PUBLISH}) {
        edges {
          node {
            analistaId
            slug
            title
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `)
  
  return data?.analistas
}
