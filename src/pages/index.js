import React from "react"
import { Link } from "gatsby"

import { Layout, SEO, Jumbo } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">Go to gracias</Link>
  </Layout>
)

export default IndexPage
