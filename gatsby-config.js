/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          layouts: "src/layouts"
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documents",
        path: `${__dirname}/_documents`
      }
    },
    "gatsby-transformer-remark"
  ],
}
