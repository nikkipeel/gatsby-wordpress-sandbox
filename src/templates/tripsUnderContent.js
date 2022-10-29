import React from "react"
import Layout from "../components/layout"
import Trips from "../components/Trips"
import Header from "../components/header"
import BreadCrumbs from "../components/BreadCrumbs"

const TripsUnderContent = ({ location, pageContext }) => (
  <Layout>
    <Header pageTitle={pageContext.title}></Header>
    <BreadCrumbs pageContext={pageContext} location={location} />
    <div className="content-wrapper">
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
    <Trips></Trips>
  </Layout>
)

export default TripsUnderContent
