import { getDayProperty, prepareISODateString, getMountNumber } from '@/helpers/DateHelpers'

import { expect, test } from 'vitest'

// getDayProperty
test('It given local date formatted string, function getDayProperty return day object', () => {
  expect(getDayProperty('Sunday, April 2, 2023')).toEqual({
    weekday: 'Sunday',
    month: 'April',
    monthNumeric: '04',
    year: 2023,
    day: 2,
  })

  expect(getDayProperty('Saturday, November 11, 2023')).toEqual({
    weekday: 'Saturday',
    month: 'November',
    monthNumeric: '11',
    year: 2023,
    day: 11,
  })

  expect(getDayProperty('Sunday, December 31, 2023')).toEqual({
    weekday: 'Sunday',
    month: 'December',
    monthNumeric: '12',
    year: 2023,
    day: 31,
  })
})

// prepareISODateString
test('It given day mount and year, function prepareISODateString return ISO date string', () => {
  expect(prepareISODateString(2023, 4, 3)).toBe('2023-04-03')
  expect(prepareISODateString(2023, 11, 3)).toBe('2023-11-03')
  expect(prepareISODateString(2023, 12, 3)).toBe('2023-12-03')
})

//getMountNumber
test('It given mount string, function getMountNumber in case of digit x return 0x', () => {
  expect(getMountNumber('May')).toBe('05')
  expect(getMountNumber('December')).toBe('12')
  expect(getMountNumber('July')).toBe('07')
})
