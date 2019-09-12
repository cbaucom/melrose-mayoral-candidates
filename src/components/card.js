import React from "react"
import styled from "styled-components"

import CardHeader from "./card-header"
import CardBody from "./card-body"

const StyledCard = styled.article`
  background: #fff;
  margin: 2rem auto 4rem;
  box-shadow: 0 3px 6px ${props => props.color || "rgba(0, 0, 0, 0.16)"};
  transition: 0.25s;
  &:hover {
    box-shadow: 0 6px 12px ${props => props.hover || "rgba(0, 0, 0, 0.1)"};
  }
  @media screen and (min-width: 768px) {
    display: flex;
    height: auto;
  }
`

const Card = props => {
  return (
    <StyledCard color={props.color} hover={props.hover}>
      <CardHeader image={props.image} />
      <CardBody
        title={props.title}
        text={props.text}
        buttonText={props.buttonText}
        link={props.link}
        color={props.color}
      />
    </StyledCard>
  )
}

export default Card
