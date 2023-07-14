import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMsg?: string
  placehodler?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

const Input = (Props: Props) => {
  return (
    <div className={Props.className}>
      <input
        type={Props.type}
        className='input input-bordered w-full max-w-[16rem] mx-2 border-gray-400 border-2'
        placeholder={Props.placehodler}
        autoComplete={Props.autoComplete}
        {...Props.register(Props.name, Props.rules)}
      ></input>
      <div className='mt-1 mx-2 min-h-[1rem] text-sm text-red-600'>{Props.errorMsg}</div>
    </div>
  )
}

export default Input
