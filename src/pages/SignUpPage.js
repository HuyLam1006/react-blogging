import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/button'
import { Field } from 'components/field'
import { Input, InputPasswordToggle } from 'components/input'
import { Label } from 'components/label'
import { auth, db } from 'firebase-app/firebase-config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import AuthenticationPage from './AuthenticationPage'

const schema = yup.object({
  fullname: yup.string().required('Please enter your fullname'),
  email: yup
    .string()
    .email('Please enter valid email address')
    .required('Please enter your email address'),
  password: yup
    .string()
    .min(8, 'Your password must be at least 8 characters or greater')
    .required('Please enter your password'),
})

const SignUpPage = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const handleSignUp = async (values) => {
    if (!isValid) return
    // console.log('SignUpPage ~ values', values)

    await createUserWithEmailAndPassword(auth, values.email, values.password)
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    })
    const colRef = collection(db, 'users')
    addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    })
    toast.success('Register successfullly !!!')
    navigate('/')
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve()
    //   }, 3000)
    // })
  }

  useEffect(() => {
    const arrayErrors = Object.values(errors)
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      })
    }
  }, [errors])

  useEffect(() => {
    document.title = 'Sign Up'
  }, [])

  return (
    <AuthenticationPage>
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
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <div className="have-account">
          You already have an account? <NavLink to={'/sign-in'}>Login</NavLink>
        </div>
        <Button
          type="submit"
          style={{ maxWidth: 300, margin: '0 auto', width: '100%' }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  )
}

export default SignUpPage
