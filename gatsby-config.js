module.exports = {
  siteMetadata: {
    title: `Pattern Library Tutorial`,
    description: `A tutorial to show how to build a pattern library using Gatsby and Netlify-CMS`,
    author: `@marcello.paiva`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `caption`, `category`, `subcategory`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            slug: node => node.fields.slug,
            tags: node => node.frontmatter.tags,
            caption: node => node.frontmatter.caption,
            category: node => node.frontmatter.category,
            subcategory: node => node.frontmatter.subcategory,
          }
        }
      }
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pattern`,
        path: `${__dirname}/src/pattern`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
