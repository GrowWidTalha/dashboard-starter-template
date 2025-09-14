import React from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import DashboardSidebar from '@/components/dashboard-sidebar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="flex-1">
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default layout