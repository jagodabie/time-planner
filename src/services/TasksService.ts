import axios from 'axios'
const baseURL = 'http://localhost:3000'

export const getMyTasks = async () => {
  return (await axios.get(`${baseURL}/tasks/`)).data
}

export const getTimeRecords = async () => {
  return (await axios.get(`${baseURL}/tasks-time/`)).data
}
