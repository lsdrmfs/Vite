import axios from 'axios'
import { BASE_URL } from './config'

axios.defaults.baseURL = BASE_URL

async function getUser(): Promise<any> {
  try {
    const response = await axios.get('/get')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

export { getUser }
