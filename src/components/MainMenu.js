import React from "react"
import { elastic as Menu } from "react-burger-menu"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import SiteInfo from "./SiteInfo"
import "./menu.css"

const MainMenuWrapper = styled.nav`
  display: flex;
  background-color: var(--neutral-dark);
  min-height: 80px;
  height: max-content;
`
const MenuItems = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  width: 100%;
`

const MenuItem = styled(Link)`
  color: var(--neutral-light);
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
        <div className="main-menu">
          <SiteInfo />
          <MenuItems>
            {props.allWpMenu.edges[0].node.menuItems.nodes.map(item => (
              <MenuItem to={item.path} key={item.id}>
                {item.label}
              </MenuItem>
            ))}
          </MenuItems>
        </div>
        <Menu
          className="mobile-menu"
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <SiteInfo />
          {props.allWpMenu.edges[0].node.menuItems.nodes.map(item => (
            <Link to={item.path} key={item.id}>
              {item.label}
            </Link>
          ))}
        </Menu>
      </MainMenuWrapper>
    )}
  />
)
export default MainMenu
