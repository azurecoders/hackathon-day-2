import Dashboard from '@/components/dashboard/Dashboard'
import CommonLayout from '@/components/CommonLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <CommonLayout>
        <Dashboard />
      </CommonLayout>
    </div>
  )
}

export default page
