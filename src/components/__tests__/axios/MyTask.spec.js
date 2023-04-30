import { describe, expect, test, vi } from 'vitest'
import { getMyTasks } from '@/services/MyTasks'
import { myTasksMock } from './axiosUtils'
import axios from 'axios'

vi.mock('axios')

describe('My Task Service', () => {
  describe('getMyTasks', () => {
    test('makes a GET request to fetch my tasks', async () => {
      axios.get.mockResolvedValue({ data: myTasksMock })
      const tasks = await getMyTasks()

      expect(() => axios.get.toHaveBeenCalledWith('http://localhost:3000/tasks'))
      expect(tasks).toStrictEqual(myTasksMock)
    })
  })
})
