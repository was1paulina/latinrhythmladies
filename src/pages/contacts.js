import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacts = () => (
  <Layout>
    <SEO title="Contacts" />
    <h1>You can always find us on social media.</h1>
    <p>Or just come over!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contacts