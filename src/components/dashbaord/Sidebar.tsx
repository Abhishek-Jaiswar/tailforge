'use client'

import Logo from '../../components/Logo'
import { Layers2Icon, LayoutDashboard, SparkleIcon, UserCircleIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarT {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarT) => {
  const pathname = usePathname()
  const navigations = [
    {
      id: 0,
      path: "/dashboard",
      title: "Home",
      icon: LayoutDashboard
    },
    {
      id: 1,
      path: "/dashboard/categories",
      title: "Categories",
      icon: Layers2Icon
    },
    {
      id: 2,
      path: "/dashboard/ai",
      title: "Use Ai",
      icon: SparkleIcon
    },
    {
      id: 3,
      path: "/dashboard/profile",
      title: "Profile",
      icon: UserCircleIcon
    },
  ]

  return (
    <div className='min-h-screen bg-neutral-800/30 w-full border-r border-neutral-700'>
      <div className="flex items-center justify-center w-full h-12 border-b border-neutral-700">
        {isOpen ? <Logo /> : (
          <h1 className='text-neutral-300 text-lg font-bold font-mono'>TF</h1>
        )}
      </div>

      <div className={`${isOpen ? "p-4" : "p-1"}`}>
        <div className="flex flex-col items-start justify-center w-full gap-2">
          {navigations.map(({ icon: Icon, id, title, path }) => {
            // More precise active state logic to prevent glitches
            const isActive = path === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(path);

            return (
              <Link key={id} href={path} className='w-full'>
                <div className={`w-full p-3 flex items-center gap-3 rounded-xl transition-colors duration-150 hover:bg-neutral-700/50
                  ${isActive ? "bg-neutral-700" : ""}
                `}>
                  <Icon className='w-5 h-5 text-neutral-100 flex-shrink-0' />
                  {isOpen && (
                    <span className='text-neutral-100 whitespace-nowrap overflow-hidden'>
                      {title}
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar