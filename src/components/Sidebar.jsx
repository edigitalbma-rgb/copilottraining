import { NavLink } from 'react-router-dom'
import { curriculum, appendixItems } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'

function lessonLabel(lesson) {
  if (lesson.type === 'checkpoint') return `Checkpoint`
  if (lesson.type === 'reference') return lesson.tableTitle
  return lesson.title
}

export default function Sidebar({ isOpen, onClose }) {
  const { isCompleted } = useProgress()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-[300px] shrink-0 overflow-y-auto bg-navy text-white transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="px-5 pt-6 pb-4 border-b border-white/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-ice">Curriculum</p>
          <h1 className="mt-1 text-lg font-bold leading-tight">Copilot for Non-Technical Users</h1>
        </div>

        <nav className="px-3 py-4 space-y-5">
          {curriculum.map((phase) => (
            <div key={phase.id}>
              <p className="px-2 mb-1.5 text-xs font-semibold uppercase tracking-wider text-ice/80">
                Phase {phase.id} · {phase.title}
              </p>
              <ul className="space-y-0.5">
                {phase.lessons.map((lesson) => {
                  const done = isCompleted(phase.id, lesson.num)
                  return (
                    <li key={lesson.num}>
                      <NavLink
                        to={`/phase-${phase.id}/lesson-${lesson.num}`}
                        onClick={onClose}
                        end
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-md px-2.5 py-2 text-sm leading-snug transition-colors ${
                            isActive
                              ? 'bg-ice text-navy font-semibold'
                              : 'text-white/85 hover:bg-white/10'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                                done
                                  ? 'bg-accent text-white'
                                  : isActive
                                    ? 'border border-navy/40'
                                    : 'border border-white/40'
                              }`}
                            >
                              {done ? '✓' : ''}
                            </span>
                            <span className="truncate">{lessonLabel(lesson)}</span>
                          </>
                        )}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          <div>
            <p className="px-2 mb-1.5 text-xs font-semibold uppercase tracking-wider text-ice/80">
              Appendix — Advanced Topics, awareness only
            </p>
            <NavLink
              to="/appendix"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-2.5 py-2 text-sm leading-snug transition-colors ${
                  isActive ? 'bg-ice text-navy font-semibold' : 'text-white/85 hover:bg-white/10'
                }`
              }
            >
              <span className="truncate">
                Advanced &amp; Developer Reference ({appendixItems.length})
              </span>
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  )
}
