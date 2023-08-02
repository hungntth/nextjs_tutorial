import { getLanguages } from '@/src/api/language.api'
import { createProject, getAllMyProject } from '@/src/api/project.api'
import Input from '@/src/components/Input'
import Modal from '@/src/components/Modal'
import { ILanguage } from '@/src/types/language.type'
import { ProjectRequest } from '@/src/types/project.type'
import { schema } from '@/src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import SelectorDashboard from '../SelectorDashboad'
import { useRouter } from 'next/navigation'
import { codeDefault } from '@/src/constant/codeDefault'

const projectSchema = schema.pick(['name', 'language_id'])

const CURRENT_PAGE = 1
const PER_PAGE = 12
const LANGUAGE_ID = ''
const DELETED = false

interface Props {
  setLanguageId: Dispatch<SetStateAction<string>>
}

const ModalDashboard: NextPage<Props> = ({ setLanguageId }) => {
  const router = useRouter()

  const queryClient = useQueryClient()

  const [isModalOpen, setModalOpen] = useState(false)
  const [selectors, setSelectors] = useState<ILanguage[] | []>([])

  const defaultValues = {
    name: '',
    language_id: 50
  }

  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Omit<ProjectRequest, 'code'>>({
    resolver: yupResolver(projectSchema),
    defaultValues: defaultValues
  })

  useQuery({
    queryKey: ['languages'],
    queryFn: () => getLanguages(),
    staleTime: 60 * 60 * 1000,
    onSuccess: (data) => {
      setSelectors(data.data.data)
    }
  })

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    reset(defaultValues)
    setModalOpen(false)
  }

  const addProject = useMutation({
    mutationFn: (body: ProjectRequest) => {
      return createProject(body)
    }
  })

  const onSubmit = handleSubmit((data) => {
    const body = {
      ...data,
      code: codeDefault
    }
    addProject.mutate(body, {
      onSuccess: (data) => {
        closeModal()
        setLanguageId('')
        queryClient.invalidateQueries({
          queryKey: ['myProjects', CURRENT_PAGE, PER_PAGE, LANGUAGE_ID, DELETED]
        })
        toast.success(data.data.message)
        router.push(`coding/${data.data.data?.id}`)
      }
    })
  })

  return (
    <div>
      {/* opens the modal */}
      <button className='btn' onClick={() => openModal()}>
        thêm dự án
      </button>
      <Modal open={isModalOpen} onClose={() => closeModal()}>
        <h3 className='font-bold text-lg'>Thêm mới dự án</h3>
        <form className='w-full max-w-sm' onSubmit={(e) => onSubmit(e)}>
          <div className='md:flex md:items-center mb-4'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-full-name'
              >
                Tên dự án
              </label>
            </div>
            <div className='md:w-2/3'>
              <Input
                type='name'
                name='name'
                register={register}
                errorMsg={errors.name?.message}
                className='mt-8'
                placehodler='Vd: Dự án cá nhân'
              />
            </div>
          </div>
          <div className='md:flex md:items-center mb-4'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='inline-password'
              >
                Ngôn ngữ
              </label>
            </div>
            <div className='md:w-2/3'>
              <SelectorDashboard
                data={selectors}
                register={register}
                name='language_id'
                errorMsg={errors.language_id?.message}
              />
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3' />
            <div className='md:w-2/3 modal-action'>
              <button className=' btn' type='submit'>
                Thêm
              </button>
              <div
                className='cursor-pointer rounded-lg	relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'
                onClick={() => closeModal()}
              >
                Cancel
              </div>
            </div>
          </div>
        </form>

        <div className='modal-action'>{/* closes the modal */}</div>
      </Modal>
    </div>
  )
}

export default ModalDashboard
