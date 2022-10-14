import React from "react"
import Layout from "../components/layout"
import Trips from "../components/Trips"
import Header from "../components/header"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 960px;
  margin: 3rem auto;

  @media and (max-width: 1023px) {
    max-width: 90vw;
  }
`

const TripsUnderContent = ({ pageContext }) => (
  <Layout>
    <Header pageTitle={pageContext.title}></Header>
    <ContentWrapper>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </ContentWrapper>
    <Trips></Trips>
  </Layout>
)

export default TripsUnderContent
