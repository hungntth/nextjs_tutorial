import { ILanguage } from './language.type'

export interface IProject {
  id: string
  name: string
  code: string
  language: ILanguage
  created_at: string
}

export interface ProjectRequest {
  name: string
  code: string
  language_id: number
}

export interface ProjectResponse {
  success: boolean
  message: string
  errors: any
  data?: IProject
}

export interface Projects {
  success: boolean
  message: string
  errors: any
  data: {
    total_page: number
    total_records: number
    current_page: number
    data?: IProject[]
  }
}
