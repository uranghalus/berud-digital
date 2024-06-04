import FNavbar from '@/components/frontend/FNavbar'
import React from 'react'

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FNavbar />
      <main>{children}</main>
    </>
  )
}
