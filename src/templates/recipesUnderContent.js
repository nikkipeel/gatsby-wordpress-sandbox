import React from "react"
import Layout from "../components/layout"
import Recipes from "../components/Recipes"
import Header from "../components/header"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 960px;
  margin: 3rem auto;

  @media and (max-width: 1023px) {
    max-width: 90vw;
  }
`

const RecipesUnderContent = ({ pageContext }) => (
  <Layout>
    <Header pageTitle={pageContext.title}></Header>
    <ContentWrapper>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </ContentWrapper>
    <Recipes></Recipes>
  </Layout>
)

export default RecipesUnderContent
