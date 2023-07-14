import { IProject } from '@/src/types/project.type'
import Link from 'next/link'

export default function CollectionCard({ project }: { project: IProject }) {
  return (
    <div className='group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900 cursor-pointer'>
      <div className='rounded-lg border-2 border-gray-900 bg-white transition-transform transform-gpu group-hover:scale-105'>
        <div className='p-4 sm:p-6'>
          <div className='flex items-start justify-between'>
            <span
              className={
                '-me-1.5 -mt-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium capitalize sm:-me-3 sm:-mt-3 bg-green-100 text-green-700'
              }
            >
              {project.language.name}
            </span>
          </div>

          <h2 className='mt-4 font-medium text-gray-900 sm:text-lg'>{project.name}</h2>

          <p className='mt-1 text-xs text-gray-700'>Tạo ngày {project.created_at}</p>
        </div>
      </div>
    </div>
    // </Link>
  )
}

function CardTag({ tagType }: any) {
  const isNew = tagType === 'python'
  const isUpdated = tagType === 'updated'

  if (!isNew && !isUpdated) {
    return <></>
  }

  return (
    <span
      className={`-me-1.5 -mt-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium capitalize sm:-me-3 sm:-mt-3 ${
        isNew && 'bg-green-100 text-green-700'
      } ${isUpdated && 'bg-blue-100 text-blue-700'}`}
    >
      {tagType}
    </span>
  )
}
