import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

const HeaderStyles = styled.header`
  background: var(--primary);
  padding: 2rem;
  color: var(--neutral-lightest);
`
const HeaderCrumb = styled(Link)`
  color: var(--neutral);
  font-family: var(--heading);
`

const HeaderWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media and (max-width: 1023px) {
    max-width: 90vw;
  }
`

// Todos: add in Gatsby Breadcrumbs to show parent page(s)
const Header = ({ pageTitle }) => {
  return (
    <HeaderStyles>
      <HeaderWrapper>
        <h1>{pageTitle}</h1>
        <HeaderCrumb to="/">Home</HeaderCrumb>
      </HeaderWrapper>
    </HeaderStyles>
  )
}
export default Header
