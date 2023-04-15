import React from 'react'

interface Props {
  className?: string
  value: any
  unit?: string
}

// eslint-disable-next-line no-undef
const Component: React.FC<Props> = (props: Props) => {
  return (
    <label className={props.className}>
      {props.value} {props.unit || ''}
    </label>
  )
}

export const Label = Component
