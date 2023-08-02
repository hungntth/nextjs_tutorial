'use client'
import { logoutAccount } from '@/src/api/auth.api'
import { getLanguages } from '@/src/api/language.api'
import { AppContext } from '@/src/contexts/app.context'
import { getRefreshTokenFromLS } from '@/src/utils/auth'
import urlAuthSSO from '@/src/utils/authSSO'
import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const { setIsAuthenticated, isAuthenticated, setProfile, profile } = useContext(AppContext)
  const [isAuthen, setIsAuthen] = useState(false)
  const [loading, setLoading] = useState(false)
  const refresh_token = getRefreshTokenFromLS()

  const logoutMutaion = useMutation({
    mutationFn: logoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
      setIsAuthen(false)
      if (pathname !== '/coding') {
        router.push('/logout')
      }
    }
  })

  useQuery({
    queryKey: ['languages'],
    queryFn: () => getLanguages(),
    staleTime: 60 * 60 * 1000
  })

  const handleLogout = async () => {
    logoutMutaion.mutate({ refresh_token })
  }
  const handleLogin = () => {
    let urlLogin = urlAuthSSO(process.env.SSO_URL_LOGIN, location.pathname)
    window.location.href = urlLogin
  }
  useEffect(() => {
    setIsAuthen(!!isAuthenticated), setLoading(true)
  }, [])
  return (
    <div className='navbar bg-secondary-content text-primary-content shadow-lg sticky z-40 top-0'>
      <div className='flex-1'>
        <Link href='/'>
          <Image src='/logo.svg' alt='' width={117} height={40} />
        </Link>
      </div>
      {loading ? (
        isAuthen ? (
          <div className='flex-none gap-2'>
            <div className='form-control'>
              <a className='text-slate-950'>{profile?.email}</a>
            </div>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <Image src='/avatar.svg.png' width={50} height={50} alt='' />
                </div>
              </label>
              <ul tabIndex={0} className='mt-3 p-2 shadow menu menu-sm dropdown-content bg-gray-400 rounded-box w-52'>
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button className='btn btn-primary' onClick={() => handleLogin()}>
            <span>Đăng nhập</span>
          </button>
        )
      ) : (
        <></>
      )}
    </div>
  )
}

export default Header
