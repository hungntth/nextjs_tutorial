import { AuthRequest, AuthResponse } from '../types/auth.type'
import http from '../utils/http'

const baseApi = process.env.BASE_API

export const loginAccount = (body: AuthRequest) => http.post<AuthResponse>(`/api/auth`, body)

export const logoutAccount = (body: { refresh_token: string }) => http.post(`${baseApi}auth/logout`, body)
