import React from 'react'
import { CurrentWeather } from '../molecules/CurrentWeather'
import { Props } from '../templates/WeatherInfo'

const Component: React.FC<Props> = (props) => {
  return (
    <div className="container mx-auto">
      {/* 検索フォーム */}
      {/* ml/r-autoはflex要素の子要素にあてる */}
      <div className="flex mt-6 mx-auto h-16 ">
        <div className="ml-auto my-auto">
          <input
            type="form"
            placeholder="都市を検索..."
            className=" rounded-md border border-black mr-3 px-4 py-1"
          />
          <input
            type="submit"
            value="検索"
            className="text-medium text-white border-0 mr-4 bg-green-500 m-2 px-4 py-1 rounded-md hover:bg-green-600 duration-300"
            onClick={() => console.log('検索')}
          />
        </div>
      </div>
      {/* 現在の情報とその他の情報 */}
      <div className="flex h-56 mt-6 w-11/12 mx-auto">
        <div className="w-5/12 p-4 mx-auto text-white bg-gray-900 border border-gray-400 rounded-md">
          <CurrentWeather {...props} />
        </div>
        <div className="w-5/12 p-4 mx-auto text-white bg-gray-900 border border-gray-400 rounded-md">
          最高最低気温とか湿度とか
        </div>
      </div>
    </div>
  )
}

export const WeatherInfoContainer = Component
