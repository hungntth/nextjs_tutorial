import axios from 'axios'

export const getLanguages = () => axios.get('https://api-dev.codepy.vn/api/v1/languages')
