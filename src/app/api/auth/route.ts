import { AuthRequest, AuthResponse } from '@/src/types/auth.type'
import createInstance from '@/src/utils/instance'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PATH_ROUTE = 'auth/login_code'

export async function POST(request: NextRequest) {
  try {
    const instance = createInstance(PATH_ROUTE)
    const body: AuthRequest = await request.json()
    let data = await instance.post<AuthResponse>('', body)
    const response = NextResponse.json(
      { success: true, data: data.data.data, message: data.data.message },
      { status: 200, headers: { 'content-type': 'application/json' } }
    )
    response.cookies.set({
      name: 'token',
      value: data.data.data.access_token,
      path: '/'
    })
    return response
  } catch (error: any) {
    console.log(error)
    const response = NextResponse.json({ success: false, message: 'Đăng nhập thất bại' }, { status: 400 })
    return response
  }
}
