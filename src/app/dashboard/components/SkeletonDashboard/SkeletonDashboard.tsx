import React from 'react'
import ItemSkeleton from './ItemSkeleton'

export default function SkeletonDashboard() {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <ItemSkeleton key={index}></ItemSkeleton>
        ))}
    </ul>
  )
}
