export type AlertType = 'default' | 'success' | 'error'

export type AlertProps = {
  type: AlertType
  message: string
}

export type AlertListProps = {
  alerts: AlertProps[]
}
