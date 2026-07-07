import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import ProgressBar from './ProgressBar'

export default function CourseLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-h-screen w-full flex-1 flex-col">
        <ProgressBar onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
