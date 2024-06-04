import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-default-600 text-white hover:bg-default-700',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-default-600 text-default-600 hover:border-default-500 hover:text-default-500',
        secondary:
          'border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50',
        ghost: 'hover:bg-gray-50 hover:text-gray-700',
        link: 'border border-transparent text-default-600 hover:text-default-800',
      },
      size: {
        default: 'py-3 px-4',
        sm: 'py-2 px-3 rounded-md px-3 text-xs',
        lg: 'p-4 sm:p-5',
        icon: 'py-3 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
