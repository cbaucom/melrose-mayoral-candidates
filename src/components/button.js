import React from "react"
import styled from "styled-components"

export const StyledButton = styled.a`
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

export const MelroseButton = styled(StyledButton)`
  background-color: #9e0610;
  border-color: #9e0610;
  color: white;
  height: 4rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: 0.25s;
  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  }
`

const Button = ({ link, text, color }) => {
  return (
    <StyledButton href={`${link}`} target="_blank" rel="noopener" color={color}>
      {text}
    </StyledButton>
  )
}

export default Button
