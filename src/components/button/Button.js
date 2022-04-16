import { LoadingSnipper } from 'components/loading'
import React from 'react'
import styled from 'styled-components'

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  width: 100%;
  height: ${(props) => props.height || '66px'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

const Button = ({
  children,
  type = 'button',
  onClick = () => {},
  ...props
}) => {
  const { isLoading } = props //destructuring
  const child = !!isLoading ? <LoadingSnipper></LoadingSnipper> : children // !!isLoading conver sang bool

  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  )
}

export default Button
