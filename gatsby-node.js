const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// // Will create pages for Pages (route : /{slug})
// // Will create pages for Posts (route : /blog/{slug})
// // Will create pages for Recipes (route : /recipes/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          wpgraphql {
            pages {
              edges {
                node {
                  content
                  id
                  slug
                  template {
                    templateName
                  }
                  status
                  title
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pageTemplate = path.resolve("./src/templates/page.js")
        const recipesUnderContentTemplate = path.resolve(
          "./src/templates/recipesUnderContent.js"
        )
        _.each(result.data.wpgraphql.pages.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(
              edge.node.template.templateName === "Recipe Items Below Content"
                ? recipesUnderContentTemplate
                : pageTemplate
            ),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              wpgraphql {
                posts {
                  edges {
                    node {
                      title
                      slug
                      status
                      content
                      id
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/post.js")

          _.each(result.data.wpgraphql.posts.edges, edge => {
            createPage({
              path: `/blog/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
      // ==== END POSTS ====

      // ==== RECIPES =====
      .then(() => {
        graphql(
          `
            {
              wpgraphql {
                recipes {
                  edges {
                    node {
                      content
                      slug
                      title
                      date
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const recipeTemplate = path.resolve("./src/templates/recipe.js")

          _.each(result.data.wpgraphql.recipes.edges, edge => {
            createPage({
              path: `/recipes/${edge.node.slug}/`,
              component: slash(recipeTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END RECIPES ====
  })
}
