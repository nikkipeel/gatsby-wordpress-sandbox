import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import MainMenu from "./MainMenu"
import { createGlobalStyle } from "styled-components"
import "./layout.css"
import Footer from "./footer"

const GlobalStyles = createGlobalStyle`
body {
  font-size: 16px;
  font-family: var(--body);
  background-color: var(--neutral-lightest);
  color: var(--neutral-dark);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  overflow-x: hidden;
}
h1, h2, h3, h4, h5 {
  font-weight: 700;
} 
h1 {
  font-family: var(--heading-h1);
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: 48px;
}
h2 {
  font-size: 28px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 22px;
}
h5, strong, a, blockquote {
  font-size: 18px;
}
h2, h3, h4, h5 {
  font-family: var(--heading);
}
blockquote {
  font-family: var(--font-accent);
  border-left: 4px solid var(--highlight);
  padding-left: 1.5rem;
  font-weight: 700;
}
a {
  font-weight: 500;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
}
a:hover,
a:focus {
  text-decoration: underline;
  text-underline-offset: 2px;
}
`
const Layout = ({ children }) => (
  <>
    <StaticQuery
      query={graphql`
        {
          allWp {
            edges {
              node {
                siteLogo {
                  sourceUrl
                }
              }
            }
          }
        }
      `}
      render={props => (
        <Helmet>
          <link
            rel="icon"
            href={props.allWp.edges[0].node.siteLogo.sourceUrl}
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/zwe8mof.css"
          ></link>
        </Helmet>
      )}
    />
    <GlobalStyles />
    <MainMenu />
    {children}
    <Footer></Footer>
  </>
)

export default Layout
