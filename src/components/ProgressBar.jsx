import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'

export default function ProgressBar({ onToggleSidebar }) {
  const { percentComplete, completedCount, totalCount } = useProgress()

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-slate-200">
      <div className="flex items-center gap-3 px-4 py-2">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden flex items-center justify-center h-9 w-9 rounded-md text-navy hover:bg-slate-100"
          aria-label="Toggle curriculum menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 5h15M2.5 10h15M2.5 15h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <Link
          to="/"
          className="flex items-center gap-1.5 shrink-0 rounded-md px-2 h-9 text-sm font-semibold text-navy hover:bg-slate-100 transition-colors"
          aria-label="Back to course home"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 9.5 10 3l7 6.5M4.5 8v8h11V8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">Home</span>
        </Link>
        <div className="flex-1">
          <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>
        <span className="whitespace-nowrap text-xs font-medium text-slate-500">
          {percentComplete}% complete &middot; {completedCount}/{totalCount}
        </span>
      </div>
    </div>
  )
}
