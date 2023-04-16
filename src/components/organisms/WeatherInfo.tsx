import React from 'react'
import { CurrentWeather } from '../molecules/CurrentWeather'
import { Props } from '../templates/WeatherInfo'

const Component: React.FC<Props> = (props) => {
  return (
    <div className="container mx-auto">
      {/* ml/r-autoはflex要素の子要素にあてる */}
      {/* 現在の情報とその他の情報 */}
      <div className=" h-40 mt-6 w-full mx-auto">
        <div className=" p-4 mb-6 mx-auto text-medium">
          <CurrentWeather {...props} />
        </div>
      </div>
    </div>
  )
}

export const WeatherInfoContainer = Component
