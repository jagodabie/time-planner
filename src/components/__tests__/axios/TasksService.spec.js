import { describe, expect, test, vi } from 'vitest'
import { getMyTasks } from '@/services/TasksService'
import { myTasksMock, timeRecordsMock } from './axiosUtils'
import axios from 'axios'

vi.mock('axios')

describe('My Task Service', () => {
  test('makes a GET request to fetch my tasks', async () => {
    axios.get.mockResolvedValue({ data: myTasksMock })
    const tasks = await getMyTasks()

    expect(() => axios.get.toHaveBeenCalledWith('http://localhost:3000/tasks'))
    expect(tasks).toStrictEqual(myTasksMock)
  })
  test('makes a GET request to fetch time records from API', async () => {
    axios.get.mockResolvedValue({ data: timeRecordsMock })
    const tasks = await getMyTasks()

    expect(() => axios.get.toHaveBeenCalledWith('http://localhost:3000/tasks-time/'))
    expect(tasks).toStrictEqual(timeRecordsMock)
  })
})
