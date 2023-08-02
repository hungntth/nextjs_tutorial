import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { QueryConfig } from '@/src/hooks/useQueryConfig'
import Link from 'next/link'

interface Props {
  queryConfig: QueryConfig | { page: number }
  pageSize: number
  handleQueryPage: (page: string) => void
  fromItem: number
  toItem: number
  totalRecords: number
}

const RANGE = 2
export default function Pagination({ queryConfig, pageSize, handleQueryPage, fromItem, toItem, totalRecords }: Props) {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span
            key={index}
            className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'
          >
            ...
          </span>
        )
      }
      return null
    }

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span
            key={index}
            className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'
          >
            ...
          </span>
        )
      }
      return null
    }

    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        // Điều kiện để return về ...
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index)
        }
        return page === pageNumber ? (
          <span
            key={index}
            className='relative z-10 inline-flex items-center bg-zinc-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {pageNumber}
          </span>
        ) : (
          <span
            key={index}
            onClick={() => handleQueryPage(String(pageNumber))}
            className='cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          >
            {pageNumber}
          </span>
        )
      })
  }
  const page = Number(queryConfig.page)
  return (
    <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
      <div className='pb-2'>
        <p className='text-sm text-gray-700'>
          Hiển thị <span className='font-medium'>{fromItem}</span> đến <span className='font-medium'>{toItem}</span>{' '}
          trong tổng <span className='font-medium'>{totalRecords}</span> kết quả
        </p>
      </div>
      <div className='pb-2'>
        <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
          {page === 1 ? (
            <span
              key={'prev1'}
              className='cursor-not-allowed relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>«</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </span>
          ) : (
            <span
              key={'prev2'}
              onClick={() => handleQueryPage(String(page - 1))}
              className='cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>«</span>
              <ChevronLeftIcon className='h-5 w-5 text-zinc-950' aria-hidden='true' />
            </span>
          )}
          {renderPagination()}
          {page === pageSize ? (
            <span
              key={'next1'}
              className='cursor-not-allowed relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>»</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </span>
          ) : (
            <span
              key={'next2'}
              onClick={() => handleQueryPage(String(page + 1))}
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              <span className='sr-only'>»</span>
              <ChevronRightIcon className='h-5 w-5 text-zinc-950' aria-hidden='true' />
            </span>
          )}
        </nav>
      </div>
    </div>
  )
}
