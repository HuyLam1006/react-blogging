import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const AuthenticationStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-account {
    margin-bottom: 20px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationStyles>
      <div className="container">
        <NavLink to="/">
          <img srcSet="./logo.png 5x" alt="wave-blogging" className="logo" />
        </NavLink>
        <h1 className="heading">Wave Blogging</h1>
        {children}
      </div>
    </AuthenticationStyles>
  )
}

export default AuthenticationPage
