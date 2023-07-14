import React from 'react'
import CollectionCard from '../CollectionCard'
import { IProject } from '@/src/types/project.type'

interface Props {
  data?: IProject[]
}

export default function CollectionGrid(Props: Props) {
  return (
    // <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //   {componentItems.map((componentData) => (
    //     <li key={componentData.slug}>
    //       <CollectionCard componentData={componentData} />
    //     </li>
    //   ))}
    // </ul>
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {Props.data?.map((item) => (
        <CollectionCard key={item.id} project={item} />
      ))}
    </ul>
  )
}
