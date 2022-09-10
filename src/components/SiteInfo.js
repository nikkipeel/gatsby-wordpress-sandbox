import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: 0.5rem 0;
`

const SiteTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0.25rem;
`

const SiteDesc = styled.em`
  font-size: 15px;
  letter-spacing: 0.25px;
`

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWp {
          edges {
            node {
              generalSettings {
                title
                description
              }
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteTitle>{props.allWp.edges[0].node.generalSettings.title}</SiteTitle>

        <SiteDesc>
          {props.allWp.edges[0].node.generalSettings.description}
        </SiteDesc>
      </SiteInfoWrapper>
    )}
  />
)

export default SiteInfo
