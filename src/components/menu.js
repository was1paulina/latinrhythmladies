import React from "react"

import {Link} from "gatsby"

const Menu = () => (
  <div>
    <span
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}   
    >
      <Link 
        to="/about/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        About Us
      </Link>
    </span>
    <span
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
            }}   
    >
      <Link
        to="/contacts/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Contacts
      </Link>
    </span>
  </div>
)

export default Menu 