import React from "react"
import styled from "styled-components"

import Button from "./button"

const StyledBody = styled.div`
  padding: 3rem 2rem;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: ${props => props.color || "#9e0610"};
  }

  h2,
  p {
    margin-bottom: 10px;
  }

  .body-content {
    padding: 1rem 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .text {
    justify-content: center;
  }
`

const CardBody = ({ title, text, link, buttonText, color }) => {
  return (
    <StyledBody color={color}>
      <div>
        <h2>{title}</h2>
      </div>

      <p className="body-content">{text}</p>

      <Button text={buttonText} link={link} color={color} />
    </StyledBody>
  )
}

export default CardBody
