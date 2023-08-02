import { User } from './user.type'
import { SuccessReponse } from './utils.type'

export type AuthResponse = SuccessReponse<{
  access_token: string
  refresh_token: string
  user: User
}>

export type AuthRequest = {
  code: string
}

export type LogoutRequest = {
  refresh_token: string
  authorization: string
}

export type LogoutResponse = {
  success: boolean
  message: string
  data: {}
}
