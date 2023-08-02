import { OutputSubmissionResponse, SubmissionRequest, SubmissionResponse } from '../types/submission.type'
import http from '../utils/http'

const baseApi = process.env.BASE_API

export const createSubmission = (body: SubmissionRequest) =>
  http.post<SubmissionResponse>(`${baseApi}submissions`, body)

export const getSubmission = (token: string) => http.get<OutputSubmissionResponse>(`${baseApi}submissions/${token}`)
