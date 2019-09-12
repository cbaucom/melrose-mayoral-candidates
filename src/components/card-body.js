import React from "react"
import styled from "styled-components"

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

const StyledButton = styled.a`
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.color || "#9e0610"};
  border-radius: 3px;
  box-shadow: none;
  background-color: transparent;
  color: ${props => props.color || "#9e0610"};
  font-size: 1.25rem;
  transition: 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    transform: translate(0, 3px);
  }
`

const Button = ({ link, text, color }) => {
  return (
    <StyledButton href={`${link}`} target="_blank" rel="noopener" color={color}>
      {text}
    </StyledButton>
  )
}

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
