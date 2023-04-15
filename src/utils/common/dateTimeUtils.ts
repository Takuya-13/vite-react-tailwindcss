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

export type RetDateTime = [
  number,
  number,
  number,
  number,
  string,
  string,
  string
]
