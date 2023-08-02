import axios from 'axios'
import { AuthRequest, AuthResponse } from '../types/auth.type'
import http from '../utils/http'

export const loginAccount = (body: AuthRequest) => http.post<AuthResponse>(`/api/auth`, body)

export const logoutAccount = (body: { refresh_token: string }) => http.post(`/api/logout`, body)
