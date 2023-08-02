import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Submission } from '../type/submission';


export interface BodyCreateSubmission{
    language_id:number,
    source_code:string,
    stdin:string
}
export interface TokenSubmission{
    token:string
}

export const judge0Api = createApi({
    reducerPath: 'judge0Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://judge0-dev.codepy.vn/' }),
    endpoints:(builder)=>({
        execSubmission:builder.mutation<TokenSubmission,BodyCreateSubmission>({
            query:data=>({
                url:'submissions?base64_encoded=true&fields=*',
                method:'POST',
                body:data
            }
            ),
            
        }),
        getSubmission:builder.query<Submission,string>({
            query: (token) => `submissions/${token}?base64_encoded=true&fields=*`,
            
          }),
    }),



})
export const {useExecSubmissionMutation,useGetSubmissionQuery}=judge0Api
