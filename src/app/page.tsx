'use client'
import Link from 'next/link'
import Image from 'next/image'
import LoginButton from '../components/LoginButton'
export default function Home() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='fixed -z-10 top-0 right-0 bottom-0 left-0 opacity-80 brightness-50'>
        <Image src='/images/background_login.jpg' alt='background-login' fill={true} />
      </div>
      <div>
        <LoginButton className='btn bg-sky-600 hover:bg-sky-700 border-none'>Đăng ký/ Đăng nhập</LoginButton>

        <Link href='/coding' className='text-sm text-white block text-right mt-2'>
          Đi đến lập trình
        </Link>
      </div>
    </div>
  )
}
