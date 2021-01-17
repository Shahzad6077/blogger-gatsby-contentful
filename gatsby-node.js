// gatsby-config.js
const path = require("path")
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  const result = await graphql(`
    query {
      allContentfulBlogs {
        nodes {
          id
          createdAt
          shortContent {
            raw
          }
          title
          updatedAt
          content {
            raw
          }
          isPublic
          creatorName
          creatorId
        }
      }
    }
  `)
  result.data.allContentfulBlogs.nodes.forEach(edge => {
    createPage({
      path: `/blog/${edge.title[1]}`,
      component: blogPostTemplate,
      context: {
        ...edge,
      },
    })
  })
}
