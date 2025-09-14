"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarMenuSub, 
  SidebarMenuSubButton, 
  SidebarMenuSubItem, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent 
} from "@/components/ui/sidebar"
import { sidebarConfig, sidebarFooterItems, SidebarItem } from "@/config/sidebar"
import { LogoutButton } from "@/components/auth/logout-button"
import { UserButton } from "@/components/auth/user-button"

interface DashboardSidebarProps {
  className?: string
}

const DashboardSidebar = ({ className }: DashboardSidebarProps) => {
  const pathname = usePathname()

  const isActiveRoute = (url: string) => {
    if (url === "/dashboard") {
      return pathname === "/dashboard"
    }
    return pathname.startsWith(url)
  }

  const renderSidebarItem = (item: SidebarItem) => {
    const Icon = item.icon
    const isActive = isActiveRoute(item.url)

    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild isActive={isActive}>
          <Link href={item.url} className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            <span>{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="ml-auto">
                {item.badge}
              </Badge>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Sidebar className={cn("border-r", className)}>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">DS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">Dashboard</span>
            <span className="text-xs text-muted-foreground">Starter Kit</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1">
        {sidebarConfig.map((section, sectionIndex) => (
          <SidebarGroup key={sectionIndex}>
            {section.title && (
              <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map(renderSidebarItem)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="space-y-2">
          {/* User Profile Section */}
          <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
            <UserButton />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">User Profile</p>
              <p className="text-xs text-muted-foreground truncate">user@example.com</p>
            </div>
          </div>

          <Separator />

          {/* Footer Navigation */}
          <SidebarMenu>
            {sidebarFooterItems.map(renderSidebarItem)}
          </SidebarMenu>

          <Separator />

          {/* Logout Button */}
          <LogoutButton>
            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </Button>
          </LogoutButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar
