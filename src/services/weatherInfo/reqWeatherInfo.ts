import { FetchParams } from '../../data/OpenWeatherMap'
import { convertToURLSearchParams } from '../../utils/httpRequestUtils'
import { urlConstants } from '../../appConstants'
import {
  fetchAPI,
  FetchAPIResp,
} from '../../utils/httpRequestUtils/fetchAsJSON'
import { CurrentWeatherDataResp } from '../../data/OpenWeatherMap'

/**
 * Current Weather Data APIへリクエスト実行
 * https://openweathermap.org/current
 * @param params
 */
export const fetchWeatherInfo = async (
  params: FetchParams
): Promise<FetchAPIResp<CurrentWeatherDataResp>> => {
  // クエリパラメータの作成
  const convertParams = convertToURLSearchParams(params)
  const query = new URLSearchParams(convertParams).toString()

  // API リクエスト
  const res: FetchAPIResp<CurrentWeatherDataResp> = await fetchAPI(
    `${urlConstants.CURRENT_WEATHER_DATA}?${query}`,
    undefined
  )
  return res
}

// export const fetchCityWeatherInfo = (params: FetchParams) => {}
