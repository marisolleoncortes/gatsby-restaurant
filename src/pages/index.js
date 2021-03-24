import * as React from "react"
import Default from "../layouts/default.js"
import { graphql } from "gatsby"
import MenuItemPreview from "../components/menuItemPreview.js"
import "./index.css"


// markup
const IndexPage = ({ data }) => {
  return (
    <Default>

    {data.allContentfulRecipes.nodes.map(recipe => (
      <MenuItemPreview recipe={recipe}></MenuItemPreview>
    ))}

    </Default>
  )
}

export default IndexPage

export const query = graphql`

query MyQuery {
  allContentfulRecipes {
    nodes {
      id
      name
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
}
`