import { ReactNode } from 'react'

type TextGradientProps = {
  children: ReactNode
  fast?: boolean
  from?: string
  via?: string
  to?: string
}

export default function TextGradient(props: TextGradientProps) {
  const from = props.from || 'from-orange-700'
  const via = props.via || 'from-blue-500'
  const to = props.to || 'to-green-400'

  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} bg-300% bg-clip-text text-transparent animate-gradient-${props.fast ? 'fast' : 'slow'}`}
    >
      {props.children}
    </span>
  )
}
