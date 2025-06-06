// Tremor Card [v1.0.0]

import React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cx } from '@/lib/utils'

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'div'
    return (
      <Component
        ref={forwardedRef}
        className={cx(
          // base
          'relative w-full rounded-2xl border p-6 text-left shadow-xs',
          // background color
          'bg-main ',
          // border color
          'border-brd-main ',
          className
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card, type CardProps }
