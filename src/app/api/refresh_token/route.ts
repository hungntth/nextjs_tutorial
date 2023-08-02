import { LogoutRequest, LogoutResponse } from '@/src/types/auth.type'
import createInstance from '@/src/utils/instance'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PATH_ROUTE = 'auth/refresh_token'

export async function POST(request: NextRequest) {
  try {
    const { authorization, refresh_token }: LogoutRequest = await request.json()
    const instance = createInstance(PATH_ROUTE, authorization)

    let data = await instance.post<LogoutResponse>('', { refresh_token })
    const response = NextResponse.json(
      { success: true, data: data.data.data, message: data.data.message },
      { status: 200, headers: { 'content-type': 'application/json' } }
    )
    response.cookies.delete('token')
    return response
  } catch (error: any) {
    console.log(error)
    const response = NextResponse.json({ success: false, message: 'Lỗi hệ thống!' }, { status: 400 })
    return response
  }
}
