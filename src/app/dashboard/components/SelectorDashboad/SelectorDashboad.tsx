import { ILanguage } from '@/src/types/language.type'
import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  errorMsg?: string
  placehodler?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
  data: ILanguage[] | []
}

export default function SelectorDashboard(Props: Props) {
  return (
    <div>
      <select
        defaultValue='option1'
        className='select select-bordered focus:outline-none max-w-[16rem] m-2 border-2 border-gray-400'
        {...Props.register(Props.name)}
      >
        {Props.data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <div className='mt-1 mx-2 min-h-[1rem] text-sm text-red-600'>{Props.errorMsg}</div>
    </div>
  )
}
