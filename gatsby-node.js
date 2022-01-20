const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { page: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.frontmatter.path}`,

      context: {
        slug: edge.node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })
}
