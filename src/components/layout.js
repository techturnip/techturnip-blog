import React from "react"
import styled from "styled-components"
import Header from "./header"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(48),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header siteTitle={title} location={location} />

          <main style={{ padding: "2rem" }}>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
