import React, { useState } from 'react'
import styled from 'styled-components'
import { Label } from 'components/label'
import { Input } from 'components/input'
import { useForm } from 'react-hook-form'
import { IconEyeClose, IconEyeOpen } from 'components/icon'
import { Field } from 'components/field'
import { Button } from 'components/button'
import { LoadingSnipper } from 'components/loading'

const SignUpPageStyles = styled.div`
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
`

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const [togglePassword, setTogglePassword] = useState(false)

  const handleSignUp = (values) => {
    console.log('SignUpPage ~ values', values)
    if (!isValid) return
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
  }

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="./logo.png 4x" alt="wave-blogging" className="logo" />
        <h1 className="heading">Wave Blogging</h1>
        <form
          className="form"
          onSubmit={handleSubmit(handleSignUp)}
          autoComplete="off"
        >
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              type={togglePassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              control={control}
            >
              {togglePassword ? (
                <IconEyeOpen
                  onClick={() => setTogglePassword(false)}
                ></IconEyeOpen>
              ) : (
                <IconEyeClose
                  onClick={() => setTogglePassword(true)}
                ></IconEyeClose>
              )}
            </Input>
          </Field>
          <Button
            type="submit"
            style={{ maxWidth: 300, margin: '0 auto' }}
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  )
}

export default SignUpPage
