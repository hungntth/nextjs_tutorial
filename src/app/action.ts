'use server'

import { cookies } from 'next/dist/client/components/headers'

export async function getTokenCookies() {
  const token = cookies().get('token')?.value
  return token
}
