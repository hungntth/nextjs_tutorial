import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

export default function Selector(data: any) {
  return (
    <div>
      <select
        defaultValue='option1'
        className='select select-bordered focus:outline-none max-w-[16rem] m-2 border-2 border-gray-400'
      >
        {data.data.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}
