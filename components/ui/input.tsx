import * as React from 'react'

import { cn } from '@/lib/utils'
import { FieldError } from 'react-hook-form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <input
          type={type}
          className={cn(
            'flex  py-3 px-4 w-full rounded-lg border border-gray-200 bg-transparent text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-pink-500 text-xs italic mt-1 py-2">
            {error.message}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
