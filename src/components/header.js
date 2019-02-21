import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#cc0044`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        textAlign: `right`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Menu />
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
