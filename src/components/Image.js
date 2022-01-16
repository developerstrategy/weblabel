import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { extension: { in: ["png", "jpg", "jpeg", "PNG"] } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        if (n.node.relativePath.includes(props.name)) {
          return n.node.childImageSharp.gatsbyImageData
        }
      })
      if (!image) {
        return null
      }

      const dataImage = getImage(image)
      console.log(image, props.name, dataImage, "hi")

      return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} />
    }}
  />
)

export default Image
