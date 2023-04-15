import React from 'react'

interface Props {
  className?: string
  value: string | number
  unit?: string
}

const Component: React.FC<Props> = (props: Props) => {
  return (
    <span className={props.className}>
      {props.value} {props.unit || ''}
    </span>
  )
}

export const Span = Component
