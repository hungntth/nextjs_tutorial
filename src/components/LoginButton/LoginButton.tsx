'use client'
import urlAuthSSO from '@/src/utils/authSSO'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function LoginButton(props: ButtonProps) {
  const { className, disabled, children, ...rest } = props
  const handleLogin = () => {
    let urlLogin = urlAuthSSO(process.env.SSO_URL_LOGIN, location.pathname)
    window.location.href = urlLogin
  }
  return (
    <button className={className} disabled={disabled} {...rest} onClick={() => handleLogin()}>
      <span>{children}</span>
    </button>
  )
}
