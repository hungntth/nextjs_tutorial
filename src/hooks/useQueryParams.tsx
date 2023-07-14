import { useSearchParams } from 'next/navigation'

export default function useQueryParams(): { [k: string]: string } {
  const searchParams = useSearchParams()
  return Object.fromEntries([...searchParams.entries()])
}
