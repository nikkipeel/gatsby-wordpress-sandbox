import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import BreadCrumbs from "../components/BreadCrumbs"
import "../components/header.css"

const Page = ({ location, pageContext }) => {
  return (
    <>
      <Layout pageContext={pageContext}>
        {pageContext.title !== "Home" && (
          <Header pageTitle={pageContext.title}></Header>
        )}
        <BreadCrumbs pageContext={pageContext} location={location} />
        <div className="content-wrapper">
          <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </div>
      </Layout>
    </>
  )
}

export default Page
