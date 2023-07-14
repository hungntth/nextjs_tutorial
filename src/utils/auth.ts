import { User } from '../types/user.type'
import urlAuthSSO from './authSSO'

export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const setRefreshTokenToLS = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token)
}

export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('ally-supports-cache')
}

export const getAccessTokenFromLS = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('access_token') || ''
  }
  return ''
}

export const getRefreshTokenFromLS = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('refresh_token') || ''
  }
  return ''
}

export const getProfileFromLS = () => {
  if (typeof window !== 'undefined') {
    const result = window.localStorage.getItem('profile')
    return result ? JSON.parse(result) : null
  }
  return null
}

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
