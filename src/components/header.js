import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const Header = ({ siteTitle, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  let title

  function renderTitle() {
    if (location.pathname === rootPath) {
      title = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {siteTitle}
          </Link>
        </h1>
      )
    } else {
      title = (
        <PageTitle
          style={{
            fontFamily: `Montserrat, sans-serif`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {siteTitle} Blog
          </Link>
        </PageTitle>
      )
    }

    return title
  }

  return (
    <PageHeader>
      {renderTitle()}
      <Menu>
        <MenuList>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </MenuList>
      </Menu>
    </PageHeader>
  )
}

export default Header

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  padding: 3rem;
  color: white;
  background: linear-gradient(to right, #45a247, #283c86);

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`

const PageTitle = styled.h1`
  margin-top: 0;
`

const Menu = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
`
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
