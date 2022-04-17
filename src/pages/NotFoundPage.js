import IconError from '../components/icon/IconError404.svg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 20px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: #fff;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .logo-img {
    width: 600px;
  }
`

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/" className="logo">
        <img src={IconError} alt="wave-blogging" className="logo-img" />
      </NavLink>
      <NavLink to="/" className="back">
        Go to homepage
      </NavLink>
    </NotFoundPageStyles>
  )
}

export default NotFoundPage
