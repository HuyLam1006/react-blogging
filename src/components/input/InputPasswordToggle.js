import { IconEyeClose, IconEyeOpen } from 'components/icon'
import React, { useState } from 'react'
import Input from './Input'

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false)
  if (!control) return
  return (
    <>
      <Input
        type={togglePassword ? 'text' : 'password'}
        name="password"
        placeholder="Enter your password"
        control={control}
      >
        {togglePassword ? (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        )}
      </Input>
    </>
  )
}

export default InputPasswordToggle
