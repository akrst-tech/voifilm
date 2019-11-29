const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      videos: allContentfulVoifilmVideoPage {
        edges {
          node {
            title
            slug
            published
            featured
            contentful_id
            type
            youTubeEmbed {
              youTubeEmbed
            }
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
