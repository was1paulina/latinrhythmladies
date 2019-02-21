import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import StyledBackgroundSection from "../components/background"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`salsa`, `dance`, `latin`]} />
    <StyledBackgroundSection />
    <h1>Hola!</h1>
    <p>Welcome to our dance team website.</p>
    <p>Let's dance salsa together</p>
    <Link to="/about/">Find out more about us</Link>
  </Layout>
)

export default IndexPage
