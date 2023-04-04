import type { Day } from '@/types/Task'

type dateElement = string | number

export function prepareISODateString(
  year: dateElement,
  month: dateElement,
  day: dateElement
): string {
  return `${String(year)}-${String(month).length === 1 ? `0${String(month)}` : String(month)}-${
    String(day).length === 1 ? `0${String(day)}` : String(day)
  }`
}

export function getMountNumber(mount: string): string {
  const allMounts = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const mountNumber = allMounts.findIndex((element) => mount === element) + 1
  if (String(allMounts.findIndex((element) => mount === element) + 1).length === 1) {
    return `0${mountNumber}`
  }
  return String(mountNumber)
}
export function getDayProperty(dateLocalStringFormat: string): Day {
  return {
    weekday: dateLocalStringFormat.split(',')[0],
    month: dateLocalStringFormat.split(',')[1].split(' ')[1],
    monthNumeric: getMountNumber(String(dateLocalStringFormat.split(',')[1].split(' ')[1])),
    year: Number(dateLocalStringFormat.split(',')[2]),
    day: Number(dateLocalStringFormat.split(',')[1].split(' ')[2])
  }
}
export function getLocalDateFormat(year: number, month: number, day: number): string {
  return new Date(year, month - 1, day).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
