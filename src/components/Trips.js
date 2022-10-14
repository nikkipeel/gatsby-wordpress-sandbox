import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const TripItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TripItem = styled(Link)`
  color: #121212;
  width: 300px;
  border: 1px solid #efefef;
  padding: 1rem;
  margin: 1rem;
  text-decoration: none;
  height: 100%;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  &:hover strong {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`

const TripImage = styled.img`
  max-width: 100%;
`

const TripDesc = styled.p`
  font-size: 16px;
`

const Trips = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            trips {
              edges {
                node {
                  title
                  excerpt
                  content
                  link
                  slug
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={props => (
        <TripItemsWrapper>
          {props.wpgraphql.trips.edges.map(trip => (
            <TripItem
              key={trip.node.id}
              to={`/trips/` + trip.node.slug}
              aria-label={`Read trip titled ` + trip.node.title}
            >
              <h2>{trip.node.title}</h2>
              <TripImage
                src={trip.node.featuredImage.node.sourceUrl}
                alt={trip.node.featuredImage.node.altText}
              ></TripImage>
              <TripDesc
                dangerouslySetInnerHTML={{ __html: trip.node.excerpt }}
              />
              <strong>Read More...</strong>
            </TripItem>
          ))}
        </TripItemsWrapper>
      )}
    />
  )
}

export default Trips
