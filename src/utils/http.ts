import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from '../constant/httpStatusCode.enum'
import { AuthResponse } from '../types/auth.type'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from './auth'

const PATH_LOGOUT = '/api/logout'
const PATH_LOGIN = '/api/auth'

class Http {
  instance: AxiosInstance
  private access_token: string
  private refresh_token: string
  constructor() {
    this.access_token = getAccessTokenFromLS()
    this.refresh_token = getRefreshTokenFromLS()
    this.instance = axios.create({
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token && config.headers) {
          config.headers.authorization = 'Bearer ' + this.access_token
          if (!!config.url && PATH_LOGOUT.includes(config.url)) {
            config.data = { ...config.data, authorization: this.access_token }
          }
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === PATH_LOGIN) {
          const data = response.data
          this.access_token = (response.data as AuthResponse).data?.access_token
          this.refresh_token = (response.data as AuthResponse).data?.refresh_token
          setAccessTokenToLS(this.access_token)
          setRefreshTokenToLS(this.refresh_token)
          setProfileToLS(data.data.user)
        } else if (url === PATH_LOGOUT) {
          this.access_token = ''
          this.refresh_token = ''
          clearLS()
        }
        return response
      },
      function (error: AxiosError) {
        console.log(error)
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          console.log(message)
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
