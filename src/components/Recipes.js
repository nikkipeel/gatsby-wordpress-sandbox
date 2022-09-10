import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const RecipeItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const RecipeItem = styled(Link)`
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

const RecipeImage = styled.img`
  max-width: 100%;
`

const RecipeDesc = styled.p`
  font-size: 16px;
`

const Recipes = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            recipes {
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
        <RecipeItemsWrapper>
          {props.wpgraphql.recipes.edges.map(recipe => (
            <RecipeItem
              key={recipe.node.id}
              to={`/recipes/` + recipe.node.slug}
              aria-label={`Read post titled ` + recipe.node.title}
            >
              <h2>{recipe.node.title}</h2>
              <RecipeImage
                src={recipe.node.featuredImage.node.sourceUrl}
                alt={recipe.node.featuredImage.node.altText}
              ></RecipeImage>
              <RecipeDesc
                dangerouslySetInnerHTML={{ __html: recipe.node.excerpt }}
              />
              <strong>Read More...</strong>
            </RecipeItem>
          ))}
        </RecipeItemsWrapper>
      )}
    />
  )
}

export default Recipes
