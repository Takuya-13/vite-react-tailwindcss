/**
 * APIリクエストヘッダーの生成
 */
export const createAPIHeader = (
  // accessToken: string,
  method: string,
  body?: string | FormData,
  contentType?: string
): RequestInit => {
  // const authorization = `Bearer ${accessToken}`

  if (contentType !== 'multipart/form-data') {
    return {
      method, // fetch | post | put | patch | delete
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType || 'application/json',
        'accept-language': 'ja',
        // Authorization: authorization,
      },
      body,
    }
  }

  return {
    method,
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'accept-language': 'ja',
      // Authorization: authorization,
    },
    body,
  }
}

/**
 * APIリクエストのクエリパラメータの生成
 */
export const convertToURLSearchParams = <T>(params: T): string[][] => {
  const searchParams: string[][] = []

  if (!params) return searchParams

  for (const [key, val] of Object.entries(params)) {
    if (!val) continue

    // 複数指定する場合は&でつなげる
    if (Array.isArray(val)) {
      val.forEach((e) => {
        searchParams.push([key, e])
      })
      continue
    }
    searchParams.push([key, String(val)])
  }

  return searchParams
}

/**
 * HTTP ステータスコード別のエラーメッセージを返却
 */
export const chkResponseStatus = (status: number): string => {
  switch (status) {
    case 200:
      return ''
    case 201:
      return ''
    case 400:
      return 'unexpected'
    case 401:
      return 'unauthorized'
    case 404:
      return 'not found'
    case 409:
      return 'conflict'
    default:
      return 'unexpected'
  }
}
