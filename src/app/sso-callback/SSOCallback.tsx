'use client'
import { loginAccount } from '@/src/api/auth.api'
import { AppContext } from '@/src/contexts/app.context'
import { AuthRequest } from '@/src/types/auth.type'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

export default function SSOCallback() {
  const router = useRouter()
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const [loginSucess, setLoginSuccess] = useState<Boolean>(false)
  const params = useSearchParams()
  const code = params.get('code')
  const loginAccountMutation = useMutation({
    mutationFn: (body: AuthRequest) => loginAccount(body)
  })

  useEffect(() => {
    !loginSucess &&
      code &&
      loginAccountMutation.mutate(
        { code },
        {
          onSuccess: (data) => {
            setIsAuthenticated(true)
            setProfile(data.data.data.user)
            setLoginSuccess(true)
            router.push('/dashboard')
          },
          onError: (_) => {
            router.push('/')
          }
        }
      )
  }, [])
}
