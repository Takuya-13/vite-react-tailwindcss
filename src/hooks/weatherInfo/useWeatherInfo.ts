import { CurrentWeatherDataResp, FetchParams } from '../../data/OpenWeatherMap'
import * as call from '../../services/weatherInfo/reqWeatherInfo'
/**
 * 気象情報API呼び出し用カスタムフック
 * @memo
 *  https://openweathermap.org/api
 *  ↑の内、無償で使用できるのは「Current weather data」と「One Call API」の2つだけ
 * @returns 気象情報取得APIをcallする関数
 */
export const useWeatherInfo = () => {
  const API_KEY = import.meta.env.VITE_API_KEY as string
  // 気象情報の取得
  const fetchWeatherInfo = async (): Promise<
    CurrentWeatherDataResp | undefined
  > => {
    try {
      const params: FetchParams = {
        // 緯度・経度を指定する場合
        // lat: str,
        // lon: str,
        q: 'tokyo',
        appid: API_KEY,
        units: 'metric',
        lang: 'ja',
      }

      const { status, body } = await call.fetchWeatherInfo(params)

      if (status !== 200) return undefined

      return body
    } catch (err) {
      console.log({ err })
    }
  }

  // 指定された都市の気象情報の取得
  // const fetchCityWeatherInfo = async (city: string) => {
  //   try {
  //     const params: FetchParams = {
  //       // 緯度・経度を指定する場合
  //       // lat: str,
  //       // lon: str,
  //       q: city,
  //       appid: API_KEY,
  //       units: 'metric',
  //       lang: 'ja',
  //     }
  //     const { status, body } = call.fetchCityWeatherInfo(params)
  //     if (status !== 200) return []
  //     return body
  //   } catch (err) {
  //     console.log({ err })
  //   }
  // }

  return {
    fetchWeatherInfo,
    // fetchCityWeatherInfo,
  }
}
