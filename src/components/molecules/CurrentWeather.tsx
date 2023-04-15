import React from 'react'
import { Label } from '../atoms/Label'
import { Span } from '../atoms/Span'
import { Props } from '../templates/WeatherInfo'

const Component: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      {/* 現在時刻 */}
      {/* 現在の気温 */}
      <div className="flex justify-center mb-4">
        <Label
          value={props.cityName}
          className="text-2xl font-medium mr-4 my-auto"
        />
      </div>
      <div className="flex justify-center">
        <Span
          value={props.temp}
          unit=""
          className={`text-3xl my-auto  ${props.fontColor}`}
        />
        <Label value={'℃'} className="text-2xl font-medium mx-4 my-auto" />
        <img src={props.icon} alt="" className="my-auto w-7 h-7" />
      </div>
      {/* 最高・最低気温 */}
      {/* 雲の量 */}
      {/* 雨量 */}
      {/* 積雪量 */}
    </React.Fragment>
  )
}

export const CurrentWeather = Component
