import { useGetDaysOfWeeksDate } from '@/composables/useGetDaysOfWeeksDate'
import { expect, test } from 'vitest'

// useGetDaysOfWeeksDate
test('It given iso date string or not, function useGetDaysOfWeeksDate return Returns arrays of day objects occurring in week of the day', () => {
  expect(useGetDaysOfWeeksDate()).toEqual([
    {
      weekday: 'Sunday',
      month: 'April',
      monthNumeric: '04',
      year: 2023,
      day: 2,
    },
    {
      weekday: 'Monday',
      month: 'April',
      monthNumeric: '04',
      year: 2023,
      day: 3,
    },
    {
      weekday: 'Tuesday',
      month: 'April',
      monthNumeric: '04',
      year: 2023,
      day: 4,
    },
    {
      weekday: 'Wednesday',
      month: 'April',
      monthNumeric: '04',
      year: 2023,
      day: 5,
    },
    {
      weekday: 'Thursday',
      month: 'April',
      monthNumeric: '04',
      year: 2023,
      day: 6,
    },
    {
      weekday: 'Friday',
      month: 'April',
      monthNumeric: '04',
      year: 2023,
      day: 7,
    },
    {
      weekday: 'Saturday',
      month: 'April',
      monthNumeric: '04',
      year: 2023,
      day: 8,
    },
  ])
})
