import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`salsa`, `dance`, `latin`]} />
        <div>
         <Image
          title="Background Image"
          alt="latin"
          style={{ top: 0, left: 0, right: 0, zIndex: -1 , position: `absolute`, height:"100%" }}
          fluid={this.props.data.file.childImageSharp.fluid}
        />
        </div>
        <h1>Hola!</h1>
        <p>Welcome to our dance team website.</p>
        <p>Let's dance salsa together</p>
        <Link to="/about/">Find out more about us</Link>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query FrontPageQuery {
    file(relativePath: { regex: "/ladies/" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500, 
          rotate: 180
          duotone: {
            highlight: "#ced198",
            shadow: "#9ea9e2",
            opacity: 75
          }
        ) 
      {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`