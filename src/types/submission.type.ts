import { ResponseApi } from './util.type'

type Submission = {
  token: string
}

export type SubmissionRequest = {
  language_id: number
  project_id: string
  source_code: string
}

export interface SubmissionResponse extends ResponseApi {
  data: Submission
}

export interface OutputSubmissionResponse extends ResponseApi {
  data: {
    compile_output: string | null
    memory: number
    message: string | null
    status: {
      description: string
      id: number
    }
    stderr: string | null
    stdout: string
    time: string
    token: string
  }
}
