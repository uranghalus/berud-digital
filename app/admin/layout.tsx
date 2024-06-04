import UnautorizedPage from '@/components/UnautorizedPage'
import ANavbar from '@/components/admin/ANavbar'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  if (!session) {
    redirect('/signin')
  } else {
    if (!session.user.isAdmin) {
      return <UnautorizedPage />
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      <ANavbar />
      {/* <Sidebar /> */}
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">{children}</div>
      </div>
    </>
  )
}

export default AdminLayout
