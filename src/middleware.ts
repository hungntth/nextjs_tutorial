import { useMutation } from '@tanstack/react-query'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AuthRequest } from './types/auth.type'
import { loginAccount } from './api/auth.api'
import { getAccessTokenFromLS } from './utils/auth'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const res = await fetch("https://api-dev.codepy.vn/api/v1/users/profile", {
  //   method: "GET",
  //   headers: {
  //     'Authorization': 'Bearer ' + request.cookies.get('token')?.value
  //   },
  // });
  // const data = await res.json();
  // console.log(request.cookies.get('token')?.value)
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*'
}
