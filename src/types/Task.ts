export interface Task {
  id: number
  title: string
  comment: string
  prior: string
  category: string
}
export interface TimeRecord {
  durationInHour: string
  durationInMinutes: string
  tasksHour: Array<Number>
  workDate: string
  workDescription: string
  title?: string
}

export interface Day {
  weekday: string
  month: string
  monthNumeric: string
  day: number
  year: number
}
