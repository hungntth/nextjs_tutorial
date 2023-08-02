import axios from 'axios'

const createInstance = (path: string, access_token?: string) => {
  const instance = axios.create({
    baseURL: `${process.env.BASE_API + path}`,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  instance.interceptors.request.use(
    (config) => {
      if (access_token && config.headers) {
        config.headers.authorization = 'Bearer ' + access_token
        return config
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return instance
}

export default createInstance
