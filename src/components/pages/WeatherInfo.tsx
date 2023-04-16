import React, { useEffect, useState } from 'react'
import { CurrentWeatherDataResp } from '../../data/OpenWeatherMap'
import { useWeatherInfo } from '../../hooks/weatherInfo/useWeatherInfo'
import { WeatherInfo } from '../templates/WeatherInfo'
import sun from '../../assets/images/icons8-sun-48.png'
import rain from '../../assets/images/icons8-rain-48.png'
import wind from '../../assets/images/icons8-wind-48.png'
import cloud from '../../assets/images/icons8-cloud-48.png'

export const Component: React.FC = () => {
  /**
   * めも
   * 表示項目：
   *  現在の気温と天気（アイコン）
   *  最高/最低気温
   *  都市名
   *  湿度
   *  風速
   *  雲量
   * 天気によってアイコン変える
   * 検索機能
   */
  const [weatherInfo, setWeatherInfo] = useState<CurrentWeatherDataResp>()
  const { fetchWeatherInfo } = useWeatherInfo()
  const cityName = weatherInfo?.name || ''
  const temp = weatherInfo?.main.temp || '-'
  const temp_max = weatherInfo?.main.temp_max || 0
  const temp_min = weatherInfo?.main.temp_min || 0
  const fontColor =
    typeof temp !== 'string'
      ? temp >= 30
        ? 'text-red-900'
        : temp >= 25
        ? 'text-orange-500'
        : temp >= 20
        ? 'text-green-400'
        : temp >= 15
        ? 'text-blue-400'
        : temp >= 10
        ? 'text-blue-600'
        : 'text-gray-800'
      : ''
  const icon =
    weatherInfo?.weather[0].main === 'Sun'
      ? sun
      : weatherInfo?.weather[0].main === 'Cloud'
      ? cloud
      : weatherInfo?.weather[0].main === 'Rain'
      ? rain
      : weatherInfo?.weather[0].main === 'Wind'
      ? wind
      : sun

  useEffect(() => {
    ;(async () => {
      const res = await fetchWeatherInfo()
      setWeatherInfo(res)
    })()
  }, [])

  useEffect(() => {
    console.log({ weatherInfo })
  }, [weatherInfo])

  return (
    <WeatherInfo
      cityName={cityName}
      temp={temp}
      temp_max={temp_max}
      temp_min={temp_min}
      fontColor={fontColor}
      icon={icon}
    />
  )
}
