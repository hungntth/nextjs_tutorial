'use client'
import Selector from '@/src/components/Selector'
import MyEditor from '@/src/components/editor/editor'
import { codeDefault } from '@/src/constant/codeDefault'
import { javascript } from '@codemirror/lang-javascript'
import ReactCodeMirror from '@uiw/react-codemirror'
import React, { useState } from 'react'
import Split from 'react-split'
export default function Coding() {
  const [code, setCode] = useState(codeDefault)

  const onChange = (data: string | undefined) => {
    if (data !== undefined) {
      setCode(data as string)
    }
  }

  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-1 gap-4'>
        <Split className='split' minSize={0} gutterSize={10} snapOffset={30}>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h1 className='text-2xl font-semibold mb-4'>Compiler Code</h1>
            <div className='flex space-x-4 mb-4'>
              <select className='w-1/2 rounded-lg border p-2'>
                <option value='python'>Python</option>
                <option value='java'>Java</option>
                <option value='cpp'>C++</option>
              </select>
              <button className='bg-blue-500 text-white rounded-lg px-4 py-2'>Compile</button>
            </div>
            <div className='react-codemirror-container'>
              <MyEditor onChange={(data) => onChange(data)} language={'javascript'} defaultValue={code} />
            </div>
          </div>
          <div className='bg-gray-200 rounded-lg p-4'>
            <h2 className='text-lg font-semibold mb-2'>Output</h2>
            <pre className='bg-white p-2 border rounded-lg'></pre>
          </div>
        </Split>
      </div>
    </div>
  )
}
