'use client'
import { useState } from 'react'
import Sidebar    from './Sidebar'
import SocialFloat from './SocialFloat'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar collapsed={collapsed} onToggleCollapse={() => setCollapsed(c => !c)} />
      <SocialFloat />
      <main
        className="flex-1 min-h-screen transition-[margin] duration-300 ease-in-out max-[900px]:ml-0"
        style={{ marginLeft: `var(--sidebar-w, ${collapsed ? '64px' : '220px'})` }}
      >
        {children}
      </main>
    </div>
  )
}
