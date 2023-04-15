// API Response
export interface CurrentWeatherDataResp {
    [x: string]: any
    coord: {
      lon: number
      lat: number
    }
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    base: string
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
      sea_level: number
      grnd_level: number
    }
    visibility: number
    wind: {
      speed: number
      deg: number
      gust: number
    }
    rain: {
      '1h': number
    }
    clouds: {
      all: number
    }
    dt: number
    sys: {
      type: number
      id: number
      country: string
      sunrise: number
      sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number                    
}

// Fetch Params
export interface FetchParams {
  q?: string
  appid: string
  units: string
  lang: string
}