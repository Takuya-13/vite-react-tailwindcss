import React, { useEffect, useState } from 'react'
import { Label } from '../atoms/Label'
import { RetDateTime, getDateTime } from '../../utils/common/dateTimeUtils'
import { CurrentTime } from '../molecules/CurrentDate'

const Component: React.FC = () => {
  const [dateTime, setDateTime] = useState<RetDateTime>()

  useEffect(() => {
    // 現在時刻取得
    setInterval(() => {
      setDateTime(getDateTime())
    }, 1000)
  }, [])

  return (
    <header className="border-b border-gray-500">
      {/* md: xxx  → 幅が768px以上のときにスタイルが適用される */}
      <div className="container flex p-4 flex-col md:flex-row mx-auto ">
        <div className="mr-auto">
          <Label value="Obenkyou" className="font-semibold text-2xl " />
        </div>
        <div className="ml-auto my-auto font-semibold text-l">
          <CurrentTime value={dateTime} />
        </div>
      </div>
    </header>
  )
}

export const Header = Component
