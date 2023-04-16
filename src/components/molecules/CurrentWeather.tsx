import React from 'react'
import { Label } from '../atoms/Label'
import { Span } from '../atoms/Span'
import { Props } from '../templates/WeatherInfo'

const Component: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      {/* 現在の気温 */}
      <div className="flex mb-7 mx-7">
        <Label
          value={`検索結果: ${props.cityName}`}
          className="text-xl font-medium my-auto"
        />
        <input
          type="form"
          placeholder="都市を検索..."
          className=" rounded-md border border-black mr-3 ml-6 px-4 my-auto"
        />
        <input
          type="submit"
          value="検索"
          className="text-sm border-0 my-auto px-4 py-1 rounded-md bg-green-600 hover:bg-green-700 duration-300"
          onClick={() => console.log('検索')}
        />
      </div>
      <div className="flex mx-7">
        <img src={props.icon} alt="" className="my-auto w-12 h-12 mr-5" />
        <Span
          value={props.temp}
          unit=""
          className={`text-5xl/relaxed font-black mt-auto ${props.fontColor}`}
        />
        <Label value={'℃'} className="text-xl font-medium mx-2 mt-3" />
      </div>
      {/* 最高・最低気温 */}
      {/* 雲の量 */}
      {/* 雨量 */}
      {/* 積雪量 */}
    </React.Fragment>
  )
}

export const CurrentWeather = Component
