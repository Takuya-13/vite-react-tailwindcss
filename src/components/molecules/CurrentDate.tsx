import React from 'react'
import { Label } from '../atoms/Label'
import { Span } from '../atoms/Span'
import { RetDateTime, getDayOfWeek } from '../../utils/common/dateTimeUtils'

interface Props {
  value: RetDateTime | undefined
}

const Compornent: React.FC<Props> = (props: Props) => {
  if (typeof props.value === 'undefined') return <></>
  const [year, month, day, dayofweek, hour, minute, seconds] = props.value
  return (
    <React.Fragment>
      <Label value={year} />
      <Span value="年" />
      <Label value={month + 1} />
      <Span value="月" />
      <Label value={day} />
      <Span value="日" />
      <Label value={`(${getDayOfWeek(dayofweek)})`} />
      <Label value={`${hour} : ${minute} : ${seconds}`} />
    </React.Fragment>
  )
}

export const CurrentTime = Compornent
