import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import SiteInfo from "./SiteInfo"

const MainMenuWrapper = styled.nav`
  display: flex;
  background-color: var(--black);
`

const MainMenuInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 960px;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    max-width: 90vw;
  }
`

const MenuItem = styled(Link)`
  color: var(--white);
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWpMenu(filter: { name: { eq: "Main menu" } }) {
          edges {
            node {
              menuItems {
                nodes {
                  path
                  url
                  label
                }
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWpMenu.edges[0].node.menuItems.nodes.map(item => (
            <MenuItem to={item.path} key={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
)
export default MainMenu
