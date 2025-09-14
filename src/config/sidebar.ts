import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  BarChart3, 
  Calendar,
  Mail,
  Shield,
  User
} from "lucide-react"

export interface SidebarItem {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  isActive?: boolean
}

export interface SidebarSection {
  title?: string
  items: SidebarItem[]
}

export const sidebarConfig: SidebarSection[] = [
  {
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Posts",
        url: "/posts",
        icon: FileText,
      },
    ]
  },
  {
    title: "Management",
    items: [
      {
        title: "Users",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: BarChart3,
      },
      {
        title: "Calendar",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
    ]
  },
  {
    title: "Communication",
    items: [
      {
        title: "Messages",
        url: "/dashboard/messages",
        icon: Mail,
        badge: "3",
      },
    ]
  },
  {
    title: "System",
    items: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Admin",
        url: "/dashboard/admin",
        icon: Shield,
      },
    ]
  }
]

export const sidebarFooterItems: SidebarItem[] = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
]
