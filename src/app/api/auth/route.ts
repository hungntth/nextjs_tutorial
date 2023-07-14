import { AuthRequest, AuthResponse } from '@/src/types/auth.type'
import http from '@/src/utils/http'
import axios from 'axios'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const instance = axios.create({
  baseURL: `${process.env.BASE_API}auth/login_code`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function POST(request: NextRequest) {
  try {
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
