import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            pages {
              edges {
                node {
                  id
                  title
                  content
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div>
          {props.wpgraphql.pages.edges.map(page => (
            <div key={page.node.id}>
              <h1>{page.node.title}</h1>
              {console.log(page.node.title)}
              <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
