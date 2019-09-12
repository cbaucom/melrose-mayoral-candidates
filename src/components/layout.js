/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
`

const MainContainer = styled.main`
  flex-grow: 1;
  padding: 0 1.45rem 1rem 1.45rem;
`

const FooterContainer = styled.footer`
  padding: 1rem 1.45rem;
  width: 100%;
  display: flex;
  justify-content: center;
  span {
    transition: all ease-in-out 1s;

    &:hover {
      transform: translate(0, -5px);
    }
  }

  a {
    text-decoration: none;
    color: #023767;
    border-bottom: 2px solid #94baef;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LayoutContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainContainer>{children}</MainContainer>
        <FooterContainer>
          <span>
            © {new Date().getFullYear()},{` `}
            <a href="https://www.builtbybaucom.com">Built by Baucom</a>
          </span>
        </FooterContainer>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
