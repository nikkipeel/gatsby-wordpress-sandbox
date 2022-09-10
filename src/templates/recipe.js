import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styled from "styled-components"

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 1rem 0;
`

const RecipeHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  max-width: 960px;
  margin: 3rem auto;

  @media and (max-width: 1023px) {
    max-width: 90vw;
  }
`

const Recipe = ({ pageContext }) => (
  <Layout>
    {pageContext.title !== "Home" && (
      <Header pageTitle={pageContext.title}></Header>
    )}

    <ContentWrapper>
      <RecipeHeader>
        <h1>{pageContext.title}</h1>
        <strong>{pageContext.date}</strong>
      </RecipeHeader>
      <FeaturedImage
        src={pageContext.featuredImage.node.sourceUrl}
        alt=""
      ></FeaturedImage>

      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </ContentWrapper>
  </Layout>
)

export default Recipe
