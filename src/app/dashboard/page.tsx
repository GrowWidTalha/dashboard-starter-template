import DashboardPage from '@/components/dashboard-page'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <DashboardPage title='Home' hideBackButton cta={<Button>Hello</Button>}>page</DashboardPage>
  )
}

export default page