import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Map from "../components/Map/Map"
import FlipCard from "../components/Molecules/Cards/FlipCard"

const TripItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
}

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
        <>
          <Map location={location} zoomLevel={17} />
          <TripItemsWrapper>
            {props.wpgraphql.trips.edges.map(trip => (
              <FlipCard
                label={`Read trip titled ` + trip.node.title}
                key={trip.node.id}
                title={trip.node.title}
                url={`/trips/` + trip.node.slug}
                content={trip.node.excerpt}
                imageSrc={trip.node.featuredImage.node.sourceUrl}
                altText={trip.node.featuredImage.node.altText}
                classes={"card card--flip"}
              />
            ))}
          </TripItemsWrapper>
        </>
      )}
    />
  )
}

export default Trips
