import React from 'react'
import { WeatherInfoContainer } from '../organisms/WeatherInfo'

export interface Props {
  cityName: string
  temp: number | '-'
  temp_max: number | '-'
  temp_min: number | '-'
  fontColor: string
  icon: string
}

const Component: React.FC<Props> = (props) => {
  return <WeatherInfoContainer {...props} />
}

export const WeatherInfo = Component
