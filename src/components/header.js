import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import voteImg from "../images/vote.png"

const HeaderContainer = styled.header`
  background: #f5f5f5;
  max-width: 100vw;
  padding: 1.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  h2 {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  color: #9e0610;
  text-decoration: none;
`

const VoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    max-height: 70px;
    max-width: 100px;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <h2>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </h2>
    <VoteContainer>
      <img src={voteImg} alt="Vote" />
      <p>September 17, 2019</p>
    </VoteContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
