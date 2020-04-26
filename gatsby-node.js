const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      videos: allContentfulVideo {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "YYYY/MM/DD")
            type
            embedUrl {
              embedUrl
            }
            contentful_id
          }
        }
      }
    }
  `)
  data.videos.edges.forEach(({ node }) => {
    createPage({
      path: `videos/${node.slug}`,
      component: path.resolve("./src/templates/video-page.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
