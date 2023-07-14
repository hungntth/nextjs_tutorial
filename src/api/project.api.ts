import { AuthRequest, AuthResponse } from '../types/auth.type'
import { IProject, ProjectRequest, ProjectResponse, Projects } from '../types/project.type'
import http from '../utils/http'
import { removeNullUndefinedKeys } from '../utils/utils'

const baseApi = process.env.BASE_API

export const getAllMyProject = (
  page: number | string,
  per_page: number | string,
  language_id: number | string | null,
  deleted: boolean
) => {
  const params = removeNullUndefinedKeys({
    page,
    per_page,
    language_id,
    deleted
  })
  return http.get<Projects>(`${baseApi}projects`, {
    params: params
  })
}

export const createProject = (project: ProjectRequest) => http.post<ProjectResponse>(`${baseApi}projects`, project)
