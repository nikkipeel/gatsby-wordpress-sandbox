import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 960px;
  margin: 3rem auto;

  @media and (max-width: 1023px) {
    max-width: 90vw;
  }
`

const Page = ({ pageContext }) => {
  return (
    <>
      <Layout>
        {pageContext.title !== "Home" && (
          <Header pageTitle={pageContext.title}></Header>
        )}
        <ContentWrapper>
          <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Page
