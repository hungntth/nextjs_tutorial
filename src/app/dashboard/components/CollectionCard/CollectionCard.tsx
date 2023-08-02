import { IProject } from '@/src/types/project.type'
import { useRouter } from 'next/navigation'

export default function CollectionCard({ project }: { project: IProject }) {
  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`coding/${id}`)
  }

  return (
    <div
      className='group relative block bg-white rounded-lg border-2 border-gray-900 cursor-pointer hover:scale-105 transition-transform"'
      onClick={() => handleClick(project.id)}
    >
      <div className='p-4 sm:p-6'>
        <div className='flex items-start justify-between'>
          <span
            className={
              'whitespace-normal rounded-full px-2.5 py-0.5 text-xs font-medium capitalize bg-green-100 text-green-700'
            }
          >
            {project.language.name}
          </span>
        </div>

        <h2 className='mt-4 font-medium text-gray-900 sm:text-lg break-all'>{project.name}</h2>

        <p className='mt-1 text-xs text-gray-700'>Tạo ngày {project.created_at}</p>
      </div>
    </div>
  )
}
