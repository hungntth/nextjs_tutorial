'use client'
import { getLanguages } from '@/src/api/language.api'
import { getAllMyProject } from '@/src/api/project.api'
import Container from '@/src/components/Container'
import Pagination from '@/src/components/Pagination'
import Selector from '@/src/components/Selector'
import useQueryConfig from '@/src/hooks/useQueryConfig'
import useQueryParams from '@/src/hooks/useQueryParams'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import CollectionGrid from './components/CollectionGrid'
import ModelDashboard from './components/ModelDashboard/ModelDashboard'

const PER_PAGE = 12
const DELETED = false

export default function Dashboard() {
  const queryString: { page?: string } = useQueryParams()
  const page = Number(queryString.page) || 1

  const [languageId, setLanguageId] = useState('')
  const [languages, setLanguages] = useState([])

  const queryConfig = useQueryConfig()

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  useQuery({
    queryKey: ['languages'],
    queryFn: () => getLanguages(),
    staleTime: 60 * 60 * 1000,
    onSuccess: (data) => {
      setLanguages(data.data.data)
    }
  })

  const myProjects = useQuery({
    queryKey: ['myProjects', page, PER_PAGE, languageId, DELETED],
    queryFn: () => getAllMyProject(page, PER_PAGE, languageId, DELETED),
    staleTime: 60 * 60 * 1000
  })

  const dataProjects = myProjects.data?.data.data
  const totalRecords = dataProjects?.total_records || 0
  const fromItem = totalRecords ? PER_PAGE * (page - 1) + 1 : 0
  const toItem = PER_PAGE <= totalRecords ? PER_PAGE * page : totalRecords
  const pageSize = Math.ceil(totalRecords / PER_PAGE) || 1

  const handleQueryPage = (page: string) => {
    router.push(pathname + '?' + createQueryString('page', page))
  }

  return (
    <div className='bg-gray'>
      <main className='container'>
        <div className='py-4 flex justify-between'>
          <div className=''>
            <p className='text-2xl font-bold leading-8 tracking-tight pb-4'>Danh sách dự án</p>
            <ModelDashboard setLanguageId={setLanguageId}/>
          </div>
          <Selector data={languages} languageId={languageId} setLanguageId={setLanguageId}/>
        </div>
        <Container classNames='pb-8 lg:pb-12 space-y-8'>
          <CollectionGrid data={dataProjects?.data} />
        </Container>
        <Pagination
          queryConfig={queryConfig}
          pageSize={pageSize}
          handleQueryPage={handleQueryPage}
          fromItem={fromItem}
          toItem={toItem}
          totalRecords={totalRecords}
        />
      </main>
    </div>
  )
}
