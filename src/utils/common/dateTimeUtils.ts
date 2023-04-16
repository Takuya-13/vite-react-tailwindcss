/**
 * 現在日時の取得
 * @returns 現在時刻
 */
export const getDateTime = (): RetDateTime => {
  const d = new Date()
  const [year, month, day, dayofweek, hour, minute, seconds] = [
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getDay(),
    d.getHours().toString().padStart(2, '0'),
    d.getMinutes().toString().padStart(2, '0'),
    d.getSeconds().toString().padStart(2, '0'),
  ]

  return [year, month, day, dayofweek, hour, minute, seconds]
}

/**
 * 曜日の取得
 * @param dayofweek
 * @returns
 */
export const getDayOfWeek = (dayofweek: number): string => {
  const ret =
    dayofweek === 0
      ? '日'
      : dayofweek === 1
      ? '月'
      : dayofweek === 2
      ? '火'
      : dayofweek === 3
      ? '水'
      : dayofweek === 4
      ? '木'
      : dayofweek === 5
      ? '金'
      : '土'
  return ret
}

export type RetDateTime = [
  number,
  number,
  number,
  number,
  string,
  string,
  string
]
