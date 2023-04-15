/**
 * fetch API 関数のレスポンス
 */
export interface FetchAPIResp<T> {
  status: number
  body: T
}

/**
 * fetch API 利用しAPIリクエストを実行する
 * @param url 
 * @param options 
 * @returns APIからの返却値（statusとbody）
 */
export const fetchAPI = async <T>(
  url: string,
  options: RequestInit | undefined
): Promise<FetchAPIResp<T>> => {
  const response = await fetch(url, options).then((res) => {
    if (res.status === 200) {
      return res.json().then((data) => ({
        status: res.status,
        body: data
      }))
    }

    return {
      status: res.status,
      body: undefined
    }
  })

  return response
}