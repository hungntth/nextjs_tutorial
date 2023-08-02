import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface Props {
  data: any
  setLanguageId: Dispatch<SetStateAction<string>>
  languageId: string
}

export default function Selector({ data, setLanguageId, languageId }: Props) {
  const handleSelector = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguageId(e.target.value)
  }
  return (
    <div>
      <select
        value={languageId}
        className='select select-bordered focus:outline-none max-w-[16rem] m-2 border-2 border-gray-400'
        onChange={(e) => handleSelector(e)}
      >
        <option key='defaultOption' value=''>
          Tất cả
        </option>
        {data.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}
