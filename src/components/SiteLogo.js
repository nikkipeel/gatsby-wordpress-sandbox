import React from "react"
import { graphql, StaticQuery } from "gatsby"

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
      {
        wpgraphql {
          siteLogo {
            sourceUrl
          }
        }
      }
    `}
    render={props => (
      <div>
        <img src={props.wpgraphql.siteLogo.sourceUrl} alt="logo" />
      </div>
    )}
  />
)

export default SiteLogo
