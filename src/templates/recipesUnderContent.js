import React from "react"
import Layout from "../components/layout"
import Recipes from "../components/Recipes"
import Header from "../components/header"
import BreadCrumbs from "../components/BreadCrumbs"

const RecipesUnderContent = ({ location, pageContext }) => (
  <Layout>
    <Header pageTitle={pageContext.title}></Header>
    <BreadCrumbs pageContext={pageContext} location={location} />
    <div className="content-wrapper">
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
    <Recipes></Recipes>
  </Layout>
)

export default RecipesUnderContent
