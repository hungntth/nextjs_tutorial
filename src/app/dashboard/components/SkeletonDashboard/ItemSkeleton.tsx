import React from 'react'

export default function ItemSkeleton() {
  return (
    <div>
      <div className='group relative bg-gray-100 rounded-lg border-2 border-gray-200 cursor-pointer animate-pulse transition-transform'>
        <div className='p-4 sm:p-6'>
          <div className='flex items-start justify-between'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
            </div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
          </div>
          <h2 className='mt-4 font-medium text-gray-700 sm:text-lg break-all'>
            <span className='h-6 bg-gray-200 w-2/3' />
          </h2>
          <p className='mt-1 text-xs text-gray-400'>
            <span className='h-4 bg-gray-200 w-1/4' />
          </p>
        </div>
      </div>
    </div>
  )
}
