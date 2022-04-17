import { LoadingSnipper } from 'components/loading'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { prettyFormat } from '@testing-library/react'
import { NavLink } from 'react-router-dom'
import { css } from 'styled-components'

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  /* width: 100%; */
  height: ${(props) => props.height || '66px'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  ${(props) =>
    props.kind === 'secondary' &&
    css`
      background-color: #fff;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === 'primary' &&
    css`
      color: #fff;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `}
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

/**
 * @param {func} onClick handler onClick
 * @requires
 * @param {string} type type of button 'button' | 'submit'
 */

const Button = ({
  children,
  kind = 'primary',
  type = 'button',
  onClick = () => {},
  ...props
}) => {
  const { isLoading, to } = props //destructuring
  const child = !!isLoading ? <LoadingSnipper></LoadingSnipper> : children // !!isLoading conver sang bool
  if (to !== '' && typeof to === 'string') {
    return (
      <NavLink to={to} style={{ display: 'inline-block' }}>
        <ButtonStyles type={type} kind={kind} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    )
  }
  return (
    <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  )
}
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  kind: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button
