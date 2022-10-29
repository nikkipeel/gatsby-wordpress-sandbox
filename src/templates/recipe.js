import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import BreadCrumbs from "../components/BreadCrumbs"
import styled from "styled-components"

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 1rem 0;
`

const RecipeHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const Recipe = ({ location, pageContext }) => (
  <Layout>
    {pageContext.title !== "Home" && (
      <Header pageTitle={pageContext.title}></Header>
    )}
    <BreadCrumbs pageContext={pageContext} location={location} />
    <div className="content-wrapper">
      <RecipeHeader>
        <strong>{pageContext.date}</strong>
      </RecipeHeader>
      <FeaturedImage
        src={pageContext.featuredImage.node.sourceUrl}
        alt=""
      ></FeaturedImage>

      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
  </Layout>
)

export default Recipe
