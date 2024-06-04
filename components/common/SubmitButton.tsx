import React from 'react'
import { RiLoaderFill } from '@remixicon/react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface SubmitButtonProps {
  text: string
  loadingText: string
  className?: string
  loading?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
}

function Loader({ text }: { readonly text: string }) {
  return (
    <div className="flex items-center space-x-2">
      <RiLoaderFill className="mr-2 h-4 w-4 animate-spin" />
      <span>{text}</span>
    </div>
  )
}

export default function SubmitButton({
  text,
  loadingText,
  loading,
  className,
  size = 'default',
  variant = 'default',
}: Readonly<SubmitButtonProps>) {
  const status = useFormStatus()
  return (
    <Button
      type="submit"
      aria-disabled={status.pending || loading}
      disabled={status.pending || loading}
      variant={variant}
      size={size}
      className={cn(
        className,
        'disabled:opacity-50 disabled:pointer-events-none'
      )}
    >
      {status.pending || loading ? <Loader text={loadingText} /> : text}
    </Button>
  )
}
