'use client'
import MyEditor from '@/src/components/editor/editor'
import React, { useEffect, useState } from 'react'
import { Allotment } from 'allotment'
import { useExecSubmissionMutation, useGetSubmissionQuery } from '@/src/redux/services/judge0'
import Output from '@/src/components/output/output'
import { Submission } from '@/src/redux/type/submission'

interface ILanguage {
  id: number
  name: string
}
const languages: ILanguage[] = [
  { id: 71, name: 'Python 3' },
  { id: 63, name: 'JavaScript (Node.js 12.14.0)' },
  { id: 60, name: 'Go (1.13.5)' }
]
const javascriptDefault: string = 'console.log(13)'

export default function Page() {
  const [token, setToken] = useState<string>('')
  const [language, setLanguage] = useState<ILanguage>({ id: 63, name: 'JavaScript (Node.js 12.14.0)' })
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false)
  const [code, setCode] = useState<string>(javascriptDefault)

  const [execSubmission] = useExecSubmissionMutation()
  const {
    data: dataGet,
    isFetching,
    refetch
  } = useGetSubmissionQuery(token, { skip: !token, refetchOnMountOrArgChange: true })
  const onClickCompile = async () => {
    try {
      setLoadingCreate(true)
      const tokenRes = await execSubmission({
        language_id: language.id,
        source_code: btoa(code),
        stdin: ''
      }).unwrap()

      setTimeout(() => {
        setLoadingCreate(false)
        setToken(tokenRes.token)
      }, 2000)
    } catch (error) {}
  }
  const onChange = (data: string | undefined) => {
    if (data !== undefined) {
      console.log('data', data)
      setCode(data as string)
    }
  }
  useEffect(() => {
    console.log(dataGet)
    if (dataGet?.status.id === 1 || dataGet?.status.id === 2) {
      setTimeout(() => {
        refetch()
      }, 2000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGet])

  return (
    <Allotment>
      <Allotment.Pane maxSize={400}>
        {/* <CKEditor
                  editor={ClassicEditor}
                  data="<p>Cho một dãy số ...</p>"
                  config={{
                      toolbar: [],

                  }}

                  disabled
              /> */}
      </Allotment.Pane>
      <Allotment.Pane>
        <Allotment vertical>
          <Allotment.Pane snap minSize={300}>
            <select
              value={language.id}
              onChange={(e) => {
                console.log(e.target.value)
                setLanguage({ id: Number(e.target.value), name: e.target.name })
              }}
              className='select select-bordered w-full max-w-xs'
            >
              {languages.map((l) => {
                return (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                )
              })}
            </select>
            <MyEditor onChange={(data) => onChange(data)} language={language.name} defaultValue={javascriptDefault} />
          </Allotment.Pane>

          <Allotment>
            <Allotment.Pane snap>
              <div>Test Case (coming soon)</div>
            </Allotment.Pane>
            <Allotment.Pane snap>
              <Output outputDetails={dataGet as Submission} />
            </Allotment.Pane>
          </Allotment>
          <Allotment.Pane maxSize={50}>
            <button className={`btn ${isFetching || loadingCreate ? 'loading' : ''}`} onClick={() => onClickCompile()}>
              Submit
            </button>
          </Allotment.Pane>
        </Allotment>
      </Allotment.Pane>
    </Allotment>
  )
}
