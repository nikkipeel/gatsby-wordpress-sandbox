module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Sandbox`,
    description: `Gatsby sandbox site with Wordpress and GraphQL`,
    author: `Nikki Peel`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "http://gatsbywordpress.local/graphql",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-web-font-loader`,
    //   options: {
    //     typekit: {
    //       id: process.env.TYPEKIT_ID,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://gatsbywordpress.local/graphql",
      },
    },
  ],
}
