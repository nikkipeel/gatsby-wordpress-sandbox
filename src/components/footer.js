import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

const FooterStyles = styled.footer`
  background: var(--secondary);
  padding: 2rem;
  color: var(--neutral-lightest);
`
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 2rem auto;
  text-align: center;

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 90vw;
  }
`
const FooterLink = styled(Link)`
  color: var(--neutral-lightest);
  font-family: var(--heading);
`
// Todos: add graphql query for site links, add grid order to links
const Footer = () => {
  return (
    <FooterStyles>
      <FooterContent>
        <FooterLink to="/home">Home</FooterLink>
        <FooterLink to="/trips">Trips</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/recipes">Recipes</FooterLink>
        <FooterLink to="/gallery">Gallery</FooterLink>
      </FooterContent>
    </FooterStyles>
  )
}
export default Footer
