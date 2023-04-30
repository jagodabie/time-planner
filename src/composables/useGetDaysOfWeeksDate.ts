import { getDayProperty, getLocalDateFormat } from '@/helpers/DateHelpers'
import type { Day } from '@/types/Task'

export function useGetDaysOfWeeksDate(date?: string): { weekdaysDates: Day[] } {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dt = date ? new Date(date) : new Date()
  const day = dt.getDate()
  const month = dt.getMonth() + 1
  const year = dt.getFullYear()
  const weekdaysDates: Day[] = []

  const daysBeforeToday = weekdays.slice(
    0,
    weekdays.indexOf(getLocalDateFormat(year, month, day).split(',')[0]),
  )
  const dayAfterToday = weekdays.slice(
    weekdays.indexOf(getLocalDateFormat(year, month, day).split(',')[0]),
    7,
  )

  for (let i = daysBeforeToday.length; i > 0; i--) {
    weekdaysDates.push(getDayProperty(getLocalDateFormat(year, month, day - i)))
  }

  for (let i = 0; i < dayAfterToday.length; i++) {
    weekdaysDates.push(getDayProperty(getLocalDateFormat(year, month, day + i)))
  }
  return { weekdaysDates }
}
