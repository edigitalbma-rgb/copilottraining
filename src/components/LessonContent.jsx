export default function LessonContent({ lesson, completed, onMarkComplete }) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Why it matters</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">{lesson.why}</p>
      </section>

      {lesson.url && (
        <a
          href={lesson.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-ice px-5 py-3 text-sm font-semibold text-navy hover:bg-ice-dark transition-colors"
        >
          Open source module
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 5h8v8M15 5 5 15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}

      {!lesson.url && (
        <p className="text-sm text-slate-400 italic">
          This is a facilitator-led session — there is no source module link for this lesson.
        </p>
      )}

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm text-slate-600">
          Engaged with the module above? Mark this lesson complete to unlock Continue.
        </p>
        <button
          onClick={onMarkComplete}
          disabled={completed}
          className={`mt-3 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
            completed
              ? 'bg-accent-light text-accent-dark cursor-default'
              : 'bg-accent text-white hover:bg-accent-dark'
          }`}
        >
          {completed ? '✓ Completed' : 'Mark as complete'}
        </button>
      </div>
    </div>
  )
}
