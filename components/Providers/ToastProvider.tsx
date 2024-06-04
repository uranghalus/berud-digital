import React from 'react'
import { Toaster } from '../ui/sonner'

import {
  RiAlarmWarningFill,
  RiCheckDoubleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiRefreshLine,
} from '@remixicon/react'

const toastOption = {
  unstyled: true,
  classNames: {
    toast: 'flex items-center rounded-lg p-4 gap-6 w-full',
    title: 'text-base font-bold text-white',
    description: 'text-sm text-white',
    icon: 'text-white',
    error: 'bg-red-500 ',
    success: 'bg-teal-500 ',
    warning: 'bg-yellow-500 ',
    info: 'bg-blue-600 dark:bg-blue-500',
  },
}
const icon = {
  success: <RiCheckDoubleFill className="size-10" />,
  info: <RiInformationFill className="size-10" />,
  warning: <RiAlarmWarningFill className="size-10" />,
  error: <RiErrorWarningFill className="size-10" />,
  loading: <RiRefreshLine className="size-10" />,
}
function ToastProvider() {
  return (
    <Toaster position="top-right" toastOptions={toastOption} icons={icon} />
  )
}

export default ToastProvider
