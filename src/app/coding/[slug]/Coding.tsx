'use client'
import { getLanguages } from '@/src/api/language.api'
import { getProjectById, updateProjectById } from '@/src/api/project.api'
import { createSubmission, getSubmission } from '@/src/api/submissions.api'
import Selector from '@/src/components/Selector'
import MyEditor from '@/src/components/editor/editor'
import { codeDefault } from '@/src/constant/codeDefault'
import { SubmissionRequest } from '@/src/types/submission.type'
import { replacer } from '@/src/utils/utils'
import { useMutation, useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Split from 'react-split'
import { toast } from 'react-toastify'

const RETRY_TIME = 10
const TRY_AGAIN_TIME = 500
const AUTO_SAVE_TIME = 30 * 1000

export default function Coding({ params }: { params: { slug: string } }) {
  const [languageId, setLanguageId] = useState('')
  const [languages, setLanguages] = useState([])
  const [code, setCode] = useState(codeDefault)
  const [outPut, setOutPut] = useState('Welcome world')
  const [compiling, setCompiling] = useState(false)
  const saveInterval = useRef<any>()

  const { isLoading, error, data } = useQuery({
    queryKey: ['project', params.slug],
    queryFn: () => getProjectById(params.slug),
    retry: false
  })

  useQuery({
    queryKey: ['languages'],
    queryFn: () => getLanguages(),
    staleTime: 60 * 60 * 1000,
    onSuccess: (data) => {
      setLanguages(data.data.data)
    }
  })

  const addSubmission = useMutation({
    mutationFn: (body: SubmissionRequest) => {
      return createSubmission(body)
    }
  })

  const updateProject = useMutation({
    mutationFn: (body: any) => {
      return updateProjectById(params.slug, body)
    }
  })

  const handleCompile = async () => {
    const body = {
      language_id: +languageId,
      project_id: params.slug,
      source_code: code
    }
    setCompiling(true)

    addSubmission.mutate(body, {
      onSuccess: async (data) => {
        let output = await getSubmission(data.data.data.token)

        for (let i = 0; i < RETRY_TIME; i++) {
          if (output.data.data.status.description === 'Accepted') {
            setCompiling(false)
            setOutPut(JSON.stringify(output.data.data, replacer, 2))
            break
          } else {
            output = await getSubmission(data.data.data.token)
            await new Promise((resolve) => setTimeout(resolve, TRY_AGAIN_TIME))
            if (i === RETRY_TIME - 1) {
              setCompiling(false)
              toast.error('Compile thất bại')
            }
          }
        }
      }
    })
  }

  const onChange = (data: string | undefined) => {
    if (data !== undefined) {
      setCode(data as string)
    }
  }

  const autoSave = (code: any, languageId: any) => {
    updateProject.mutate(
      { code: 'code' },
      {
        onSuccess: (data) => {
          console.log({ data })
        }
      }
    )
  }

  useEffect(() => {
    saveInterval.current = setInterval(() => autoSave(code, +languageId), AUTO_SAVE_TIME)
    setLanguageId(data?.data.data?.language.id + '')
    return () => clearInterval(saveInterval.current)
  }, [data])

  if (isLoading) return null
  if (error) return notFound()
  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-1 gap-4'>
        <Split className='split' minSize={0} gutterSize={10} snapOffset={30}>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h1 className='text-2xl font-semibold mb-4'>{data?.data.data?.name}</h1>
            <div className='flex justify-between mb-4'>
              <Selector data={languages} languageId={languageId} setLanguageId={setLanguageId} />
              {!compiling ? (
                <button
                  type='button'
                  className='inline-flex items-center px-4 my-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-gray-500 hover:bg-gray-400 transition ease-in-out duration-150'
                  onClick={() => handleCompile()}
                >
                  Compile
                </button>
              ) : (
                <button
                  type='button'
                  className='inline-flex items-center px-4 my-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-gray-500 hover:bg-gray-400 transition ease-in-out duration-150 cursor-not-allowed'
                  disabled
                >
                  {' '}
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    {' '}
                    <circle className='opacity-25' cx={12} cy={12} r={10} stroke='currentColor' strokeWidth={4} />{' '}
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />{' '}
                  </svg>{' '}
                  Loading...{' '}
                </button>
              )}
            </div>
            <div className='react-codemirror-container'>
              <MyEditor
                onChange={(data) => onChange(data)}
                language={'javascript'}
                defaultValue={data?.data.data?.code === 'none_code' ? code : data?.data.data?.code}
              />
            </div>
          </div>
          <div className='bg-gray-200 rounded-lg p-4'>
            <h2 className='text-lg font-semibold mb-2'>Output</h2>
            <pre className='bg-white p-2 border rounded-lg'>{outPut}</pre>
          </div>
        </Split>
      </div>
    </div>
  )
}
