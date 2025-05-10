// Tremor Button [v1.0.0]

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { RiLoader2Fill } from '@remixicon/react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cx } from '@/lib/utils'
import {
  btnBase,
  btnColors,
  btnGhost,
  btnOutline,
  btnSolid,
  buttonColors,
} from './btn-utils'

const buttonVariants = tv({
  base: btnBase,
  variants: {
    variant: {
      primary: btnColors['accent'],
      accent: btnColors['zinc'],
      secondary: btnOutline,
      light: btnColors['light'],
      ghost: btnGhost,
      destructive: btnColors['red'],
    },
    scheme: btnColors,
  },
  compoundVariants: [
    {
      variant: ['destructive', 'accent', 'primary', 'light'],
      class: btnSolid,
    },
    {
      scheme: buttonColors,
      class: btnSolid,
    },
  ],
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        disabled={disabled || isLoading}
        tremor-id="tremor-raw"
        {...props}
      >
        {isLoading ?
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : 'Loading'}
            </span>
            {loadingText ? loadingText : children}
          </span>
        : children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants, type ButtonProps }
