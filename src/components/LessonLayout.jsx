import { useNavigate } from 'react-router-dom'

const FORMAT_STYLES = {
  Slides: 'bg-ice text-navy',
  Lab: 'bg-accent-light text-accent-dark',
  'Slides + Lab': 'bg-navy text-white',
  Reference: 'bg-slate-200 text-slate-700',
  Checkpoint: 'bg-amber-100 text-amber-800',
}

export function FormatBadge({ label }) {
  const style = FORMAT_STYLES[label] || 'bg-slate-200 text-slate-700'
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${style}`}>
      {label}
    </span>
  )
}

export default function LessonLayout({
  phase,
  totalPhases,
  lessonIndexInPhase,
  lessonCountInPhase,
  title,
  formatBadge,
  time,
  prevPath,
  nextPath,
  canContinue,
  children,
}) {
  const navigate = useNavigate()

  return (
    <div key={`${phase.id}-${lessonIndexInPhase}`} className="mx-auto max-w-3xl px-6 py-8 md:py-12 animate-fadeIn">
      <p className="text-sm font-semibold text-accent-dark">
        Phase {phase.id} of {totalPhases - 1} &middot; Lesson {lessonIndexInPhase} of {lessonCountInPhase}
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-navy leading-tight">{title}</h1>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {formatBadge && <FormatBadge label={formatBadge} />}
        {time && (
          <span className="inline-flex items-center gap-1 text-sm text-slate-500">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10 6v4l2.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            {time}
          </span>
        )}
      </div>

      <div className="mt-8">{children}</div>

      <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6">
        <button
          onClick={() => navigate(prevPath)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={() => canContinue && navigate(nextPath)}
          disabled={!canContinue}
          className={`inline-flex items-center gap-1.5 rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors ${
            canContinue
              ? 'bg-navy text-white hover:bg-navy-light'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
          title={canContinue ? undefined : 'Complete this lesson to continue'}
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
